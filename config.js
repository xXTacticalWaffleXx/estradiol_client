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
        const categories = ['General', 'Mining', 'Dungeons', 'Chat', 'Pets', 'Memes', 'Debug'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Settings {
    // General
    @TextProperty({
        name: 'API key',
        category: 'General',
        protected: true,
    })
    API_key = '';

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
    
    // Dungeons
    @SwitchProperty({
        name: "Bonzo mask display",
        description: "Display what bonzo masks have been used and what havent",
        category: "Dungeons",
        subcategory: "Bonzo mask display",
    })
    render_bonzo_mask_display = false;

    @PercentSliderProperty({
        name: "Bonzo mask display height",
        category: "Dungeons",
        subcategory: "Bonzo mask display",
    })
    bonzo_mask_display_height = 0;

    @PercentSliderProperty({
        name: "Bonzo mask display width",
        category: "Dungeons",
        subcategory: "Bonzo mask display",
    })
    bonzo_mask_display_width = 0;

    @SwitchProperty({
        name: "M6 gyro countdown",
        description: "shows a count down for when you need to gyro (currently only fm)",
        category: "Dungeons",
        subcategory: "solvers",
    })
    m6_gyro_solver = false;

    @PercentSliderProperty({
        name: "M6 display height",
        category: "Dungeons",
        subcategory: "solvers",
    })
    m6_gyro_solver_display_height = 0;

    @PercentSliderProperty({
        name: "M6 display width",
        category: "Dungeons",
        subcategory: "solvers",
    })
    m6_gyro_solver_display_width = 0;
    
    // Mining
    @SwitchProperty({
        name: "Send coords for high powder chests",
        description: "Sends the coords of any chest with more then 1k mithril or gemstone powder",
        category: "Mining",
        subcategory: "Powder Mining",
    })
    send_powder_messages = false;
    
    @SwitchProperty({
        name: "Cooldown Display",
        description: "Shows the cooldown for mining speed boost",
        category: "Mining",
        subcategory: "Cooldown Display",
    })
    cooldown_display = false;

    @SwitchProperty({
        name: "Force render cooldown display",
        description: "quick and dirty fix for the mining speed cooldown sometimes not rendering",
        category: "Mining",
        subcategory: "Cooldown Display",
    })
    force_cooldown_display = false;
    
    
    @SwitchProperty({
        name: "Show Title On Speed Boost Availible",
        description: "Shows the title when your mining speed boost is ready",
        category: "Mining",
        subcategory: "Cooldown Display",
    })
    show_title = false;
    
    @PercentSliderProperty({
        name: "Cooldown display height",
        category: "Mining",
        subcategory: "Cooldown Display",
    })
    cooldown_display_height = 0;

    @PercentSliderProperty({
        name: "Cooldown display width",
        category: "Mining",
        subcategory: "Cooldown Display",
    })
    cooldown_display_width = 0;

    @SwitchProperty({
        name: "Auto enter the crystal hollows",
        category: "Mining",
        subcategory: "Misc",
        description: "Automatically runs /enterthecrystalhollows when the message to skip the minecart ride appears",
    })
    auto_join_ch = false;

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
        this.setCategoryDescription("General", "§dTrans §bRights §fAre §bHuman §dRights")
                            //this shows up if this is on
                            // \/               \/
        this.addDependency("Lunar auto kick", "Lunar Detection")
        this.addDependency("wb message", "Auto wb")
        this.addDependency("Dms Imgur Fix", "Readable DMs")
        this.addDependency("Non Imgur Fix", "Readable non chat")
        this.addDependency("Bonzo mask display width", "Bonzo mask display")
        this.addDependency("Bonzo mask display height", "Bonzo mask display")
        this.addDependency("M6 display height", "M6 gyro countdown")
        this.addDependency("M6 display width", "M6 gyro countdown")
    }
}
export default new Settings();
