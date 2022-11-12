import Settings from '../config.js'

export function registerCommands() {
  register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny", "es"]);

  register("command", ()=> {
    ChatLib.chat(ash_counter);
  }).setName("ashcheck");

  register("command", ()=> {
    ash_counter = 0;
  }).setName("ashreset");
}
