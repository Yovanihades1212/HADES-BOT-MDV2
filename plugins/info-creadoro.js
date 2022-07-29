let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩
├❏Wa.me/5212411347467 (BOT)
├❏Wa.me/5212411261883 (BOT) 
├❏Wa.me/5212411719888 (CREADOR)
├❏Wa.me/5212411347465 (CREADOR)
└────ׂ─ׂ─ׂ─ׂ───
ㅤ`
let buttonMessage= {
'document': { url: `http://wa.me/5212411261883` },
'mimetype': `application/${document}`,
'fileName': `𝚃𝚑𝚎 𝙷𝙰𝙳𝙴𝚂 𝙱𝙾𝚃`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/5212411261883',
'mediaType': 2,
'previewType': 'pdf',
'title': 'http://wa.me/5212411347465⁩',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙾𝙵𝙲 𝚈𝙾𝚅𝙰𝙽𝙸'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(contacto|owner|creator|propietario|dueña|dueño|propietaria|dueño|creadora|creador)$/i
export default handler

