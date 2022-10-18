import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/y que agarra y qué me dice.mp3'
conn.sendFile(m.chat, vn, 'y que agarra y qué me dice.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /y que agarra y qué me dice|Y que agarra y qué me dice/
handler.command = new RegExp
export default handler
