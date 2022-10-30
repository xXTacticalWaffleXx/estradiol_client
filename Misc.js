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
      if (unformatted.includes("[VIP]")) return
      if (unformatted.includes("[VIP+]")) return
      if (unformatted.includes("[MVP]")) return
      if (unformatted.includes("[MVP+]")) return
      if (unformatted.includes("[MVP++]")) return
      if (unformatted.includes("[YOUTUBE]")) return
      if (unformatted.includes("[ADMIN]")) return
      if (unformatted.includes("[OWNER]")) return
      // test for player sent
      if (!unformatted.includes(":")) return

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
