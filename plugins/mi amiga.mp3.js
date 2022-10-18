import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/mi amiga.mp3'
conn.sendFile(m.chat, vn, 'Miau.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Estoy con mi amiga|es mi amiga|es una amiga/
handler.command = new RegExp

export default handler
