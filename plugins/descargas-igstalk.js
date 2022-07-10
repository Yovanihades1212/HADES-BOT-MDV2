import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} hades*\n\n𝙀𝙉𝙏𝙀𝙍 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} gata_dios*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
┌「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${name}💖✨
├❏ 🍃 ${gt} ${vs}
├❏───ׂ─ׂ─ׂ─ׂ── 
├❏🥀 𝙉𝙊𝙈𝘽𝙍𝙀 | 𝙉𝘼𝙈𝙀
├❏ ${name}
├❏───ׂ─ׂ─ׂ─ׂ── 
├❏🧨𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) | 𝙐𝙎𝙀𝙍
├❏${username}
├❏───ׂ─ׂ─ׂ─ׂ── 
├❏✨ 𝙀𝙉𝙇𝘼𝘾𝙀 | 𝙇𝙄𝙉𝙆
├❏https://instagram.com/${username.replace(/^@/, '')}*
├❏───ׂ─ׂ─ׂ─ׂ──
├❏🔖 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙍𝙀𝙎 | 𝙁𝙊𝙇𝙇𝙊𝙒𝙀𝙍𝙎 
├❏${followersH}
├❏───ׂ─ׂ─ׂ─ׂ── 
├❏🍃 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙎 | 𝙁𝙊𝙇𝙇𝙊𝙒𝙄𝙉𝙂
├❏${followingH}
├❏───ׂ─ׂ─ׂ─ׂ── 
├❏❤️ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘾𝙄𝙊𝙉𝙀𝙎 | 𝙋𝙊𝙎𝙏𝙎
├❏${postsH}*
├❏───ׂ─ׂ─ׂ─ׂ── 
├❏👩‍💻 𝘽𝙄𝙊𝙂𝙍𝘼𝙁Í𝘼 | 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉
├❏${description}
└────ׂ─ׂ─ׂ─ׂ───`.trim()) 
  
  let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎️', '/estado']
], m,)  
  
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.exp = 80
export default handler

