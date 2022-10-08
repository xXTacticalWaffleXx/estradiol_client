import Settings from './config.js'

register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny"]);

let ash_counter = 0;

register("chat",(event)=>{
  if (ash_counter){
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
    if (umsg.includes("ASHFANG DOWN!")){
      ash_counter++;
    }
    else if (umsg.includes("BLADESOUL DOWN")){
      ash_counter = 0;
    }
    if (ash_counter > 3){
     chat("RESET");
    }
  }
})
