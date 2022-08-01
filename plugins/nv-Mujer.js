import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Mujer.mp3'
conn.sendFile(m.chat, vn, 'Mujer.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Mujer|mujer/
handler.command = new RegExp
export default handler

