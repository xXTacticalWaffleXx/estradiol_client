import Settings from './config.js'
import {inSkyblock} from './utils.js'

export function Ashfang() {
  
  let ash_counter = 0;

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
          Client.showTitle("RESET", "", 0, 15, 0);
          if (Settings.pchat_messages) {ChatLib.command("pc 4/4 reset"); }
        } else {
          if (Settings.pchat_messages){ ChatLib.command("pc " + ash_counter + "/4"); }
            if (Settings.ash_auto_warp && ash_counter < 4){
            setTimeout(() =>{
              ChatLib.command("warp dungeon_hub");
            }, 2000);
          }
        }
      } else if (umsg.includes("BLADESOUL DOWN!")){
        ash_counter = 0;
        if (Settings.debug){ ChatLib.chat("[Debug] reset") }
      }
    }
  })
}
