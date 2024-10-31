//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504";
global.owner = process.env.OWNER_NUMBER || "233257514504";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233257514504";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhWdlQzYVNWdDF5bDlIaUJyRTg5cG1idStkVFU0SW1tY3k1ZWw2ZVBWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlNrMk5MS2wzU0RXR2kyN3ZpMi9FM3BvVWN1VjdXK3BmaFNFc1Z0eFVtOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T1NnVkpjNFF1UmlUZVZNUFdyeWEwbk14YWxHR0VaUFJIZ2oranN2eVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwalJSOThFT3czSkk0Q0tma01ZeXFVTnkrejlOZStLb0lVa2JyeFg5N0cwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IQ0s4Z1ZvWFliTU9uUVlHMlFROVJMRGx5SXFIcTlweThjWU5hVmhVSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJaNVhBNTV3YVpDNVRwMVdwTDZBbTN1Y0RCS2cybWgyY2FqZm0ycmN3SGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9UaVBaU2l5bDBKTk9OSTloRUI2TXJxaVlDNTRsNzNBK0dlNVoxdEgyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGRObWo0L01sZnYvRlZ6VEh0b3k0WWRyeFNRWnhNUFFPMjI5Tml0SGEydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQwQlUzbnVnNmJSZkJnamI4ckV6UGdnTlREM3dRaTVMVUFkNU9vc0tQYm5zNVRWZW1BUVpTb2d5Sy8rc1gzcSs0cWpOTnBTQk9zMkJ1dW15cDEyUGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJiZXdDTXRhSDNBQ3UwWVc1TW5Mb0YxSHFiSTBEQ0pXUlY1ZlBpRk1KL3R3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzkwMDI1NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUU3OTYwNjFGNkU1NEFERTcxRkM1NDc0QkUwQ0JGOUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDQxNjA5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3OTAwMjU2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQzQzRjNCNDRFMDRCNEJEQjgzQUY0MEM4MzQyMjFGOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNDE2MDkyfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOnRydWV9LCJkZXZpY2VJZCI6ImgzaTJSNXNvUkxxSWVxMjlYUUtjRHciLCJwaG9uZUlkIjoiYmIxN2M2YzUtNzVmNi00OTkwLWE5YTAtMGE1YjUwZDNiMzAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9vZkZZUFprK0pGSmVNUDc4N21xVUJMa2VKST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrbWkxSFdlVVpKQlduSkQ2UWhKanEwZDJOdGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1dDOTZCOFQiLCJtZSI6eyJpZCI6IjIzNDkwNzkwMDI1NjM6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiJEJNIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKelN6ZXdCRU15YmtMa0dHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5MkYyTnZZaHNQRlRSSzM4VEVRSk9NLytjZDdDWTYzSnZDeUpZcHlSOW1jPSIsImFjY291bnRTaWduYXR1cmUiOiJScjFwM3hKMWRyVTQwSmhvdk14cjFrWFNuZlNjNnBXS2ZqMURNMUgyVnAxUW1lSEFHVHdkTDF5WGc0bk85a0RXYVVhNmZtR1d2Qjdrbm5OT3dLWXZEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWVIQzNrZStrVUt5bUs1Mjh2TUd1aUVBZS9DdzRXRnZMWUZaMnZBTmFJT3NLQ3lkSDRrKzBVOVQ0cElxQXE5a29jUzl6MmkwV1YzdmVVTXVsRk0rakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc5MDAyNTYzOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN0aGRqYjJJYkR4VTBTdC9FeEVDVGpQL25IZXdtT3R5YndzaVdLY2tmWm4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0MTYwODksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEF3In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
