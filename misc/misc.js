import Settings from '../config.js'
//Commands
register("command", Settings.openGUI).setName("estradiol").setAliases(["tranny", "es"]);
//AutoWB
register("chat", () => {
    if(!Settings.auto_wb) return;
    ChatLib.command(`gc ${Settings.wb_string}`);
}).setCriteria("Guild > ${*} joined.");
//DeathAutoBullyer
register("chat", (username, mob) => {
    if(!Settings.death_copy) return;
    if(username !== Settings.death_copy_name) return;
    setTimeout(() =>{
        ChatLib.command(`pc  ☠ ${username} was killed by ${mob}.`);
    }, 2000);
}).setCriteria("${*}${username} was killed by ${mob}.");
//Auto Transfer
register("chat", (new_user, old_user) => {
    if(!Settings.auto_transfer) return;
    if(new_user == Player.getName()){
        ChatLib.command(`party transfer ${old_user}`)
    }
}).setCriteria("The party was transferred to ${*} ${new_user} by ${*} ${old_user}");