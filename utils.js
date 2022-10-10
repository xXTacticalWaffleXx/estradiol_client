export function inSkyblock() {
  const slot_9_name = Player.getInventory().getStackInSlot(8).getName();
  
  if (slot_9_name.includes("SkyBlock Menu")){
    return true;
  } else {
    return false;
  }
}
