import request from "requestV2/index";
import Settings from "./config.js";

export function screenHeightPercentage(percentage){
  hundredth = Renderer.screen.getHeight() / 100
  return hundredth * percentage
}

export function screenWidthPercentage(percentage){
  hundredth = Renderer.screen.getWidth() / 100
  return hundredth * percentage
}

export function inSkyblock() {
  // this func is bad dont use

  var slot_9_name

  if (Player.getInventory().getStackInSlot(8).getName == null){
    return false;
  }else {
    slot_9_name = Player.getInventory().getStackInSlot(8).getName();
  }
  if (slot_9_name.includes("SkyBlock Menu")){
    return true;
  } else {
    return false;
  }
}


