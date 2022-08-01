import { performance } from 'perf_hooks'
let handler = async (m, { text, usedPrefix, command }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg' 
if (command == 'ppt') {
let salah = `𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇, 𝙊 𝙏𝙄𝙅𝙀𝙍𝘼\n\n𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙡𝙤𝙨 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙤 𝙩𝙖𝙢𝙗𝙞𝙚𝙣 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:\n${usedPrefix + command} 𝙥𝙞𝙚𝙙𝙧𝙖\n${usedPrefix + command} 𝙥𝙖𝙥𝙚𝙡\n${usedPrefix + command} 𝙩𝙞𝙟𝙚𝙧𝙖\n\n𝙐𝙨𝙚 𝙚𝙣 𝙢𝙞𝙣𝙪𝙨𝙘𝙪𝙡𝙖𝙨\n\n${wm}`
 
conn.sendHydrated(m.chat, wm, salah, pp, md, '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣', null, null, [
['𝙋𝙞𝙚𝙙𝙧𝙖 🥌', `${usedPrefix + command} piedra`],
['𝙋𝙖𝙥𝙚𝙡 📄', `${usedPrefix + command} papel`],
['𝙏𝙞𝙟𝙚𝙧𝙖 ✂️', `${usedPrefix + command} tijera`]
], m,)}
  
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
} 
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 2
 
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙀𝙈𝙋𝘼𝙏𝙀! 🤝
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏────ׂ─ׂ─ׂ─
├❏💸 𝘽𝙤𝙣𝙤: 
├❏$${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
} else if (text == 'papel') {
if (astro == 'piedra') {
//global.db.data.users[m.sender].uang += 1000
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 100
  
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏💰𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 25
  
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: 
├❏$${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
  
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏💰𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 75
  
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: 
├❏$${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125

conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏💰𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 90
  
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: 
├❏$${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
}
} else if (text == 'papel') {
if (astro == 'piedra') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 75

conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏💰𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 240
  
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: 
├❏$${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 300

conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏💰𝙋𝙧𝙚𝙢𝙞𝙤: $${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)   
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 210
  
conn.sendHydrated(m.chat, `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 
├❏${name} 𝙐𝙨𝙩𝙚𝙙:
├❏────ׂ─ׂ─ׂ─
├❏${text}
├❏${astro}
├❏📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: 
├❏$${[money0].getRandom()}
├❏────ׂ─ׂ─ׂ─
├❏${vs}
├❏────ׂ─ׂ─ׂ─
├❏💵 𝙎𝙪 𝘿𝙞𝙣𝙚𝙧𝙤: 
├❏$${money}
└────ׂ─ׂ─ׂ─ׂ───`, wm, null, yt, '𝙔𝙤𝙪𝙏𝙪𝙗𝙚', null, null, [
['𝐌𝐄𝐍𝐔', '/Menu'],
['️𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
], m,)
  
}
} //else {
//throw salah
} //}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
handler.limit = 1
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

