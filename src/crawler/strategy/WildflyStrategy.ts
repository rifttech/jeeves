import { Request } from "request";
import * as cheerio from "cheerio";
import { IStrategy, Result, Error } from "./IStrategy";
import { GroupedWildFlyRegistry } from "./Payload";
import * as rp from "request-promise";

const WF_URL = "https://wildfly.org/downloads/";

export default class WildFlyStrategy implements IStrategy<GroupedWildFlyRegistry> {
    public use(result: Result<GroupedWildFlyRegistry>, err: Error): void {
        let options = <any>{
            uri: WF_URL,
            transform: function(body) {
                return cheerio.load(body);
            },
        };

        rp(options)
            .then(this.crawlPage(result))
            .catch(e => {
                err(e);
            });
    }

    private crawlPage(result: Result<GroupedWildFlyRegistry>) {
        return ($: any) => {
            let links = [];
            $("table>tbody>tr>td>a").each(function() {
                let link: string = $(this).attr("href");
                //console.log(link);
                if (link.search(/wildfly-\d{2}\.\d\.\d\.Final\.(zip|tar\.gz)$/gm) !== -1) {
                    //console.log("pushed", link);
                    let version = link.match(/\d\d\.\d.\d/)[0];
                    let zip = link.match("/zip$/");
                    let type = zip ? zip[0] : "tar.gz";
                    links.push({
                        link: link,
                        version: version,
                        type: type,
                    });
                }
            });
            let group = links.reduce((r, a) => {
                r[a.version] = [...(r[a.version] || []), a];
                return r;
            }, {});
            result(group);
        };
    }
}
