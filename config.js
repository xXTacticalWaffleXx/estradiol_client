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
@Vigilant("estradiol", "Estradiol clien\'t", {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General', 'Pets', 'Debug'];
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
        description: "Automatically warp to dungeon hub when kuudra is killed.",
        category: "General",
        subcategory: "Ashfang",
    })
    ash_auto_warp = false;
    
    @SwitchProperty({
        name: "Death Message Copier",
        description: "Automatically send a chosen players death messages in party chat",
        category: "General",
        subcategory: "Auto Bully",
    })
    death_copy = true;

    @TextProperty({
        name: "Player",
        description: "the player who's death messages you want to be copied",
        category: "General",
        subcategory: "Auto Bully",
    })
    death_copy_name;

    // Pets
    @SwitchProperty({
        name: "Pet display",
        description: "Shows what pet you are using VERY WIP DONT USE XD.",
        category: "Pets",
        subcategory: "Pet display",
    })
    pet_display = false;
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
    }
}
export default new Settings();
