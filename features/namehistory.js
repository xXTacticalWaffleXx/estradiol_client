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
    ChatLib.chat("--------------------");
    ChatLib.chat(`${response["usernames"][0]["username"]} original name`);
    for (let x in response.usernames) {
      if (x == 0) {
        //do nothing
      } else {
        let changed_at = response["usernames"][x]["changed_at"].split("T")[0];
        console.log(changed_at);
        ChatLib.chat(
          `${response["usernames"][x]["username"]} ${changed_at}`,
        );
      }
    }
    ChatLib.chat("--------------------");
  }).catch((error) => {
    console.log(error);
    ChatLib.chat("&7[&dEstradiol Clien't&7] &4An error occoured");
  });
}
