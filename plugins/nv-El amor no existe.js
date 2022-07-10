import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/El amor no existe.mp3'
conn.sendFile(m.chat, vn, 'El amor no existe.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /El amor no existe|el amor no existe/
handler.command = new RegExp
export default handler

