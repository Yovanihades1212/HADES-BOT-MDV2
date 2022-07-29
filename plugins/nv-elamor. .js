import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/El amor.mp3'
conn.sendFile(m.chat, vn, 'El amor.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /hay el amor|Hay el amor/
handler.command = new RegExp
export default handler

