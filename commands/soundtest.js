export function SoundTest() {
  console.log("dingus");
  const s1 = new Sound({
    source: "mining-speed-boost-ready.ogg",
  });
  s1.setCategory("master");
  ChatLib.chat(s1.getVolume());
  s1.setAttenuation(0);
  s1.play();
  console.log("badingus");
}
