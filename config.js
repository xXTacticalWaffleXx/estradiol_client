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
    })
    ash_counter = true;

    constructor() {
        this.initialize(this);
    }
}
export default new Settings();
