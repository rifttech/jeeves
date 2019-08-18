import * as commander from "commander";

const pkg = require("../../package.json");
let program = new commander.Command();

program.version(pkg.version);

program
    .command("get <value>")
    .description("get server")
    .action((s, d) => {
        console.log(s, d);
    });
export default program;
