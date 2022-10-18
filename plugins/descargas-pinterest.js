import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} 𝙐𝙎𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} hades*\n\n𝙐𝙎𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙆𝙀\n*${usedPrefix + command} Cat*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮`.trim(), m)
  
  conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['◀️𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚▶️ |🍃𝙉𝙚𝙭𝙩', `/pinterest ${text}`],
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler

