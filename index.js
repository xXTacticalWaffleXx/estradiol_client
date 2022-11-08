//author: luna aphelion <luna-aphelion@proton.me>

import Settings from './config.js'
import {inSkyblock, kickLunarUsers} from './utils.js'
import registerCommands from './commands.js'
import {Ashfang} from './Ashfang.js'
import {PetDisplay} from './Pet_Display.js'
import {deathBullyer, ReadableDms, ReadableNons, autoRetransferParty, AutoWb, SendPowderMessages} from './Misc.js'

registerCommands();
Ashfang();
PetDisplay();
deathBullyer();
ReadableDms();
kickLunarUsers();
ReadableNons();
autoRetransferParty();
AutoWb();
SendPowderMessages();
