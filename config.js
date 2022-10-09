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
@Vigilant("estradiol")
class Settings {
    @SwitchProperty({
        name: "Ashfang counter",
        description: "tells you how many ashfangs until you need to reset",
        category: "General",
        subcategory: "Ashfang",
    })
    ash_counter_toggle = true;
    
    @SwitchProperty({
        name: "Debug",
        description: "logs debug info to chat",
        category: "General",
        subcategory: "Ashfang",
    })
    debug = false;
    
    @SwitchProperty({
        name: "Party chat messages",
        description: "automatically tell your party how long until you need to reset",
        category: "General",
        subcategory: "Ashfang",
    })
    pchat_messages = false;

    constructor() {
        this.initialize(this);
    }
}
export default new Settings();
