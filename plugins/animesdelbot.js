import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/ja.mp3'
let pp = 'https://i.imgur.com/lkch77g.jpeg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let str = `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${name}💖✨ 
├❏ 📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
├❏ 🔋𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
├❏ 📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
└────ׂ─ׂ─ׂ─ׂ───
┌──「⛩️𝐀𝐍𝐈𝐌𝐄𝐒」─
├❏🕋${usedPrefix}hades
├❏🎎${usedPrefix}cristianoronaldo
├❏🌃${usedPrefix}messi
├❏💒${usedPrefix}meme
├❏⛪${usedPrefix}itzy
├❏🏰${usedPrefix}blackpink
├❏🕌${usedPrefix}kpop <blackpink / exo / bts
├❏🎑${usedPrefix}lolivid
├❏⛩️${usedPrefix}loli
├❏🎎${usedPrefix}navidad
├❏🌃${usedPrefix}ppcouple
├❏💒${usedPrefix}neko
├❏⛪${usedPrefix}waifu
├❏🏰${usedPrefix}akira
├❏🕌${usedPrefix}akiyama
├❏🎑${usedPrefix}anna
├❏⛩️${usedPrefix}asuna
├❏🎎${usedPrefix}ayuzawa
├❏🌃${usedPrefix}boruto
├❏💒${usedPrefix}chiho
├❏⛪${usedPrefix}chitoge
├❏🏰${usedPrefix}deidara
├❏🕌${usedPrefix}erza
├❏🎑${usedPrefix}elaina
├❏⛩️${usedPrefix}eba
├❏🎎${usedPrefix}emilia
├❏🌃${usedPrefix}hestia
├❏💒${usedPrefix}hinata
├❏⛪${usedPrefix}inori
├❏🏰${usedPrefix}isuzu
├❏🕌${usedPrefix}itachi
├❏🎑${usedPrefix}itori
├❏⛩️${usedPrefix}kaga
├❏🎎${usedPrefix}kagura
├❏🌃${usedPrefix}kaori
├❏💒${usedPrefix}keneki
├❏⛪${usedPrefix}kotori
├❏🏰${usedPrefix}kurumi
├❏🕌${usedPrefix}madara
├❏🎑${usedPrefix}mikasa
├❏⛩️${usedPrefix}miku
├❏🎎${usedPrefix}minato
├❏🌃${usedPrefix}naruto
├❏💒${usedPrefix}nezuko
├❏⛪${usedPrefix}sagiri
├❏⛪${usedPrefix}sasuke
├❏🎑${usedPrefix}sakura
├❏🌃${usedPrefix}cosplay
├❏💒${usedPrefix}helaila
├❏⛪${usedPrefix}gawrgura
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎','/estado'],


], m,)
//await conn.sendFile(m.chat, vn, 'ja.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(animesdelbot|animesdelbot\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
