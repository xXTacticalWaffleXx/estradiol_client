//author: luna aphelion <luna-aphelion@proton.me>

import {
@ButtonProperty,
@CheckboxProperty,
Color,
@ColorProperty,
@PercentSliderProperty,
@SelectorProperty,
@SwitchProperty,
@TextProperty,
@Vigilant,
} from 'Vigilance';
@Vigilant("EstradiolClient", "Estradiol clien\'t", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General', 'Chat', 'Pets', 'Memes', 'Debug'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    // General
    @SwitchProperty({
        name: "Ashfang counter",
        description: "Tells you how many ashfangs until you need to reset.",
        category: "General",
        subcategory: "Ashfang",
    })
    ash_counter_toggle = true;
    
    @SwitchProperty({
        name: "Party chat messages",
        description: "Automatically tell your party how long until you need to reset.",
        category: "General",
        subcategory: "Ashfang",
    })
    pchat_messages = false;

    @SwitchProperty({
        name: "Auto Warp",
        description: "Automatically warp to dungeon hub when ashfang is killed as long as you dont need to reset.",
        category: "General",
        subcategory: "Ashfang",
    })
    ash_auto_warp = false;

    @SwitchProperty({
        name: "Readable DMs",
        description: "Makes dms be white instead of grey.",
        category: "General",
        subcategory: "Chat",
    })
    readable_dms = false;

    @SwitchProperty({
        name: "Dms Imgur Fix",
        description: "Makes readable dms not happen on messages with imgur links as a quick and dirty way to fix patcher not working with them when using readable dms",
        category: "General",
        subcategory: "Chat",
    })
    dms_imgur_fix = false;
    
    @SwitchProperty({
        name: "Readable non chat",
        description: "Makes non's messages be white instead of grey.",
        category: "General",
        subcategory: "Chat",
    })
    readable_nons = false;
    
    @SwitchProperty({
        name: "Non Imgur Fix",
        description: "Makes readable nons not happen on messages with imgur links as a quick and dirty way to fix patcher not working with them when using readable dms",
        category: "General",
        subcategory: "Chat",
    })
    nons_imgur_fix = false;

    @SwitchProperty({
        name: "Lunar Detection",
        description: "Tells you if someone on lunar joins your party finder",
        category: "General",
        subcategory: "Dungeons",
    })
    lunar_detection = false;
    
    @SwitchProperty({
        name: "Lunar auto kick",
        description: "Automatically kick lunar users from your party",
        category: "General",
        subcategory: "Dungeons",
    })
    lunar_auto_kick = false;

    @SwitchProperty({
        name: "Send coords for high powder chests",
        description: "Sends the coords of any chest with more then 1k mithril or gemstone powder",
        category: "General",
        subcategory: "Mining",
    })
    send_powder_messages = false;
    // Chat

    @SwitchProperty({
        name: "Auto wb",
        description: "Automatically say something when someone logs on in your guild",
        category: "Chat",
        subcategory: "Guild",
    })
    auto_wb = false;

    @TextProperty({
        name: "wb message",
        description: "the message you want to be sent when someone joins your guild",
        category: "Chat",
        subcategory: "Guild",
    })
    wb_string = "wb";

    // Memes
    @SwitchProperty({
        name: "Death Message Copier",
        description: "Automatically send a chosen players death messages in party chat",
        category: "Memes",
        subcategory: "Auto Bully",
    })
    death_copy = false;

    @TextProperty({
        name: "Player",
        description: "the player who's death messages you want to be copied",
        category: "Memes",
        subcategory: "Auto Bully",
    })
    death_copy_name = " ";

    @SwitchProperty({
        name: "Auto party transfer",
        description: "Automatically transfer a party back if it is transfered to you",
        category: "Memes",
        subcategory: "Party",
    })
    auto_transfer = false;

    // Debug
    @SwitchProperty({
        name: "Debug",
        description: "Logs debug info to chat.",
        category: "Debug",
    })
    debug = false;

    @SwitchProperty({
        name: "Anti player sent messages",
        description: "Check if an ashfang or bladesoul message was sent by a player.",
        category: "Debug",
    })
    party_msg_check = true;

    constructor() {
        this.initialize(this);
                            //this shows up if this is on
                            // \/               \/
        this.addDependency("Lunar auto kick", "Lunar Detection")
        this.addDependency("wb message", "Auto wb")
        this.addDependency("Dms Imgur Fix", "Readable DMs")
        this.addDependency("Non Imgur Fix", "Readable non chat")
    }
}
export default new Settings();
