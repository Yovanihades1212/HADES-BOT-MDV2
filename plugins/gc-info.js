let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `
┌「𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎」
├❏ 𝙸𝙳𝙴𝙽𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
├❏ ${groupMetadata.id}
├❏───ׂ─ׂ─ׂ─ׂ 
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴:* 
├❏ ${groupMetadata.subject}
├❏───ׂ─ׂ─ׂ─ׂ 
├❏ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* 
├❏ ${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}
├❏───ׂ─ׂ─ׂ─ׂ 
├❏ 𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴𝚂:*
├❏ ${participants.length} Participantes
├❏───ׂ─ׂ─ׂ─ׂ 
├❏ 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
├❏ @${owner.split('@')[0]}
├❏ 
├❏ 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:*
├❏ ${listAdmin}
├❏───ׂ─ׂ─ׂ─ׂ
├❏ 𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝚂:*
├❏ —◉ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴: ${welcome ? '✅' : '❌'}
├❏ —◉ 𝙳𝙴𝚃𝙴𝙲𝚃: ${detect ? '✅' : '❌'} 
├❏ —◉ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺: ${antiLink ? '✅' : '❌'} 
├❏ —◉ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝟸: ${antiLink2 ? '✅' : '❌'} 
├❏ —◉ 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈: ${modohorny ? '✅' : '❌'} 
├❏ —◉ 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁: ${autosticker ? '✅' : '❌'} 
├❏ —◉ 𝙰𝚄𝙳𝙸𝙾𝚂: ${audios ? '✅' : '❌'} 
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.limit = 1
handler.group = true
export default handler
