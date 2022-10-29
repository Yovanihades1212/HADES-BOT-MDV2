import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏs ʜᴀ sɪᴅᴏ ʙᴀɴᴇᴀᴅᴏs sɪ ᴅᴇsᴇᴀ ᴀᴄᴛɪᴠᴀʀʟᴏs ᴛɪᴇɴᴇ ǫᴜᴇ sᴇʀ ᴜɴ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ /ᴇɴᴀʙʟᴇ ᴍᴏᴅᴏʜᴏʀɴʏ*'
if (!args[0]) throw `*[❗]ɪɴɢʀᴇsᴀ ᴜɴ ᴇɴʟᴀᴄᴇ ᴠᴀʟɪᴅᴏ xɴxx, ᴇᴊᴇᴍᴘʟᴏ:* ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await conn.reply(m.chat, '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗]ʟᴏ sᴇɴᴛɪᴍᴏs ʜᴀ sᴜʀɢɪᴅᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴛᴇɴᴛᴀ ᴅᴇ ɴᴜᴇᴠᴏ ʏ  ᴄᴏᴍᴘʀᴜᴇʙᴀ ǫᴜᴇ ᴇʟ ᴇɴʟᴀᴄᴇ ǫᴜᴇ sᴇᴀ sɪᴍɪʟᴀʀ ᴀ :*\n*◉ https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*')
}}
handler.command = /^(xnxxdl)$/i
export default handler
