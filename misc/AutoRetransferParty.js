import Settings from '../config.js'

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
