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
