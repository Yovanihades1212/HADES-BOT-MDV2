import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/una-pregunta.mp3'
conn.sendFile(m.chat, vn, 'una-pregunta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /una pregunta|Una pregunta/
handler.command = new RegExp
export default handler

