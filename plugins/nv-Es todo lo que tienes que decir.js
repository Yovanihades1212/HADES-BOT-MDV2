import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Es todo lo que tienes que decir.mp3'
conn.sendFile(m.chat, vn, 'Es todo lo que tienes que decir.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Es todo lo que tienes que decir|es todo lo que tienes que decir/
handler.command = new RegExp
export default handler

