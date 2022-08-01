import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = await axios("https://thumbnail.komiku.id/wp-content/uploads/2020/08/Komik-Naruto.jpg?resize=450,235&quality=60")
let json = res.data
let mystic = json.url
conn.sendButton(m.chat, `_${command}_`, author, mystic, [['◀️𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴▶️', `/${command}`]], m)
}
handler.help = ['komiku','komiku']
handler.tags = ['internet']
handler.command = /^(komiku)$/i
handler.limit = 1
export default handler
