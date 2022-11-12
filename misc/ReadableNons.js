import Settings from '../config.js'

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
