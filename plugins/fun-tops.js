import util from 'util'
import path from 'path'

let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, usedPrefix, conn }) {
   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `*๐TOP 10 GAYS/LESBIANAS DEL GRUPO๐*
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
//m.reply(top, null, {
conn.sendHydrated(m.chat, top, wm, null, md, 'โออกโฃ๐๐๐๐๐_๐๐๐_๐๐โออกโฃ', null, null, [
['๐๐๐๐ ๐๐๐๐ฎ', `${usedPrefix + command}`],
['๐๐๐๐', '/menu']
], m, null, {
contextInfo: {
mentionedJid: [a, b, c, d, e, f, g, h, i, j]
}})

conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}
    
if (command == 'topotakus') {
let vn = './media/otaku.mp3'
let top = `*๐ธ TOP 10 OTAKUS DEL GRUPO ๐ธ*
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
//m.reply(top, null, {
conn.sendHydrated(m.chat, top, wm, null, md, 'โออกโฃ๐๐๐๐๐_๐๐๐_๐๐โออกโฃ', null, null, [
['๐๐๐๐ ๐๐๐๐ฎ', `${usedPrefix + command}`],
['๏ธ๐๐๐๐', '/menu']
], m, null, {
contextInfo: {
mentionedJid: [a, b, c, d, e, f, g, h, i, j]
}})
conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}    
}
handler.help = handler.command = ['topgays','topotakus']
handler.tags = ['games']
handler.group = true
export default handler  
