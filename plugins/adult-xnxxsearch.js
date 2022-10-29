import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
 {await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱')}
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏs ʜᴀ sɪᴅᴏ ʙᴀɴᴇᴀᴅᴏs sɪ ᴅᴇsᴇᴀ ᴀᴄᴛɪᴠᴀʀʟᴏs ᴛɪᴇɴᴇ ǫᴜᴇ sᴇʀ ᴜɴ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ /ᴇɴᴀʙʟᴇ ᴍᴏᴅᴏʜᴏʀɴʏ*'
if (!text) throw `*[❗] ᴜɴ ᴇᴊᴇᴍᴘʟᴏ sᴏʟᴏ ᴅᴇʟ ᴄᴏᴍᴀɴᴅᴏ* ${usedPrefix + command} *Con mi prima*`
try {
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `𝐕𝐈𝐃𝐄𝐎𝐒 𝐑𝐄𝐋𝐀𝐂𝐈𝐎𝐍𝐀𝐃𝐎𝐒 𝐂𝐎𝐍: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣⓐⓓⓞⓢ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫',
title: " 『𝐕𝐈𝐃𝐄𝐎𝐒 𝐑𝐄𝐋𝐀𝐂𝐈𝐎𝐍𝐀𝐃𝐎𝐒』",
buttonText: "[♦𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒♦]",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: '⇧ sᴇʟᴇᴄᴄɪᴏɴᴀ ᴇsᴛᴀ ᴏᴘᴄɪᴏɴ ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴇsᴛᴇ ᴠɪᴅᴇᴏ ⇧', rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply('*[❗] ʟᴏ sᴇɴᴛɪᴍᴏs ʜᴀ sᴜʀɢɪᴅᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler
