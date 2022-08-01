import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/No pedí tu opinión.mp3'
conn.sendFile(m.chat, vn, 'No pedí tu opinión.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /No pedí tu opinión|No pedí tu opinion/
handler.command = new RegExp
export default handler
