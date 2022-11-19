import Settings from '../config.js'
import request from '../../requestV2';
register("chat", (username) => {
    if (!Settings.lunar_detection) return;
    request({url : `https://api.mojang.com/users/profiles/minecraft/${username}`,headers: { 'User-Agent': ' Mozilla/5.0' }, json: true}).then(mojang => {
        let user_uuid = mojang.id;
        request({url : `https://antisniper.seraph.si/api/v4/lunar/${user_uuid}`,headers: { 'User-Agent': ' Mozilla/5.0' }, json: true}).then(lunar_stuff => {
            if(lunar_stuff.player.online){
                Client.showTitle(player_name + " ON LUNAR", "", 0 , 75, 0)
            if (Settings.lunar_auto_kick){
              ChatLib.command("p remove " + player_name)
            }
            }
        }).catch(error =>{ print(error);})
    }).catch(error =>{ print(error);})
}).setCriteria("Dungeon Finder > ${username} joined the dungeon group! (${*})");