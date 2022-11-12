import Settings from '../config.js'

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
