import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/No soy real.mp3'
conn.sendFile(m.chat, vn, 'No soy real.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Oye Bot te amo|oye bot te amo/
handler.command = new RegExp
export default handler
