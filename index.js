//author: luna aphelion <luna-aphelion@proton.me>

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
        if (Settings.pchat_messages){ ChatLib.command("pc " + ash_counter + "/4"); }
      }
      else { if (Settings.pchat_messages) {ChatLib.command("pc 4/4 reset"); }}
    }
    else if (umsg.includes("BLADESOUL DOWN")){
      ash_counter = 0;
      if (Settings.debug){ ChatLib.chat("[Debug] reset") }
    }
  }
})
