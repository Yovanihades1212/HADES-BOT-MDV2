import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Hades es un Dios.mp3'
conn.sendFile(m.chat, vn, 'Hades es un Dios.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Hades es un Dios|hades es un Dios/
handler.command = new RegExp
export default handler

