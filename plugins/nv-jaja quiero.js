import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/jaja quiero.mp3'
conn.sendFile(m.chat, vn, 'jaja quiero.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /jaja quiero|Jaja quiero/
handler.command = new RegExp
export default handler

