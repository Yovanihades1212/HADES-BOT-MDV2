let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─\n├❏${pickRandom(['Que pro 😎 has minado','🌟✨ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes','Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}\n└────ׂ─ׂ─ׂ─ׂ───`
let pp = 'https://i.imgur.com/fj9VfPz.mp4'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += d * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─\n├❏ 𝙷𝙰𝚂 𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾  𝙴𝚂𝙿𝙴𝚁𝙰 𝙴𝚂𝚃𝙴 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙰𝚁𝙰\n├❏ ${msToTime(time - new Date())} 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙼𝙸𝚁𝙰𝚁 ⛏️\n└────ׂ─ׂ─ׂ─ׂ───\n`

conn.sendHydrated(m.chat, `${minar} ${d} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂`, wm, pp, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['️⚡𝐌𝐄𝐍𝐔', `.menu`],
['🌠𝐌𝐈𝐍𝐀𝐑 𝐄𝐗𝐏', `.minar2`],
['🌌𝐌𝐈𝐍𝐀𝐑 𝐂𝐎𝐈𝐍𝐒️', `.minar3`]
], m,)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  


//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 6) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
