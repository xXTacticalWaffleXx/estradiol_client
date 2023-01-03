import Settings from "../config.js";

let fragged_used = false;
let unfragged_used = false;

register("renderOverlay", () => {
  if (!Settings.render_bonzo_mask_display) return;
  let scoreb = Scoreboard.getLines(false);
  if (scoreb.length == 0) return;
  if (!scoreb[3].getName().includes("The Cata")) return;

  let x = Renderer.screen.getWidth() * Settings.bonzo_mask_display_width;
  let y = Renderer.screen.getHeight() * Settings.bonzo_mask_display_height;

  Renderer.drawStringWithShadow("&5[Bonzo masks]", x, y);
  if (fragged_used) {
    Renderer.drawStringWithShadow("&d[Fragged] &4Used", x, y + 10);
  } else Renderer.drawStringWithShadow("&d[Fragged] &2Ready", x, y + 10);
  if (unfragged_used) {
    Renderer.drawStringWithShadow("&d[Unfragged] &4Used", x, y + 20);
  } else Renderer.drawStringWithShadow("&d[Unfragged] &2Ready", x, y + 20);
});

register("chat", () => {
  fragged_used = true;
}).setCriteria("Your ⚚ Bonzo's Mask saved your life!");

register("chat", () => {
  unfragged_used = true;
}).setCriteria("Your Bonzo's Mask saved your life!");

register("chat", () => {
  fragged_used = false;
  unfragged_used = false;
}).setCriteria("${*}The Catacombs - ${*}");
