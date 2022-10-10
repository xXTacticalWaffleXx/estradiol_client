export default function registerCommands() {
  register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny"]);

  register("command", ()=> {
    ChatLib.chat(ash_counter);
  }).setName("ashcheck");

  register("command", ()=> {
    ash_counter = 0;
  }).setName("ashreset");

  register("command", ()=> {
    inSkyblock();
  }).setName("sbtest");
}
