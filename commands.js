import Settings from './config.js'
import {inSkyblock} from './utils.js'

export default function registerCommands() {
  register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny"]);

  register("command", ()=> {
    ChatLib.chat(ash_counter);
  }).setName("ashcheck");

  register("command", ()=> {
    ash_counter = 0;
  }).setName("ashreset");

  register("command", ()=> {
    ChatLib.chat(inSkyblock());
  }).setName("sbtest");

}
