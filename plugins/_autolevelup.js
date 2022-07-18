import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
┌─「🤗𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒🥳」─
├❏𝐇𝐀𝐙 𝐒𝐔𝐁𝐈𝐃𝐎 𝐃𝐄 𝐍𝐈𝐕𝐄𝐋 
├❏ [${before}] → [${user.level}]
├❏𝙲𝚞𝚊𝚗𝚝𝚘 𝚖á𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚝ú𝚎𝚜 𝚌𝚘𝚗 𝚎𝚕 𝚋𝚘𝚝, 𝚖𝚊𝚢𝚘𝚛 𝚜𝚎𝚛á 𝚝𝚞 𝚗𝚒𝚟𝚎𝚕
𝙴𝚜𝚌𝚛𝚒𝚋𝚎 .𝚗𝚒𝚟𝚎𝚕 𝚙𝚊𝚛𝚊 𝚟𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚛
└────ׂ─ׂ─ׂ─ׂ───`.trim())
    }
}
export const disabled = false
