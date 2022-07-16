import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let res = await fetch("https://api.zacros.my.id/randomtext/fml")
let json = await res.json()
let { result } = json
conn.reply(m.chat, `*┏━━━━━━━━━━━━━━━━┓*\n*┠❧  ${result}*\n*┗━━━━━━━━━━━━━━━━┚*`, m)}
handler.command = /^(frasetest)$/i
export default handler