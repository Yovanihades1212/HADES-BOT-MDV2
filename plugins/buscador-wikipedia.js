import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `[❗️𝐈𝐍𝐅𝐎❗️] 𝙴𝚂𝚃𝙰𝚂 𝚄𝚂𝙰𝙽𝙳𝙾 𝙼𝙰𝙻 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾!!*\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾:*\n*${usedPrefix + command} 𝙿𝚊𝚕𝚊𝚋𝚛𝚊 𝚌𝚕𝚊𝚟𝚎 𝚊 𝚋𝚞𝚜𝚌𝚊𝚛*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Hades`
wikipedia(`${text}`).then(res => {
let info = `💖𝚃𝚄 𝙿𝙴𝙳𝙸𝙳𝙾 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 É𝚇𝙸𝚃𝙾🥳 𝙳𝙴𝚂𝙴𝙰𝚂 𝙿𝙴𝙳𝙸𝚁 𝙰𝙻𝙶𝙾 𝙼Á𝚂👩‍💻\n\n💖𝚈𝙾𝚄𝚁 𝙾𝚁𝙳𝙴𝚁 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈, 𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃🥳 𝚃𝙾 𝙾𝚁𝙳𝙴𝚁 𝚂𝙾𝙼𝙴𝚃𝙷𝙸𝙽𝙶 𝙴𝙻𝚂𝙴?👩‍💻\n\n` + res.result.isi
conn.sendHydrated(m.chat, info, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒️', '/grupos']
], m,)   
  
}).catch(() => { m.reply(`[❗️𝐈𝐍𝐅𝐎❗️] 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽, 𝙿𝚁𝚄𝙴𝙱𝙰 𝚀𝚄𝙴 𝙷𝙰𝚈𝙰𝚂 𝙴𝚂𝙲𝚁𝙸𝚃𝙾 𝚄𝙽𝙰 𝚂𝙾𝙻𝙰 𝙿𝙰𝙻𝙰𝙱𝚁𝙰 𝚈 𝙻𝙾 𝙷𝙰𝚈𝙰𝚂 𝙴𝚂𝙲𝚁𝙸𝚃𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴`) })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i 
handler.exp = 40
export default handler
