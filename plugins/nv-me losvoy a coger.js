import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/me-los-voy-a-coger.mp3'
conn.sendFile(m.chat, vn, 'me-los-voy-a-coger.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /me los voy a coger|Me los voy a coger/
handler.command = new RegExp
export default handler

