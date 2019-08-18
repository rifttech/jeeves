import { homedir } from "os";
//import {normalize, win32, posix} from "path"
import { readFileSync } from "fs";
const slash = require("slash");
export type ServantContext = {
    registry: string;
    hub: string;
};

export const readContext = () => {
    try {
        let buffer = readFileSync(`${homedir}/.servorc`);
        let config = buffer.toString();
        config = config.replace(/\$SERVANT_HOME/g, homedir);
        return JSON.parse(slash(config)) as ServantContext;
    } catch (err) {
        console.log(err);
        return null;
    }
};
