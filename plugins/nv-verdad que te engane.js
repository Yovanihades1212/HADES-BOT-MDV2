import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/verdad-que-te-engane.mp3'
conn.sendFile(m.chat, vn, 'verdad-que-te-engane.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /verdad que te engane|Verdad que te engane/
handler.command = new RegExp
export default handler

