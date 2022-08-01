import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} 𝙐𝙎𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} hades*\n\n𝙐𝙎𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙆𝙀\n*${usedPrefix + command} Cat*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝑮𝑶𝑶𝑮𝑳𝑬 | ${wm}`, link, link, '☘️ 𝙐𝙍𝙇', null, null, [
['◀️𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚▶️ | 𝙉𝙚𝙭𝙩', `/imagen ${text}`],
['𝑷𝑰𝑵𝑻𝑬𝑹𝑬𝑺𝑻', `#pinterest ${text}`],
['𝑴𝑬𝑵𝑼', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
handler.limit = 2
export default handler
