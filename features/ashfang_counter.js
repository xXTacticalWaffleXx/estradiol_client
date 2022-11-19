import Settings from '../config.js'
//idk the actual msg for this boss so
//i'll do it this way
let counter = 0;
register("chat", (msg) => {
    if(!Settings.ash_counter_toggle) return;
    if(msg.includes("ASHFANG DOWN!")){
        counter += 1;
        if (counter > 3){
            Client.showTitle("RESET", "", 0, 15, 0);
            if (Settings.pchat_messages) {ChatLib.command("pc 4/4 reset"); }
          } else {
            if (Settings.pchat_messages){ ChatLib.command(`pc ${counter}/4`); }
              if (Settings.ash_auto_warp && counter < 4){
              setTimeout(() =>{
                ChatLib.command("warp dungeon_hub");
              }, 2000);
            }
          }
    }
    else if(msg.includes("BLADESOUL DOWN!")) counter = 0;
    else if(msg.includes("MAGE OUTLAW DOWN")) counter = 0;
}).setCriteria("${msg}");
register("command", ()=> {
  ChatLib.chat(counter);
}).setName("ashcheck");
register("command", ()=> {
  counter = 0;
}).setName("ashreset");