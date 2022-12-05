import Settings from '../config.js'
let cooldown_remaining = 0

function isInMining() {
  let scoreb = Scoreboard.getLines(false)
  if(scoreb.length == 0) return;
  if (scoreb[4].getName().includes("Magma")) return true;
  else return false;
}

register("chat", () =>{
  if (!Settings.cooldown_display) return;
  cooldown_remaining = 120;
}).setCriteria("You used your Mining Speed Boost Pickaxe Ability!")

register("step", () =>{
  if (!Settings.cooldown_display) return;
  if (cooldown_remaining == 0) return;

  cooldown_remaining--
  
  if (Settings.show_title && cooldown_remaining == 0) Client.showTitle("&r&a&r&6Mining Speed Boost &r&ais now available!&r", "", 0, 25, 0)
}).setFps(1)

register("renderOverlay", () =>{
  if (!Settings.cooldown_display) return;
  if (!isInMining()) return;
  
  let x = Renderer.screen.getWidth() * Settings.cooldown_display_width
  let y = Renderer.screen.getHeight() * Settings.cooldown_display_height

  if (cooldown_remaining == 0){Renderer.drawStringWithShadow("&6Mining Speed Boost &2Ready", x, y)}
  if (cooldown_remaining != 0){Renderer.drawStringWithShadow("&6Mining Speed Boost &4" + cooldown_remaining, x, y)}
})

register("command", () =>{
  console.log(scoreb[4].getName())
}).setName("scorb")
