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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hBVlBxWGZhNzViL1hYRmdyMDNoUFRnTjd5elMvUmlWMXpDZU9aM0xXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmNadW13MWxDL2FOMXo1MFdaVlNjWVBYOG9ScFhHaEs5VlBXNUg0S3BSdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRXhPWmY2NkthblFJMDhEMHQ3dE8rTUhFQm12eWxESWh6NWxNRFgwZFZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHL1FabHljOWwveGNEYlZBdkZ2ZFBhbVZFdnpGbUR5S0ZQVjZaZkVSMW1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FUTRTODFsZE0xdnVWRE9XN3FadHhnTi82OTNQcmU0K2FJc2tHNGtMblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0vSzByZ2YxcVI0N29uMGQ1OXpYZjJpWUlOaFJLcEtHZzlsYmxLQ0JDeXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tIeTlOemVrZUdQb3BrMlB1a0JZdTFlQzJ3RkNGYlpnUFVQbS9uVmIwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmhBcDBoclBlYWtPeVNTUFFLblNBYWI1SGpWZ1FOSWphcFJSb21uZGV4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind3V0phQTRCTzRUR3E0Zm5BT09vT3MvYUNvSnZrMmdPdVgyK1ZUTW9ZVCtHcEFNaWkrSE8yVnliblJjcE5DeXVpMzZrbk1TeklzcWFxNnM4dnB0c0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJ3dEVUNjVYYWVOMFJ1VzFlL3B0TGtyaXorYTlJcmZKOVkwcUpZZ1B4QzhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOnRydWV9LCJkZXZpY2VJZCI6ImNUamkwWS1lU1pXbGFnclpWdlY2b3ciLCJwaG9uZUlkIjoiOTZmNDljZDctZGI0Mi00OTkwLTkxZTEtYzQwNGViMTRjMDVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBrSVRmUTl0Sms1MlFwRGpvK3N5b2ppdTZSbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJETVRtZVp3K05nNnFzUXRYMDFGSForTTd4SlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVQyWDg5VlAiLCJtZSI6eyJpZCI6IjIzNDkwNzkwMDI1NjM6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIkQk0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p6U3pld0JFSWFIa0xrR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InkyRjJOdlloc1BGVFJLMzhURVFKT00vK2NkN0NZNjNKdkN5SllweVI5bWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9scEhxNlB6djVPOXBKMHVQSDVPWFo0TkhvL2hzOGNMQW5CMnJzendhMTZ6dnEycXh4ZnZNajB6ZjdQYzVhODg5K0t0eEs4ZW9KUlJOd2cvTEJYbUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0SXBBQnBNcEd1UlNyb1dJMUw1YjFWYUlqT1pGemdnTXVlVHNJVHJYY3FFVSt3cXdlaUVNQWVrenVkMnYyZ2JienA3eHJjMlJ0OE9jVHNOd3BYd1JDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzkwMDI1NjM6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjdGhkamIySWJEeFUwU3QvRXhFQ1RqUC9uSGV3bU90eWJ3c2lXS2NrZlpuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDEzNDU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhBdyJ9fQ==" // session id here
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
