import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/unga.mp3'
conn.sendFile(m.chat, vn, 'unga.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /unga|Unga/
handler.command = new RegExp
export default handler

