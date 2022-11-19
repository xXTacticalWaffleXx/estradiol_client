import Settings from '../config.js'
let has_chest = false;
let is_unlocked = false;
let gem_powder = 0;
let mith_powder = 0;
//gets chest uncovered
register("chat", () => {
    if(!Settings.send_powder_messages) return;
    has_chest = true;
    console.log("chest uncovered")
}).setCriteria("You uncovered a treasure chest!")
//gets chest unlocked
register("chat", () => {
    if(!Settings.send_powder_messages) return;
    is_unlocked = true;
    gem_powder = 0;
    mith_powder = 0;
    console.log("lock picked")
}).setCriteria("You have successfully picked the lock on this chest!")
//get amount adds it up and checks
register("chat", (amount, type) => {
    if(!Settings.send_powder_messages) return;
    console.log("has_chest: " + has_chest)
    console.log("is_unlocked: " + is_unlocked);
    if(has_chest || is_unlocked){
        has_chest = false;
        is_unlocked = false;
        return;
    }
    //adds up the powder
    let powder_amount = parseInt(amount);
    if(type.includes("Gemstone")) gem_powder += powder_amount;
    else if(type.includes("Mithril")) mith_powder += powder_amount;
    //checks the amount to send in chat cords
    if(mith_powder > 1 || gem_powder > 1){
        let x = Math.round(Player.getX());
        let y = Math.round(Player.getY());
        let z = Math.round(Player.getZ());
        ChatLib.command(`ac x: ${x} y: ${y} z: ${z} ${powder_amount} ${type} Powder`)
        has_chest = false;
        is_unlocked = false;
    }
}).setCriteria("You received ${amount} ${type} Powder");
