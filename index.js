//author: luna aphelion <luna-aphelion@proton.me>

import Settings from './config.js'

let ash_counter = 0;

register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny"]);

register("command", ()=> {
  ChatLib.chat(ash_counter);
}).setName("ashcheck");

register("command", ()=> {
  ash_counter = 0;
}).setName("ashreset");

register("chat",event=>{
  if (Settings.ash_counter_toggle){
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
    
    //prevent frauds on the system
    if (Settings.Party_msg_check){
      if (umsg.includes("Party")) return
      if (umsg.includes("[")) return
    }

    if (umsg.includes("ASHFANG DOWN!")){
      ash_counter++;
      if (Settings.debug){ ChatLib.chat("[Debug] ashfang registered counter: " + ash_counter); }
      if (ash_counter > 3){
        //ChatLib.chat("RESET");
        Client.showTitle("RESET", "", 0, 15, 0);
        if (Settings.pchat_messages) {ChatLib.command("pc 4/4 reset"); }
      } else {
        if (Settings.pchat_messages){ ChatLib.command("pc " + ash_counter + "/4"); }
      }
    } else if (umsg.includes("BLADESOUL DOWN!")){
      ash_counter = 0;
      if (Settings.debug){ ChatLib.chat("[Debug] reset") }
    }
  }
})
