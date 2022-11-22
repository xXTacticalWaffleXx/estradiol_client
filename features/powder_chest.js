import Settings from '../config.js'
let has_chest = false;
let is_unlocked = false;
let gem_powder = 0;
let mith_powder = 0;
//gets chest uncovered
register("chat", () => {
    if(!Settings.send_powder_messages) return
    has_chest = true;
}).setCriteria("You uncovered a treasure chest!")
//gets chest unlocked
register("chat", () => {
    if(!Settings.send_powder_messages) return
    is_unlocked = true;
    gem_powder = 0;
    mith_powder = 0;
}).setCriteria("You have successfully picked the lock on this chest!")
//get amount adds it up and checks
register("chat", (amount, type) => {
    if(!Settings.send_powder_messages) return
    if(has_chest && is_unlocked) {
      has_chest = false
      is_unlocked = false
      return
    }
    //adds up the powder
    let powder_amount = parseInt(amount)
    if(type.includes("Gemstone")) gem_powder += powder_amount
    else if(type.includes("Mithril")) mith_powder += powder_amount
    //checks the amount to send in chat cords
    if(mith_powder > 1000 || gem_powder > 1000){
        let x = Player.getX()
        let y = Player.getY()
        let z = Player.getZ()
        ChatLib.command(`ac x: ${Math.floor(x)} y: ${Math.floor(y)} z: ${Math.floor(z)} ${mith_powder} Mithril Powder ${gem_powder} Gemstone Powder`)
        has_chest = false
        is_unlocked = false
        gem_powder = 0
        mith_powder = 0
    }
}).setCriteria("You received +${amount} ${type} Powder");
