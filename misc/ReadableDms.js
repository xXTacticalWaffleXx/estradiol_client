import Settings from '../config.js'

export function ReadableDms(){

  import settings from '../config.js'
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

