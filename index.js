//author: luna aphelion <luna-aphelion@proton.me>

// todo: write this shit better

import {Ashfang} from './misc/AshfangCounter.js'
import {autoRetransferParty} from './misc/AutoRetransferParty.js'
import {SendPowderMessages} from './misc/AutoSendHighPowderChests.js'
import {AutoWb} from './misc/AutoWb.js'
import {ReadableDms} from './misc/ReadableDms.js'
import {ReadableNons} from './misc/ReadableNons.js'
import {kickLunarUsers} from './misc/kickLunarUsers.js'
import {deathBullyer} from './misc/DeathAutoBullyer.js'

import {registerCommands} from './commands/RegisterCommands.js'

registerCommands();
Ashfang();
deathBullyer();
ReadableDms();
kickLunarUsers();
ReadableNons();
autoRetransferParty();
AutoWb();
SendPowderMessages();
