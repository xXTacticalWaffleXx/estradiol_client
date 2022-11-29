import Settings from '../config.js'
let is_unlocked = false;
let gem_powder = 0;
let mith_powder = 0;
//gets chest unlocked
register("chat", () => {
    if(!Settings.send_powder_messages) return
    is_unlocked = true
    gem_powder = 0
    mith_powder = 0
}).setCriteria("You have successfully picked the lock on this chest!")
//get amount adds it up and checks
register("chat", (amount, type) => {
    if(!Settings.send_powder_messages || is_unlocked) return
    //adds up the powder
    let powder_amount = parseInt(amount)
    if(type.includes("Gemstone")) gem_powder += powder_amount
    else if(type.includes("Mithril")) mith_powder += powder_amount
    else mith_powder = 0, gem_powder = 0 
}).setCriteria("You received +${amount} ${type} Powder");

register("step", () => {
    if(!Settings.send_powder_messages) return
    if(is_unlocked) {
        is_unlocked = false
        gem_powder = 0
        mith_powder = 0
        return
      }
    //checks the amount to send in chat cords
    if(mith_powder >= 1000 || gem_powder >= 1000){
        let x = Player.getX()
        let y = Player.getY()
        let z = Player.getZ()
        ChatLib.command(`ac x: ${Math.floor(x)} y: ${Math.floor(y)} z: ${Math.floor(z)} | ${mith_powder} Mithril Powder | ${gem_powder} Gemstone Powder`)
        is_unlocked = false
        gem_powder = 0
        mith_powder = 0
    }
}).setFps(1);
