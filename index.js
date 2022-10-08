import Settings from './config.js'

let ash_counter = 0;

register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny"]);

register("chat",event=>{
  if (Settings.ash_counter_toggle){
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
    if (umsg.includes("ASHFANG DOWN!")){
      ash_counter++;
      if (Settings.debug){ ChatLib.chat("[Debug] ashfang registered"); }

      if (ash_counter > 3){
        ChatLib.chat("RESET");
        // send message to party telling them how many bosses out of 4
        // if 4/4 send message saying "4/4 RESET"
      }
    }
    else if (umsg.includes("BLADESOUL DOWN")){
      ash_counter = 0;
      if (Settings.debug){ ChatLib.chat("[Debug] reset") }
    }
  }
})
