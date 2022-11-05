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
      // The party was transferred to youronefriend by [MVP++] OnlyPowie
      
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
