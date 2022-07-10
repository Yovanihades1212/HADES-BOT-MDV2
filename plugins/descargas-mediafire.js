import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀.\n\n𝙀𝙉𝙏𝙀𝙍 𝘼 𝙑𝘼𝙇𝙄𝘿 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀 𝙇𝙄𝙉𝙆.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏❤️${eg}🍃${gt} 
├❏💎${vs}
├❏────ׂ─ׂ─ׂ─ׂ
├❏💫 𝙉𝙊𝙈𝘽𝙍𝙀 | 𝙉𝘼𝙈𝙀
├❏🧨${filename}
├❏────ׂ─ׂ─ׂ─ׂ
├❏ 💪 𝙋𝙀𝙎𝙊 |  𝙎𝙄𝙕𝙀
├❏ ❤️ ${filesizeH}
├❏────ׂ─ׂ─ׂ─ׂ
├❏ 🌃 𝙏𝙄𝙋𝙊 | 𝙏𝙔𝙋𝙀
├❏ 🥀 ${ext}
└────ׂ─ׂ─ׂ─ׂ───`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|YOVANI ',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`}}})
  
let info = `𝙈𝘼𝙔𝙊𝙍 𝘼 150 𝙈𝘽 𝙀𝙎 𝙋𝙊𝙎𝙄𝘽𝙇𝙀 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙀 𝙀𝙉𝙑𝙄𝙀.

𝙂𝙍𝙀𝘼𝙏𝙀𝙍 𝙏𝙃𝘼𝙉 150 𝙈𝘽 𝙈𝘼𝙔 𝙉𝙊𝙏 𝘽𝙀 𝙎𝙀𝙉𝙏.`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎️', '/estado']
], m,)  
  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${fg}𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍. 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀.
𝙋𝙇𝙀𝘼𝙎𝙀 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉. 𝙈𝙐𝙎𝙏 𝘽𝙀 𝘼 𝙑𝘼𝙇𝙄𝘿 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀 𝙇𝙄𝙉𝙆.`)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.exp = 100
export default handler
