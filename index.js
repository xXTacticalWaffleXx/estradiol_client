//author: luna aphelion <luna-aphelion@proton.me>

import Settings from './config.js'
import {inSkyblock} from './utils.js'
import registerCommands from './commands.js'
import {Ashfang} from './Ashfang.js'
import {PetDisplay} from './Pet_Display.js'

registerCommands();
Ashfang();
PetDisplay();
