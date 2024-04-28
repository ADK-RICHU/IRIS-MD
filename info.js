//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                     LIGHT-WEIGHT WHATSAPP BOT                                        //
//                                                                                                      //
//                                             𝚅.1.2.7                                                  // 
//                                                                                                      //
//                          ██╗ ██████╗ ██╗███████╗    ███╗   ███╗ ██████╗                               //
//                          ██║ ██╔══██╗██║██╔════╝    ████╗ ████║ ██╔══██╗                             //
//                          ██║ ██████╔╝██║███████╗    ██╔████╔██║ ██║  ██║                             //
//                          ██║ ██╔══██╗██║╚════██║    ██║╚██╔╝██║ ██║  ██║                             //
//                          ██║ ██║  ██║██║███████║    ██║ ╚═╝ ██║ ██████╔╝                             //
//                          ╚═╝ ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝                              //
//                                                                                                      //
//                                          BY: VENOX-SENPAI                                            //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : IRIS-MD
* @Developer : Venox-Senpai
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : Venox-Senpai

**/

const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const toBool = (x) => x === 'true';
const DATABASE_URL = process.env.DATABASE_URL || './lib/database.db';
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}


module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'IRIS_MD~tYwBnwIghS4sBe3LrXKK2',
    HANDLERS: process.env.HANDLERS || '.',
    IG: process.env.IG || 'https://instagram.com/sla.sher_/',
    INFO: process.env.INFO || 'ᴉᴛᴢ ᴍᴇ ᴀᴅᴋ_ʀᴉᴄʜᴜ;ADK 리츄;https://telegra.ph/file/42d9cf926fb1eb8d10255.jpg',
    URL: process.env.URL || 'https://chat.whatsapp.com/I9WpnuNlTj8ELutpU4qfl7',
    SUDO: process.env.SUDO || '916282122603',
    AUTO_STATUS_VIEW: process.env.AUTO_STATUS_VIEW || 'true',
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'true',
    MODE: process.env.MODE || 'public',
    STICKER_DATA: process.env.STICKER_DATA || '️ᴉᴛᴢ ᴍᴇ ᴀᴅᴋ_ʀᴉᴄʜᴜ;ADK 리츄',
    HAPP: process.env.HAPP || '', // ɪꜰ ɴᴏᴛ ʜᴇʀᴏᴋᴜ, ᴛʜᴇɴ ᴋᴇᴇᴘ ɪᴛ ʙʟᴀɴᴋᴇᴅ
    HKEY: process.env.HKEY || '', // ɪꜰ ɴᴏᴛ ʜᴇʀᴏᴋᴜ, ᴛʜᴇɴ ᴋᴇᴇᴘ ɪᴛ ʙʟᴀɴᴋᴇᴅ
    DATABASE_URL: DATABASE_URL
};

const DATABASE = DATABASE_URL === "./lib/database.db" ?
    new Sequelize({
        dialect: "sqlite",
        storage: DATABASE_URL,
        logging: false
    }) :
    new Sequelize(DATABASE_URL, {
        dialect: "postgres",
        ssl: true,
        protocol: "postgres",
        dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false
    });

module.exports.DATABASE = DATABASE;
