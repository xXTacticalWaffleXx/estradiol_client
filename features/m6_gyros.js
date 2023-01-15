import Settings from "../config.js";
let first_gyro = 0;
let second_gyro = 0;
let third_gyro = 0;
let in_m6_boss = false;

register("chat", () => {
  if (!Settings.m6_gyro_solver) return;
  first_gyro = Date.now() + 12500;
  second_gyro = Date.now() + 26000;
  third_gyro = Date.now() + 38000;
  in_m6_boss = true;
}).setCriteria(
  "[BOSS] Sadan: So you made it all the way here... Now you wish to defy me? Sadan?!",
);

register("renderOverlay", () => {
  if (!Settings.m6_gyro_solver || !in_m6_boss) return;
  const x = Renderer.screen.getWidth() * Settings.m6_gyro_solver_display_width;
  const y = Renderer.screen.getHeight() *
    Settings.m6_gyro_solver_display_height;

  let current_time = Date.now();
  if (current_time < first_gyro) {
    Renderer.drawStringWithShadow(
      `first gyro: ${first_gyro - current_time}`,
      x,
      y,
    );
  }
  if (current_time < second_gyro) {
    Renderer.drawStringWithShadow(
      `second gyro: ${second_gyro - current_time}`,
      x,
      y + 10,
    );
  }
  if (current_time < third_gyro) {
    Renderer.drawStringWithShadow(
      `third gyro: ${third_gyro - current_time}`,
      x,
      y + 20,
    );
  }
});

register("chat", () => {
  in_m6_boss = false;
}).setCriteria("${*}The Catacombs - ${*}");
