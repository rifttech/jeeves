const chalk = require("chalk");
const log = console.log;
const { homedir } = require("os");
const { writeFileSync, mkdirSync } = require("fs");
const FILE_NAME = ".servorc";

log(chalk.blue("****** servo setup ******"));

log(chalk.blue("create a registry configuration file"));
log(chalk.blue("location ", homedir));
writeFileSync(`${homedir}/${FILE_NAME}`, JSON.stringify({ registry: "./.servo" }));
mkdirSync(`${homedir}/.servo`, { recursive: true, mode: 0o777 });
