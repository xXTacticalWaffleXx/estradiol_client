import Settings from './config.js'

export function PetDisplay() {
  var PetDisplayX = 930
  var PetDisplayY = 30

  register("renderOverlay", renderPetDisplay);
  
  register("chat",event=>{
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event));
  
    if (!umsg.includes("You despawned your") && !umsg.includes("You summoned your")) return
    
    if (Settings.debug) ChatLib.chat("pet change");
  
  })
}
function renderPetDisplay() {
  if (Settings.pet_display){
    if (inSkyblock()){
      Renderer.drawCircle(Renderer.RED, PetDisplayX, PetDisplayY, 25, 90, 5);
    }
  }
}
