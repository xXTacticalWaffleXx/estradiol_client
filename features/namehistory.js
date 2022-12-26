import request from "../../requestV2";

export function NameHistory(name) {
  if (!name) {
    ChatLib.chat("&7[&dEstradiol Clien't&7] &4Name not specified");
    return;
  }
  request({
    url: `https://crafty.gg/players/${name}.json`,
    headers: { "User-Agent": " Mozzila/5.0" },
    json: true,
  }).then((response) => {
    ChatLib.chat("&a--------------------");
    ChatLib.chat(`&d${response["usernames"][0]["username"]} &boriginal name`);
    for (let x in response.usernames) {
      if (x == 0) {
        //do nothing
      } else {
        let changed_at = response["usernames"][x]["changed_at"].split("T")[0];
        ChatLib.chat(
          `&d${response["usernames"][x]["username"]} &b${changed_at}`,
        );
      }
    }
    ChatLib.chat("&a--------------------");
  }).catch((error) => {
    console.log(error);
    ChatLib.chat("&7[&dEstradiol Clien't&7] &4An error occoured");
  });
}
