import Settings from '../config.js'
// import commands

register("command", (...args) => {
  if (args[0] == undefined) {Settings.openGUI(); return}
  console.log(args[0])
  switch (args[0]) {
    case "test":
      ChatLib.chat("test")
      break;
    default:
      ChatLib.chat("&7[&dEstradiol Clien't&7] &4Command not Found")
  }
}).setName("estradiol").setAliases(["tranny", "es"]);
