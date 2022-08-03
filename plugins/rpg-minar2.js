let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─\n├❏${pickRandom(['Que pro 😎 has minado','🌟✨ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes','Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}\n└────ׂ─ׂ─ׂ─ׂ───`
let pp = 'https://i.imgur.com/fj9VfPz.mp4'

let xp = Math.floor(Math.random() * 2000)
global.db.data.users[m.sender].exp = xp * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*💟 Vuelva en ${msToTime(time - new Date())} para continuar minando ⛏️*`  

conn.sendHydrated(m.chat, `*${minar} ${xp} 𝐗𝐏`, wm, pp, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['💎𝐌𝐈𝐍𝐀𝐑 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒', `.minar`],
['🌠𝐌𝐈𝐍𝐀𝐑 𝐄𝐗𝐏', `.minar2`],
['🌌𝐌𝐈𝐍𝐀𝐑 𝐂𝐎𝐈𝐍𝐒️', `.minar3`]
], m,)
global.db.data.users[m.sender].lastmiming = new Date * 1  
  

//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar2', 'mimin2', 'mine', 'minarxp', 'minarexp', 'minarexperiencia'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

