import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Triste enojada toy.mp3'
conn.sendFile(m.chat, vn, 'Triste enojada toy.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Triste enojada toy|triste enojada/
handler.command = new RegExp
export default handler

