import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Elmo.mp3'
conn.sendFile(m.chat, vn, 'Elmo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Elmo|elmo/
handler.command = new RegExp
export default handler

