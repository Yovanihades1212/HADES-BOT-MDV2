global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`❕⊱𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉⊱❕\n\n✨ 𝙋𝙐𝙀𝘿𝙀 𝙐𝙎𝘼𝙍 𝙇𝙊𝙎 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙇𝘼 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿\n✨ 

𝙉𝙄𝙑𝙀𝙇 𝘿𝙀 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿 | 𝘿𝙄𝙁𝙁𝙄𝘾𝙐𝙇𝙏𝙔 
${Object.keys(modes).join('  |  ')}

𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
${usedPrefix + command} noob
${usedPrefix + command} impossible2
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['𝐅𝐀𝐂𝐈𝐋 𝐄𝐀𝐒𝐘 𝐄𝐍𝐃', `${usedPrefix + command} easy`], 
['𝐃𝐈𝐅𝐈𝐂𝐈𝐋 𝐃𝐈𝐅𝐅𝐈𝐂𝐔𝐋𝐓', `${usedPrefix + command} hard`], 
['𝐄𝐗𝐓𝐑𝐄𝐌𝐎 𝐄𝐗𝐓𝐑𝐄𝐌𝐄 ', `${usedPrefix + command} extreme`]], m) 
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['𝐅𝐀𝐂𝐈𝐋 𝐄𝐀𝐒𝐘 𝐄𝐍𝐃', `${usedPrefix + command} easy`], 
['𝐃𝐈𝐅𝐈𝐂𝐈𝐋 𝐃𝐈𝐅𝐅𝐈𝐂𝐔𝐋𝐓', `${usedPrefix + command} hard`], 
['𝐄𝐗𝐓𝐑𝐄𝐌𝐎 𝐄𝐗𝐓𝐑𝐄𝐌𝐄 ', `${usedPrefix + command} extreme`]], m) 
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `${ag} 𝙃𝘼𝙔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼𝙎 𝙎𝙄𝙉 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝙀𝙉 𝙀𝙇 𝘾𝙃𝘼𝙏!!\n\n𝙏𝙃𝙀𝙍𝙀 𝘼𝙍𝙀 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉𝙎 𝙒𝙄𝙏𝙃𝙊𝙐𝙏 𝘼𝙉𝙎𝙒𝙀𝙍𝙄𝙉𝙂 𝙄𝙉 𝙏𝙃𝙀 𝘾𝙃𝘼𝙏!!`, global.math[id][0])
//let ii = global.db.data.users[m.sender].limit += 10 math.dia
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚 *${math.str} = ?*
├❏𝙏𝙞𝙚𝙢𝙥𝙤 | 𝙏𝙞𝙢𝙚
├❏🧭 *${(math.time / 1000).toFixed(0)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
├❏𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖 𝙚𝙨𝙩𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙮 𝙂𝙖𝙣𝙖 
├❏🏆 *${math.bonus} 𝙓𝙋*
└────ׂ─ׂ─ׂ─ׂ───
`, m),
math, 4,
  
await conn.sendHydrated(m.chat, `⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️`, `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝘼𝙍𝙍𝙄𝘽𝘼 𝘾𝙊𝙉 𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼\n\n𝘼𝙉𝙎𝙒𝙀𝙍 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝘼𝘽𝙊𝙑𝙀 𝙏𝙊 𝙆𝙉𝙊𝙒 𝙔𝙊𝙐𝙍 𝘼𝙉𝙎𝙒𝙀𝙍`, null, md, '𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃', null, null, [ 
['𝐓𝐎𝐏𝐒', `${usedPrefix}top`],
['𝐌𝐄𝐍𝐔́', `${usedPrefix}menu`]
], m), math, 4,
  
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `${ag}𝙎𝙀 𝘼𝘾𝘼𝘽𝙊 𝙀𝙇 𝙏𝙄𝙀𝙈𝙋𝙊!!\n𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝙀𝙎 *${math.result}*\n\n𝙏𝙄𝙈𝙀 𝙄𝙎 𝙐𝙋!!\n𝙏𝙃𝙀 𝘼𝙉𝙎𝙒𝙀𝙍 𝙄𝙎 *${math.result}*`, wm, null, [['𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑 𝐃𝐄 𝐍𝐔𝐄𝐕𝐎', `${usedPrefix + command} ${math.mode}`], ['🎮𝐆𝐀𝐌𝐄', `/juegosdelgrupo`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
handler.limit = 1
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 30], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 50],
medium: [-40, 40, -20, 20, '*/+-', 40000, 200],
hard: [-100, 100, -70, 70, '*/+-', 60000, 500],
extreme: [-999999, 999999, -999999, 999999, '*/', 25000, 2500],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 20000, 5500],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 15000, 8500]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
