import Settings from './config.js'
import {inSkyblock} from './utils.js'

export function PetDisplay() {

  register("renderOverlay", renderPetDisplay);
  
  register("chat",event=>{
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event));
  
    if (!umsg.includes("You despawned your") && !umsg.includes("You summoned your")) return
    
    if (Settings.debug) ChatLib.chat("pet change");
  
  })
}
function renderPetDisplay() {
  
  var PetDisplayX = 930
  var PetDisplayY = 30

  if (Settings.pet_display){
    if (inSkyblock()){
      Renderer.drawCircle(Renderer.RED, PetDisplayX, PetDisplayY, 25, 90, 5);
    }
  }
}
