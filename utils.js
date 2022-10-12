export function inSkyblock() {

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
