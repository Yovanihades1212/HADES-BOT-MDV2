let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⊷ 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 ⊶
├❏ ▢ *𝙽𝚘𝚖𝚋𝚛𝚎:* ${name}
├❏ ▢ *𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜:* ${global.db.data.users[who].limit}💎
└──────────────`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
