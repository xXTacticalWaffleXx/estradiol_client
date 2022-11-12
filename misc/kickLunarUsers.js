import Settings from '../config.js'

export function kickLunarUsers(){
  register("chat",event=>{
  if (Settings.lunar_detection){
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
    // Dungeon Finder > OnlyPowie joined the dungeon group! (Archer Level 36)
    if (!umsg.includes("joined the dungeon group!")) return; // return if the message isnt a dungeon finder message
    // return if player sent message
    if (umsg.includes("Party")) return;
    if (umsg.includes("[")) return;
    // prolly dont even need this
    if (umsg.includes("[SBE]")) return;

    // Isolate the players name
    let player_name = umsg.split('!')[0]
    player_name = player_name.replace(" joined the dungeon group", "")
    player_name = player_name.replace("Dungeon Finder > ", "")

    var url = "https://api.mojang.com/users/profiles/minecraft/" + player_name;
    var is_on_lunar = false;
    request(url)
    .then(function(response){
      console.log("[estradiol clien't] Mojang API reply success")
      const mojang_reply = JSON.parse(response);
      request({
        url: "https://antisniper.seraph.si/api/v4/lunar/" + mojang_reply.id,
        headers: {
          'User-Agent': 'Mozilla/5.0'
        },
      })
      .then(function(response){
        const lunar_reply = JSON.parse(response);
        if (lunar_reply.success){
          console.log("[estradiol clien't] Lunar API reply success")
          if (lunar_reply.player.online){
            //this code runs if the player is on lunar
            Client.showTitle(player_name + " ON LUNAR", "", 0 , 75, 0)
            if (Settings.lunar_auto_kick){
              ChatLib.command("p remove " + player_name)
            }
          }
        }
      })
      .catch(function(error, response){
        const lunar_reply = JSON.parse(response);
        if (!lunar_reply.success){
          console.error("[estradiol clien't] Lunar API reply failed")
        }
      })
    }).catch(function(error) {
      console.error("[estradiol clien't] Mojang API reply failed")
    })
  }
  })
}
