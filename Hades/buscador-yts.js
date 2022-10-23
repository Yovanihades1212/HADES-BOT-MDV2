import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘾𝘼𝙉𝘼𝙇 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n\n𝙒𝙍𝙄𝙏𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
┌「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」
├❏✨ *${v.title}* 
├❏🎈 (${v.url})
├❏⏳ *Duración:* ${v.durationH}
├❏🗓 *Fecha:* de subida: ${v.durationH}
├❏👀 *Vistas:* ${v.view} 
└────ׂ─ׂ─ׂ─ׂ───`.trim()
      case 'channel': return `
┌「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」
├❏✨ *${v.channelName}* 
├❏(${v.url})
├❏👥 *Subscriptores:* ${v.subscriberH} 
├❏🎥 *Videos:* ${v.videoCount}  
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
    }
  }).filter(v => v).join('\n「───ׂ─ׂ─ׂ─ׂ───」\n')
 await m.reply(teks)
 let info = `💖𝚃𝚄 𝙿𝙴𝙳𝙸𝙳𝙾 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 É𝚇𝙸𝚃𝙾🥳 𝙳𝙴𝚂𝙴𝙰𝚂 𝙿𝙴𝙳𝙸𝚁 𝙰𝙻𝙶𝙾 𝙼Á𝚂👩‍💻\n\n💖𝚈𝙾𝚄𝚁 𝙾𝚁𝙳𝙴𝚁 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈, 𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃🥳 𝚃𝙾 𝙾𝚁𝙳𝙴𝚁 𝚂𝙾𝙼𝙴𝚃𝙷𝙸𝙽𝙶 𝙴𝙻𝚂𝙴?👩‍💻
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒️', '/grupos']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
export default handler
