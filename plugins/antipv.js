export async function before(m, { isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner && !isROwner) {
       await m.reply(`Hola *@${m.sender.split`@`[0]}*,🌱𝙷𝚘𝚕𝚊 𝚃𝚎 𝚒𝚗𝚏𝚘𝚛𝚖𝚘 𝚚𝚞é 𝚎𝚜𝚝á 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘 𝚎𝚕 𝚌𝚑𝚊𝚝 𝚙𝚛𝚒𝚟𝚊𝚍𝚘 𝚎𝚕 𝚌𝚑𝚊𝚝 𝚙𝚛𝚒𝚟𝚊𝚍𝚘 𝚍𝚎𝚕 𝚋𝚘𝚝 𝙷𝚊𝚍𝚎𝚜💎`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}