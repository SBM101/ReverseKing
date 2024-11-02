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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pWVG1sd0ttUjBiTUZXbW5SbHFQVnBIWGQ3Y2tTbTRwdFJ6dHVUZzVXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHBtd0hOK0gwRWlqRnpDV3BWQ2M0TUJzZllHdXplblZ4VmVtZm9URVF3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR1dnK05BRWNrbmgxYXk0L0JWUkNkdnAyc2x0d216djZtbkhxaW01TjNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVbzMvRjZZZjZIN1ZyV2JpYURpNlpvdm9qNGZvbDB6ZlNVRlpodkorWFVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLV1J3dWMxQU4zVTZubUxhTlJWdVkxTTEvYk82TDc5UUFWdi9pdVRNWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE4c3hiZkxsV3NtTUJmYnZ3ZUNXVExyMDU0N1laZStUY3dpcUNIMm1jMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhFS0lUaTJpbWdjdG14UTR6SXJNNTRNMStwem5DMis1dzBKNGJuNFYzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmVoVHA0WXhYUWVMTDZrWDFneTM5WEFYenhlQXZqZDZHWFdmSnZ2R015ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhVejgyTnBJdlhXOU01WmFhSGwyNFZjQTBpWHMvdmNKOWpzZ1pQMy9jc2F1VlJ1V2pvR3FYaHhyekRvOERjOGdmK0YzOXNpUkVCNk1SNHlCK3RoNkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJnZmdod3dHdkpPUXBPZVloczZhaVdDb1hjb1dsYkRIV0FaQ1I2UXVLajk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzkwMDI1NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTE2MDQ2Mjg5RDEzQTNFNjY3NTY5QUMyRjgzODQzMDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDU0Njc1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3OTAwMjU2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMzU3ODc2NkQxNkE5NzhFQjFGREExQTQ1OUY1NEQxQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTQ2NzUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxbFUyaTFLNlEwV1ZLV2FZbWJodnNRIiwicGhvbmVJZCI6IjA5NjBhMjQ4LTI2NzEtNDAxMy1iNzkxLThkNzNlZTBmNDliZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNk1iTWwzdGlIblgvSnRYWXVZdVpRbHJpZ1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVWVzIrZEdIQzh0a01kOWZvOWJWaDRRODRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdGWFlLQ1NEIiwibWUiOnsiaWQiOiIyMzQ5MDc5MDAyNTYzOjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9yZW9mZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUsyeVk0RUVLK1ltTGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUXcxRm1TZy96c2JQNmJ0RWlLYU5sSE5TZGNIT1N4SVBxUTI4dkEzMTNHRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaW9DSVNtWDNUU2FoTEt2UE5Sa0dmYi9JdnIyTHUxNmxUWTB2NmJ0bVp3c282bTFBdjVBSUpTYmszS1VsSnI2T3hJc1BCV29FYm1QNko4blhjQWg3Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjZFd3RUNXlEVzNPdXhjTDJkK1h1VmZZK2VzNFZ3a3VwWjk1RnNBSkVBakkwdnZubUNQeUQzemQ3S2JiK2tZZ2RNLzNtajgxSUppUGxQVDBCbFJlc0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3OTAwMjU2MzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVTU5SWmtvUDg3R3orbTdSSWltalpSelVuWEJ6a3NTRDZrTnZMd045ZHhoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTQ2NzQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVOZCJ9" // session id here
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
