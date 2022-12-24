// this file is heavily wip and prolly wont get finished tbh
// im just keeping it here because i've spent too much time to just delete it

import Settings from "../config.js";
import request from "../../requestV2";

export function Inventory(username) {
  let selected = -1;
  let user_uuid = "dingus";
  if (!Settings.API_key) {
    ChatLib.chat("&7[&dEstradiol Clien't&7] &4API key not set, exiting");
    return;
  }
  request({
    url: `https://api.mojang.com/users/profiles/minecraft/${username}`,
    headers: { "User-Agent": " Mozilla/5.0" },
    json: true,
  }).then((mojang) => {
    user_uuid = mojang.id;
    request({
      url:
        `https://api.hypixel.net/skyblock/profiles?key=${Settings.API_key}&uuid=${user_uuid}`,
      headers: { "User-Agent": " Mozilla/5.0" },
      json: true,
    }).then((response) => {
      if (!response.success) return;
      for (let x in response.profiles) {
        if (response.profiles[x].selected) selected = x;
      }
      if (selected === -1) {
        ChatLib.chat("&7[&dEstradiol Clien't&7] &4An error occoured");
        return;
      }
      const player =
        response["profiles"][selected]["members"][user_uuid]["death_count"];
      ChatLib.chat("--------------------");
      ChatLib.chat();
      ChatLib.chat("--------------------");
    });
  }).catch((error) => {
    print(error);
  });
}
