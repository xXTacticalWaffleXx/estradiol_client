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

// this code doesnt work and i might fix it so commented

/*export function CommandDialogue(){
  var rectangle_x = Renderer.screen.getWidth() / 2;
  var rectangle_y = Renderer.screen.getHeight() / 100;
  var rectangle_y = rectangle_y * 70;
  var rectangle_width = Renderer.screen.getWidth / 100;
  var rectangle_width = rectangle_width * 20;
  var rectangle_height = Renderer.screen.getHeight / 100;
  var rectangle_height = rectangle_height * 20;

  var rectangle = new Rectangle(Renderer.BLACK, rectangle_x, rectangle_y, rectangle_width, rectangle_height);
  rectangle.draw();
}*/ 
