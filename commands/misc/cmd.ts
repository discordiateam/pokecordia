import cmd from './importCommands';

const stringCommands: string[] = [];
const helpMap = new Map<string, string>();

Object.entries(cmd).forEach(entry => {
    stringCommands.push(entry[0]);
    helpMap.set(entry[0], entry[1][1].toString()); 
});


export { cmd, stringCommands, helpMap }; 