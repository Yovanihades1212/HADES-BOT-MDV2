import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/B5kR77F.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏👩‍🏫𝙽𝙾𝙼𝙱𝚁𝙴: ${username} ${registered ? '(' + name + ') ': ''}
├❏✨𝙽𝚄𝙼𝙴𝚁𝙾: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
├❏🪀𝙻𝙸𝙽𝙺: wa.me/${who.split`@`[0]}${registered ? '\n├❏𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
├❏𝙻𝙸𝙼𝙸𝚃𝙴: ${limit} 𝚄𝚂𝙾𝚂
├❏‍💻𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾: ${registered ? 'Si': 'No'}
├❏𝙿𝚁𝙴𝙼𝙸𝚄𝙼: ${prem ? 'Si' : 'No'}
├❏𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴: ${sn}
└────ׂ─ׂ─ׂ─ׂ───`
conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['𝐌𝐄𝐍𝐔', '#menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
