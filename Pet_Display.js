import Settings from './config.js'
import {inSkyblock} from './utils.js'

var pet_rarity

export function PetDisplay() {

  register("renderOverlay", renderPetDisplay);
  
  register("chat", event =>{
    let umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event));
  
    if (!umsg.includes("You despawned your") && !umsg.includes("You summoned your")) return
    
    if (Settings.debug) ChatLib.chat("pet change");

    let formatted_message = EventLib.getMessage(event);
        formatted_message = formatted_message.toString();
    if (umsg.includes("despawned")){
      pet_rarity = "no_pet";
    } else if (formatted_message.includes("§f")){
      //common
      pet_rarity = "common";
    } else if (formatted_message.includes("§9")){
      //rare
      pet_rarity = "rare";
    } else if (formatted_message.includes("§5")){
      //epic
      pet_rarity = "epic";
    } else if (formatted_message.includes("§6")){
      //legendary
      pet_rarity = "legendary";
    } else if (formatted_message.includes("§d")){
      //mythic
      pet_rarity = "mythic";
    } else {
      //uncommon fuck hypixel for using green for uncomon
      pet_rarity = "uncommon";
    }
  })
}
function renderPetDisplay() {
  
  var PetDisplayX = 930
  var PetDisplayY = 30

  if (Settings.pet_display){
    if (inSkyblock()){
      switch (pet_rarity){
        case "common":
          Renderer.drawCircle(Renderer.WHITE, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
        case "uncommon":
          Renderer.drawCircle(Renderer.GREEN, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
        case "rare":
          Renderer.drawCircle(Renderer.BLUE, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
        case "epic":
          Renderer.drawCircle(Renderer.DARK_PURPLE, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
        case "legendary":
          Renderer.drawCircle(Renderer.GOLD, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
        case "mythic":
          Renderer.drawCircle(Renderer.LIGHT_PURPLE, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
        case "no pet":
          Renderer.drawCircle(Renderer.RED, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
        default:
          Renderer.drawCircle(Renderer.RED, PetDisplayX, PetDisplayY, 25, 90, 5);
          break;
      }
    }
  }
}
