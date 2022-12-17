import Settings from '../config.js'
// import commands
import Wikithis from '../commands/wikithis'

register("command", (...args) => {
  if (args[0] == undefined) {Settings.openGUI(); return}
  switch (args[0].toString().toLowerCase()) {
    case "wikithis":
      Wikithis();
      break;
    default:
      ChatLib.chat("&7[&dEstradiol Clien't&7] &4Command not Found")
      break;
  }
}).setName("estradiol").setAliases(["tranny", "es"]);
