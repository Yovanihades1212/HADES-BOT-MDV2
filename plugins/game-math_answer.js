global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, `${mg}𝙔𝘼 𝙎𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝙊 𝙀𝙎𝙏𝘼 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼\n𝙏𝙃𝙄𝙎 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙃𝘼𝙎 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘽𝙀𝙀𝙉 𝘼𝙉𝙎𝙒𝙀𝙍𝙀𝘿`, wm, null, [['𝑱𝑼𝑮𝑨𝑹 𝑫𝑬 𝑵𝑼𝑬𝑽𝑶', `/math`], ['️𝐌𝐄𝐍𝐔', '/menu']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
conn.sendButton(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏ 💖𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼
├❏🍃𝙌𝙐𝙀 𝙋𝙍𝙊 😎
├❏───ׂ─ׂ─ׂ─ׂ──
├❏♦️𝙂𝘼𝙉𝘼𝙎𝙏𝙀 | 𝙒𝙊𝙉
├❏🏆 ${math.bonus} 𝙓𝙋
├❏───ׂ─ׂ─ׂ─ׂ──
├❏𝘽𝙊𝙉𝙊 | 𝘽𝙊𝙉𝙐𝙎
├❏🎁 $500 𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃
├❏───ׂ─ׂ─ׂ─ׂ──
├❏🥀𝙎𝙐 𝘿𝙄𝙉𝙀𝙍𝙊 | 𝙔𝙊𝙐𝙍 𝙈𝙊𝙉𝙀𝙔
├❏💵 $${gatacoins} 𝐇𝐀𝐃𝐄𝐒
└────ׂ─ׂ─ׂ─ׂ───
`, wm, null, [['𝑱𝑼𝑮𝑨𝑹 𝑫𝑬 𝑵𝑼𝑬𝑽𝑶', `/math ${math.mode}`], ['𝐌𝐄𝐍𝐔', `.menu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘼𝘾𝘼𝘽𝘼𝙍𝙊𝙉 𝙏𝙐𝙎 𝙊𝙋𝙊𝙍𝙏𝙐𝙉𝙄𝘿𝘼𝘿𝙀𝙎\n𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝙀𝙎 *${math.result}*\n\n𝙔𝙊𝙐𝙍 𝙏𝙐𝙍𝙉𝙎 𝘼𝙍𝙀 𝙊𝙑𝙀𝙍\n𝙏𝙃𝙀 𝘼𝙉𝙎𝙒𝙀𝙍 𝙄𝙎 *${math.result}*`, wm, null, [['𝑱𝑼𝑮𝑨𝑹 𝑫𝑬 𝑵𝑼𝑬𝑽𝑶', `/math ${math.mode}`], ['𝐌𝐄𝐍𝐔', `.Menu`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `${fg}𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼!!\n𝙏𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 *${global.math[id][2]}* 𝙊𝙋𝙊𝙍𝙏𝙐𝙉𝙄𝘿𝘼𝘿𝙀𝙎 \n\n𝙒𝙍𝙊𝙉𝙂 𝘼𝙉𝙎𝙒𝙀𝙍!!\n𝙄𝙏 𝙁𝙄𝙏𝙎 𝙔𝙊𝙐 *${global.math[id][2]}* 𝙏𝙐𝙍𝙉𝙎 🤯`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
handler.limit = 1
export default handler
