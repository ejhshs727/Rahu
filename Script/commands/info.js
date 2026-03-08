const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "info",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "🔰𝐑𝐀𝐇𝐀𝐓 𝐈𝐒l𝐀𝐌🔰",
 description: "Show  Info",
 commandCategory: "info",
 usages: "info",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━━┓
┃  🌟𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎🌟
┣━━━━━━━━━━━━━━━━┫
┃👤𝐍𝐀𝐌𝐄      :Nasrin Chowdhury Riya🤍
┃🚹𝐆𝐄𝐍𝐃𝐄𝐑    :Female 
┃🎂𝐀𝐆𝐄       :18+
┃🕌𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 : 𝐈𝐒𝐋𝐀𝐌
┃🏫𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍 :vondami 𝐋𝐎𝐂𝐀𝐋 𝐂𝐎𝐋𝐋𝐄𝐆𝐄 
┃🏡𝐀𝐃𝐃𝐑𝐄𝐒𝐒 :Chittagong 𝐂𝐈𝐓𝐘
┣━━━━━━━━━━━━━━━━┫
┃𝐓𝐈𝐊𝐓𝐎𝐊 :@Ogmusic🎵admin
┃📢𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 :NAI
┃🌐𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 :Nasrin Chowdhury Riya
┣━━━━━━━━━━━━━━━━┫
┃🕒𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐓𝐈𝐌𝐄 :${time}
┗━━━━━━━━━━━━━━━━┛`,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/HKdBp9X.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
