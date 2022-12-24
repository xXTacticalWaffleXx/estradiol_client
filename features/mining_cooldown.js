import Settings from "../config.js";
let cooldown_remaining = 0;

function isInMining() {
  if (Settings.force_cooldown_display) return true;
  const scoreb = Scoreboard.getLines(false);
  if (scoreb.length == 0) return;
  if (scoreb[4].getName().includes("Magma")) return true;
  if (scoreb[4].getName().includes("Jungle")) return true;
  if (scoreb[4].getName().includes("Precursor")) return true;
  if (scoreb[4].getName().includes("Goblin")) return true;
  if (scoreb[4].getName().includes("Crystal")) return true;
  return false;
}

register("chat", () => {
  if (!Settings.cooldown_display) return;
  cooldown_remaining = 120;
}).setCriteria("You used your Mining Speed Boost Pickaxe Ability!");

register("step", () => {
  if (!Settings.cooldown_display) return;
  if (cooldown_remaining == 0) return;

  cooldown_remaining--;

  if (Settings.show_title && cooldown_remaining == 0) {
    Client.showTitle(
      "&r&a&r&6Mining Speed Boost &r&ais now available!&r",
      "",
      0,
      25,
      0,
    );
  }
}).setFps(1);

register("renderOverlay", () => {
  if (!Settings.cooldown_display) return;
  if (!isInMining()) return;

  let x = Renderer.screen.getWidth() * Settings.cooldown_display_width;
  let y = Renderer.screen.getHeight() * Settings.cooldown_display_height;

  if (cooldown_remaining == 0) {
    Renderer.drawStringWithShadow("&6Mining Speed Boost &2Ready", x, y);
  }
  if (cooldown_remaining != 0) {
    Renderer.drawStringWithShadow(
      "&6Mining Speed Boost &4" + cooldown_remaining,
      x,
      y,
    );
  }
});
