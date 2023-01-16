import Settings from "../config.js";
let fm_first_gyro = 0;
let fm_second_gyro = 0;
let fm_third_gyro = 0;
let fm_boss_gyro = 0;
let in_m6_boss = false;
let in_sadan = false;

register("chat", () => {
  if (!Settings.m6_gyro_solver) return;
  fm_first_gyro = Date.now() + 12500;
  fm_second_gyro = Date.now() + 26000;
  fm_third_gyro = Date.now() + 38000;
  in_m6_boss = true;
}).setCriteria(
  "[BOSS] Sadan: So you made it all the way here... Now you wish to defy me? Sadan?!",
);

register("chat", () => {
  if (!Settings.m6_gyro_solver) return;
  fm_boss_gyro = Date.now() + 32500;
  in_sadan = true;
}).setCriteria(
  "[BOSS] Sadan: You did it. I understand now, you have earned my respect.",
);

register("renderOverlay", () => {
  if (!Settings.m6_gyro_solver || !in_m6_boss) return;
  const x = Renderer.screen.getWidth() * Settings.m6_gyro_solver_display_width;
  const y = Renderer.screen.getHeight() *
    Settings.m6_gyro_solver_display_height;

  let current_time = Date.now();
  if (current_time < fm_first_gyro) {
    Renderer.drawStringWithShadow(
      `first gyro: ${fm_first_gyro - current_time}`,
      x,
      y,
    );
  }
  if (current_time < fm_second_gyro) {
    Renderer.drawStringWithShadow(
      `second gyro: ${fm_second_gyro - current_time}`,
      x,
      y + 10,
    );
  }
  if (current_time < fm_third_gyro) {
    Renderer.drawStringWithShadow(
      `third gyro: ${fm_third_gyro - current_time}`,
      x,
      y + 20,
    );
  }
  if (!in_sadan) return;
  if (current_time < fm_boss_gyro) {
    Renderer.drawStringWithShadow(
      `boss gyro: ${fm_boss_gyro - current_time}`,
      x,
      y,
    );
  }
});

register("chat", () => {
  in_m6_boss = false;
  in_sadan = false;
}).setCriteria("${*}The Catacombs - ${*}");
