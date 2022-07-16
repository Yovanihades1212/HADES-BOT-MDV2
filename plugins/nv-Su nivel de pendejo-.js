import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/nivel.mp3'
conn.sendFile(m.chat, vn, 'nivel.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Su nivel de pendejo|su nivel de pendejo/
handler.command = new RegExp
export default handler
