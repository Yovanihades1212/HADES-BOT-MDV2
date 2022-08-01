import yts from "yt-search"
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Begin you*`    
try {
let imagen1 = fs.readFileSync('./src/Menu2.jpg') 
let search = await yts(args.join(" "))
let listSerch = []
let teskd = `𝐌𝐮𝐬𝐢𝐜𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧𝐚𝐝𝐚 𝐜𝐨𝐧: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣⓐⓓⓞⓢ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫',
title: " 『 𝗠𝗨𝗦𝗜𝗖𝗔 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗔 』",
buttonText: "[♦ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 ♦]",
sections}
const fake = { quoted: {
key : {
remoteJid: '6283136505591-1614953337@g.us',
participant : '0@s.whatsapp.net'},
message: {
orderMessage: {
itemCount: 9999999,
status: 1,
surface: 1,
message: '𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ', 
orderTitle: `Mystic`,
thumbnail: imagen1, 
sellerJid: '0@s.whatsapp.net'}}}}
if (command == 'playlist') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})} 
await conn.sendMessage(m.chat, listMessage, fake)}
if (command == 'playlist2') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})} 
await conn.sendMessage(m.chat, listMessage, fake)} 
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*')
console.log(e)
}}
handler.command = /^playlist|playlist2$/i
handler.exp = 35
handler.limit = 1
export default handler
