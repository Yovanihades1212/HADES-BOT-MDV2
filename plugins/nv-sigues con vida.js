import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/sigues con vida.mp3'
conn.sendFile(m.chat, vn, 'sigues con vida.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Sigues con vida|sigues con vida/
handler.command = new RegExp
export default handler

