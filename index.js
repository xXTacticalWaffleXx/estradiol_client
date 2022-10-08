import Settings from './config.js'

register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny"]);

let ash_counter = 0;

if(ash_counter_toggle){
  register("chat",(event))=>{
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
    if (umsg.includes("ASHFANG DOWN!")){
      ash_counter++;
    }
    else if umsg.includes(("BLADESOUL DOWN")){
      ash_counter = 0;
    }
    // if (ash_counter > 4){
    //   chat("RESET");
    // }
    chat(ash_counter)
  }
}
