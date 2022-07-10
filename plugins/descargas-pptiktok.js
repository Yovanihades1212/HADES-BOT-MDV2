import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 "@"\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} mundo_dos_animes81*\n\n𝙏𝙔𝙋𝙀 𝙔𝙊𝙐𝙍 𝙏𝙄𝙆𝙏𝙊𝙆 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀 𝙒𝙄𝙏𝙃𝙊𝙐𝙏 𝙐𝙎𝙄𝙉𝙂 "@"\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} universo_editx*`
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
await conn.sendFile(m.chat, res, 'error.jpg', `✅ 𝙁𝙊𝙏𝙊 𝘿𝙀 𝙋𝙀𝙍𝙁𝙄𝙇 | 𝙋𝙍𝙊𝙁𝙄𝙇𝙀 𝙋𝙄𝘾𝙏𝙐𝙍𝙀\n💟 *${text}*`, m, false)
  
  let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, md, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒️', '/grupos']
], m,) 

}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.exp = 68
export default handler
