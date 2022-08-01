import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/al único.mp3'
conn.sendFile(m.chat, vn, 'al único.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /al unico|Al unico/
handler.command = new RegExp
export default handler

