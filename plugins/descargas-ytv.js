import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://youtu.be/aPu9wQi-z8U*\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https://youtu.be/aPu9wQi-z8U*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
┌「${wm}」
├❏𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀
├❏𝙏${title}
├❏𝙏🧡 𝙋𝙀𝙎𝙊 | 𝙎𝙄𝙕𝙀
├❏𝙏${video['480p'].fileSizeH}
└──「${vs}」───ׂ`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
┌「${wm}」
├❏𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀
├❏𝙏${title}
├❏𝙏🧡 𝙋𝙀𝙎𝙊 | 𝙎𝙄𝙕𝙀
├❏𝙏${video['480p'].fileSizeH}
└──「${vs}」───`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}𝙀𝙎 𝙋𝙊𝙎𝙄𝘽𝙇𝙀 𝙌𝙐𝙀 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝙎𝙀𝘼 𝙈𝙐𝙔 𝙋𝙀𝙎𝘼𝘿𝙊. 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊\n\n𝙄𝙏 𝙄𝙎 𝙋𝙊𝙎𝙎𝙄𝘽𝙇𝙀 𝙏𝙃𝘼𝙏 𝙏𝙃𝙀 𝙁𝙄𝙇𝙀 𝙄𝙎 𝙑𝙀𝙍𝙔 𝙃𝙀𝘼𝙑𝙔. 𝙏𝙍𝙔 𝘼𝙉𝙊𝙏𝙃𝙀𝙍`)
console.log(e)  
}
  
let info = `💖𝚃𝚄 𝙿𝙴𝙳𝙸𝙳𝙾 𝙵𝚄𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 É𝚇𝙸𝚃𝙾🥳 𝙳𝙴𝚂𝙴𝙰𝚂 𝙿𝙴𝙳𝙸𝚁 𝙰𝙻𝙶𝙾 𝙼Á𝚂👩‍💻\n\n💖𝚈𝙾𝚄𝚁 𝙾𝚁𝙳𝙴𝚁 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈, 𝙳𝙾 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃🥳 𝚃𝙾 𝙾𝚁𝙳𝙴𝚁 𝚂𝙾𝙼𝙴𝚃𝙷𝙸𝙽𝙶 𝙴𝙻𝚂𝙴?👩‍💻
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐆𝐑𝐔𝐏𝐎𝐒', '/grupos'],
['𝐄𝐒𝐓𝐀𝐃𝐎', '.estado'],
['𝑴𝑬𝑵𝑼', '/menu']
], m,) 

}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.exp = 0
export default handler

