import Settings from "../config.js";
let boost_ready = 0;

function isInMining() {
  if (Settings.force_cooldown_display) return true;
  const scoreb = Scoreboard.getLines(false);
  if (scoreb.length == 0) return;
  if (scoreb[4].getName().includes("Magma")) return true;
  if (scoreb[4].getName().includes("Jungle")) return true;
  if (scoreb[4].getName().includes("Precursor")) return true;
  if (scoreb[4].getName().includes("Goblin")) return true;
  if (scoreb[4].getName().includes("Crystal")) return true;
  if (scoreb[4].getName().includes("Mithril")) return true;
  if (scoreb[4].getName().includes("Mines")) return true;
  if (scoreb[4].getName().includes("Khazad")) return true;
  if (scoreb[4].getName().includes("City")) return true;
  return false;
}

register("chat", () => {
  if (!Settings.cooldown_display) return;
  boost_ready = Math.floor(Date.now() / 1000) + 120;
}).setCriteria("You used your Mining Speed Boost Pickaxe Ability!");

register("chat", (event) => {
  if (!Settings.show_title) return;
  if (!isInMining()) return;
  const umsg = ChatLib.removeFormatting(ChatLib.getChatMessage(event));
  if (umsg.match("Mining Speed Boost is now available!")) {
    Client.showTitle("&dBoost Ready!", "&5Right Click!", 0, 125, 0);
    World.playSound("random.chestopen", 2, 1);
  }
});

register("renderOverlay", () => {
  if (!Settings.cooldown_display) return;
  if (!isInMining()) return;

  const x = Renderer.screen.getWidth() * Settings.cooldown_display_width;
  const y = Renderer.screen.getHeight() * Settings.cooldown_display_height;
  const cooldown_remaining = boost_ready - Math.floor(Date.now() / 1000);

  if (cooldown_remaining <= 0) {
    Renderer.drawStringWithShadow("&6Mining Speed Boost &2Ready", x, y);
  }
  if (cooldown_remaining > 0) {
    Renderer.drawStringWithShadow(
      "&6Mining Speed Boost &4" + cooldown_remaining,
      x,
      y,
    );
  }
});
