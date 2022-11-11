import Settings from './config.js'

export function deathBullyer(){
  register ("chat",event=>{
    if (Settings.death_copy){
      let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))

      if (umsg.includes("was killed")){
      // prevent frauds on the system
      if (Settings.party_msg_check){
        if (umsg.includes("Party")) return
        if (umsg.includes("[")) return
      }
        // check the person who died
        if (umsg.includes(Settings.death_copy_name) == false) return
        setTimeout(() =>{
        ChatLib.command("pc " + umsg);
        }, 2000);
      }
    }
  })
}

export function ReadableDms(){
  register ("chat", event =>{
    if (Settings.readable_dms){
      let umsg = ChatLib.getChatMessage(event, true)
      if (umsg.includes("imgur.com") && Settings.dms_imgur_fix) return;
      if (umsg.startsWith("&dFrom")){
        let message = new Message(umsg.replace("&7", "&f").replace("&7", "&f").replace("&7", "&f").replace("&f", "&7"))
        cancel(event)
        message.chat()
      }
      if (umsg.startsWith("&dTo")){ // todo: make this shit less clunk yo
        let message = new Message(umsg.replace("&7", "&f").replace("&7", "&f").replace("&7", "&f").replace("&f", "&7"))
        cancel(event)
        message.chat()
      }
    }
  })
}

export function ReadableNons(){
  register ("chat", event =>{
    if(Settings.readable_nons){
      let formatted = ChatLib.getChatMessage(event, true)
      let unformatted = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
      
      if (unformatted.includes("imgur.com") && Settings.nons_imgur_fix) return;

      let name = unformatted.split(':')[0];
      // test if someone is a non
      if (unformatted.includes("[VIP]"))      return
      if (unformatted.includes("[VIP+]"))     return
      if (unformatted.includes("[MVP]"))      return
      if (unformatted.includes("[MVP+]"))     return
      if (unformatted.includes("[MVP++]"))    return
      if (unformatted.includes("[YOUTUBE]"))  return
      if (unformatted.includes("[ADMIN]"))    return
      if (unformatted.includes("[OWNER]"))    return
      // test for player sent
      if (!unformatted.includes(":"))         return
      // test for dms
      if(formatted.includes("&dFrom"))      return
      if(formatted.includes("&dTo"))        return

      let split_string = formatted.split("");
      let reverse_array = split_string.reverse();
      let join_array = reverse_array.join("");

      let dingus = join_array.replace("7&", "f&");

      split_string = dingus.split("");
      reverse_array = split_string.reverse();
      let output = reverse_array.join("");

      let message =  new Message(output);
      cancel(event);
      message.chat();
    }
  })
}

export function autoRetransferParty(){
  register("chat", event =>{
    if(Settings.auto_transfer){
      let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event))
      
      if(!umsg.includes("The party was transferred to ")) return
      if(umsg.includes(":")) return

      umsg = umsg.replace("The party was transferred to ", "")
      umsg = umsg.replace(" by", "")

      umsg = umsg.replace("[VIP] ", "");
      umsg = umsg.replace("[VIP+] ", "");
      umsg = umsg.replace("[MVP] ", "");
      umsg = umsg.replace("[MVP+] ", "");
      umsg = umsg.replace("[MVP++] ", "");
      umsg = umsg.replace("[YOUTUBE] ", "");
      umsg = umsg.replace("[ADMIN] ", "");
      umsg = umsg.replace("[GM] ", "");
      umsg = umsg.replace("[OWNER] ", "");
  
      // do it twice because .replace only does the first instance
      umsg = umsg.replace("[VIP] ", "");
      umsg = umsg.replace("[VIP+] ", "");
      umsg = umsg.replace("[MVP] ", "");
      umsg = umsg.replace("[MVP+] ", "");
      umsg = umsg.replace("[MVP++] ", "");
      umsg = umsg.replace("[YOUTUBE] ", "");
      umsg = umsg.replace("[ADMIN] ", "");
      umsg = umsg.replace("[GM] ", "");
      umsg = umsg.replace("[OWNER] ", "");

      console.log(umsg)

      const transferee = umsg.split(" ")[0]

      const transferer = umsg.replace(transferee + " ", "")
      
      console.log("transferee " + transferee)
      console.log("transferer " + transferer)

      if(transferee == Player.getName()){
        console.log("detected transfered party")
        ChatLib.command("party transfer " + transferer)
      }

    }
  })
}

export function AutoWb(){
  register("chat", event =>{
    if(Settings.auto_wb){
      let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event));
      if (umsg.includes("Guild > ") && umsg.includes("joined.")){
        ChatLib.command("gc " + Settings.wb_string)
      }
    }
  })
}

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

export function SendPowderMessages(){
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
