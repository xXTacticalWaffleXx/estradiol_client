import Settings from "./config.js";
// import commands
import { NameHistory } from "./features/namehistory";
import { SoundTest } from "./commands/soundtest.js";

register("command", (...args) => {
  if (args[0] == undefined) {
    Settings.openGUI();
    return;
  }
  console.log(args[0].toString().toLowerCase());
  switch (args[0].toString().toLowerCase()) {
    case "name":
      NameHistory(args[1]);
      break;
    case "scorb":
      const scoreb = Scoreboard.getLines(false);
      ChatLib.chat(scoreb[4].getName());
      break;
    case "soundtest":
      SoundTest();
      break;
    default:
      ChatLib.chat("&7[&dEstradiol Clien't&7] &4Command not Found");
      break;
  }
}).setName("estradiol").setAliases(["tranny", "es"]);
