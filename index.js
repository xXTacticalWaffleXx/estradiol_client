import Settings from './config.js'

let ash_counter = 0;

register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny"]);

register("chat",(event)=>{
  if (ash_counter){
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
    if (umsg.includes("ASHFANG DOWN!")){
      ash_counter++;
      ChatLib.chat("ashfang");
    }
    else if (umsg.includes("BLADESOUL DOWN")){
      ash_counter = 0;
      ChatLib.chat("reset")
    }
    if (ash_counter > 3){
     ChatLib.chat("RESET");
    }
  }
})
