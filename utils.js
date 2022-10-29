import request from "requestV2/index";
import Settings from "./config.js";

export function screenHeightPercentage(percentage){
  hundredth = Renderer.screen.getHeight() / 100
  return hundredth * percentage
}

export function screenWidthPercentage(percentage){
  hundredth = Renderer.screen.getWidth() / 100
  return hundredth * percentage
}

export function inSkyblock() {

  var slot_9_name

  if (Player.getInventory().getStackInSlot(8).getName == null){
    return false;
  }else {
    slot_9_name = Player.getInventory().getStackInSlot(8).getName();
  }
  if (slot_9_name.includes("SkyBlock Menu")){
    return true;
  } else {
    return false;
  }
}

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

    console.log(player_name)

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
          console.log("[estradiol clien't] Lunar API reply failed")
        }
      })
    }).catch(function(error) {
      console.log("[estradiol clien't] Mojang API reply failed")
    })
  }
  })
}

/*export async function isOnLunar(player_name){ // turn this bitch into a prommy
  const url = "https://api.mojang.com/users/profiles/minecraft/" + player_name;
  let is_on_lunar = false;
  
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
        ChatLib.chat(lunar_reply.player.online + "online status")
        resolve(true);
      }
    })
    .catch(function(error, response){
      const lunar_reply = JSON.parse(response);
      if (!lunar_reply.success){
        console.log("[estradiol clien't] Lunar API reply failed")
      }
    })
  }).catch(function(error) {
    console.log("[estradiol clien't] Mojang API reply failed")
  })
})

/* export function isOnLunar(player_name){
  isOnLunar(player_name).then(result =>{
    var is_on_lunar = result;
  })
} */

// this code doesnt work and i might fix it so commented

/*export function CommandDialogue(){
  var rectangle_x = Renderer.screen.getWidth() / 2;
  var rectangle_y = Renderer.screen.getHeight() / 100;
  var rectangle_y = rectangle_y * 70;
  var rectangle_width = Renderer.screen.getWidth / 100;
  var rectangle_width = rectangle_width * 20;
  var rectangle_height = Renderer.screen.getHeight / 100;
  var rectangle_height = rectangle_height * 20;

  var rectangle = new Rectangle(Renderer.BLACK, rectangle_x, rectangle_y, rectangle_width, rectangle_height);
  rectangle.draw();
}*/
