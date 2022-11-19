import Settings from '../config.js'

let mithril_count = 0;
let gemstone_count = 0;
let tally_called = false;
let locked_chest = false;

function PowderTally(){
  setTimeout(() => {
    console.log("mithril: " + mithril_count);
    console.log("gemstone: " + gemstone_count);
    if (locked_chest){
      console.log("chest locked")
    }
    tally_called = false;
    if ((mithril_count > 999 || gemstone_count > 999) && !locked_chest){
      let message = "x: " + Math.floor(Player.getX()) + " y: " + Math.floor(Player.getY()) + " z: " + Math.floor(Player.getZ()) + " "
      if (mithril_count > 999) message = message + mithril_count.toString() + " mithril powder"
      if (gemstone_count > 999) message = message + gemstone_count.toString() + " gemstone powder"
      ChatLib.command("ac " + message)
    }
    mithril_count = 0;
    gemstone_count = 0;
    locked_chest = false;
  }, 1000);
}

register("chat", event =>{
  if(Settings.send_powder_messages){
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event));
    if (umsg.includes("You have successfully picked the lock on this chest!")){
      locked_chest = true;
    }
    if (umsg.includes("You received ")){
      if (umsg.includes(" Mithril Powder")){
        umsg = umsg.replace(" Mithril Powder", "")
        umsg = umsg.replace("You received +", "")
        mithril_count = mithril_count + Number(umsg)
      }
      if (umsg.includes(" Gemstone Powder")){
        umsg = umsg.replace(" Gemstone Powder", "")
        umsg = umsg.replace("You received +", "")
        gemstone_count = gemstone_count + Number(umsg)
      }
        if (!tally_called){
          PowderTally();
          tally_called = true;
        }
    }
  }
})
