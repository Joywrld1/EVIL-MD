
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "rahmanullah97097@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923319709781@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Mrunknown54/EVIL-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va8TzeF0AgW8dVET3U1w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1271d54767e6d0c21855a.jpg";
global.devs = "923319709781";
global.sudo = process.env.SUDO || "923319709781";
global.owner = process.env.OWNER_NUMBER || "923319709781";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJleW5nNDZPRTRYZTN6RlBNTFowTXRWSXk4M3FxWUtFeXBRWXY0KzNFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmNKVGxHd2srdVRqc2RuNkxxOXUxSzdOTHlEbGRMcEJuRkVGRmFFOWZpbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QzhWRzY0U1VPMTgzUTh2NXpEU012U1cvMXlhRHhaV0gvaHNDQVFBK1VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWHExbi9ETUVHRTVJbUJrMTYwSUkxc3FsTko4S3ZRUk10UXBzWFhQRjJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHanhoTFVXSUc3dmliRW8wM09ZVHBIaGFHZnBlTEdzWXNobWRiMCtoVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhGaDl0cVF0SE0wMFY3TmtMZk5kSDN6L1JkbVhJejRyekIwNTlKZkNiSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElqSDJ5RFptTXNLYzZ6ZjlnTTVrZVpYVEdPTStnOHB3TnZnT3NFSmpYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibE9CZCtuYU9qQUJJRS9IcUNKZFhrNW44RVdYam80VXZTSnJ6TnhTVDd4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndycWhEYytwUzFKd29vRm4zR1NMUW5LL0tNZWl3Uk9GTk5Pc3VnbG9YbHZwRElQYWovYkpBK3FLWXNoWUd2WXBhZis4b3BoYmE5d2c2eHFEZU1hbGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6ImNRUm1yYVJyemJRRXVMeWZPbU1WZXlTdzFveXFDcm1ZWEdxUjNpMnV3cnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJfQ2lxdG1WUXgtZHFVZzZ2c01XbmciLCJwaG9uZUlkIjoiMmFmNWI3ODAtMDRkNS00YWQ3LWIzYjEtMDBiMzk0OWViMzI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBvQ3ZaUXBIcDYvemV0YWQ5Z0xOZlNhMWNIRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEYTk5MVhuandlbG5ENDA0RjgzSXNDbisxUGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1pQVE5YSE4iLCJtZSI6eyJpZCI6IjI2MzcxNjU0OTg0ODozMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUC9RMG9ZREVNdkorck1HR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUWZjVVduM2xodE4ybW90Um91a0xtd2FlcFVuVHVaNnRSK0tIQVp6U3J6bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicXp2b1Z0UnJQNVFvdnhhaFlZM2h1MmNEZnlyM3o4N0pNVzBzeXRuTmhFUzdoWmlXVjUzTkVXU0VJaGhlc0tqd24rL2h6YjNxSmxOcWd5RUdXdEtGREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkVyZ3hyM2pIbWc1enVpSXNPei9rZTM3SXdNV0VaUjdkTnFKeHdJSUFRZ3dDY3lBQnFCTGpyWERZaTNWTkoyMEF1K2xjMllUNzVQblVrRm5uWXFLUWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE2NTQ5ODQ4OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVIM0ZGcDk1WWJUZHBxTFVhTHBDNXNHbnFWSjA3bWVyVWZpaHdHYzBxODYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk1NzU3NjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXI1In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇᴠɪʟ ᴍᴅ_*",
  author: process.env.PACK_AUTHER || "ᴇᴠɪʟ-ᴍᴅ",
  packname: process.env.PACK_NAME || "ᴇᴠɪʟ-ᴍᴅ",
  botname: process.env.BOT_NAME || "𝐄𝐕𝐈𝐋-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "ᴅᴀʀᴋ ᴇᴠɪʟ",
  errorChat: process.env.ERROR_CHAT || "923319709781",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "EVIL").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
