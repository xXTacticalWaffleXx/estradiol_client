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
} from 'Vigilance', 'Estradiol clien't';
@Vigilant("estradiol")
class Settings {
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
        name: "Debug",
        description: "Logs debug info to chat.",
        category: "Debug",
    })
    debug_chat_log = false;

    @SwitchProperty({
        name: "Party chat messages",
        description: "Automatically tell your party how long until you need to reset.",
        category: "Debug",
    })
    party_msg_check = true;

    constructor() {
        this.initialize(this);
    }
}
export default new Settings();
