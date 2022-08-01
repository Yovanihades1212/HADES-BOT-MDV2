import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Gambare.mp3'
conn.sendFile(m.chat, vn, 'Gambare.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Gambare|gambare/
handler.command = new RegExp
export default handler

