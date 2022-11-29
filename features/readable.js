import Settings from '../config.js'
//readable dms
register("chat", (event) => {
    if (!Settings.readable_dms) return;
    let msg = ChatLib.getChatMessage(event, true);
    if (msg.includes("imgur.com") && Settings.dms_imgur_fix) return;
    if(msg.startsWith("&dFrom") || msg.startsWith("&dTo")){
        let readable_name = msg.split(":")[0];
        let readable_color = msg.replace(readable_name, "").replace("&7", "&f").replace(": ", "")
        let message = new Message(`${readable_name}: ${readable_color}`);
        cancel(event);
        message.chat();
        console.log(readable_name)
        console.log(readable_color)
    }
});
//readable nons
register("chat", (chat, event) => {
    if (!Settings.readable_nons) return;
    let msg = ChatLib.getChatMessage(event, true);
    if (msg.includes("imgur.com") && Settings.nons_imgur_fix) return;
    let readable_name = msg.split(":")[0].replace("&7", "&f");
    let message = new Message(`${readable_name}: &f${chat}`);
    cancel(event);
    message.chat();
}).setCriteria("&7${*}&7&r&7: ${chat}&r");
