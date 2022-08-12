let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌「𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚 gracias por 🥳solicitar la instalación 🤖 del bot gracias por tu preferencia te dejaré los requisitos para 👩‍💻instalar el bot cualquier duda puedes contactarme a mi número personal en caso de si  necesitas ayuda para instalar 🤴
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
├❏http://wa.me/5212411719888
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢 :」
├❏https://youtu.be/HoxZuQokeMM
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇」
├❏pkg update && pkg upgrade
├❏pkg install git -y
├❏pkg install nodejs -y
├❏pkg install ffmpeg -y
├❏pkg install imagemagick -y
├❏termux-setup-storage
├❏git clone https://github.com/Yovanihades1212/HADES-BOT-MDV2.git
├❏cd HADES-BOT-MDV2
├❏npm install
├❏pkg install yarn
├❏npm update
├❏yarn
├❏npm install
├❏npm start
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 」─
├❏Si el termux se cierra para volver activar escribe:
├❏cd HADES-BOT-MDV2 
├❏npm start 
├❏───ׂ─ׂ─ׂ─ׂ─」
├❏ Para obtener nuevamente el 
├❏codigo QR, escribe en el termux:
├❏cd HADES-BOT-MDV2 
├❏rm -rf session.data.json
├❏npm start 
├❏───ׂ─ׂ─ׂ─ׂ─」
├❏Cada vez que realices una modificacion en el
├❏repositorio del Bot (tu GitHub), puedes usar 
├❏el comando #actualizar para que se actualicen los datos
├❏───ׂ─ׂ─ׂ─ׂ─」
├❏Aconsejable maximo 30 grupos, despues 
├❏de esa cantidad el Bot empieza a ir 
excesivamente lento (depende del
├❏WhatsApp igual)
└────ׂ─ׂ─ׂ─ׂ───`
let buttonMessage= {
'document': { url: `http://wa.me/5212411347465` },
'mimetype': `application/${document}`,
'fileName': `𝚃𝚑𝚎 𝙷𝙰𝙳𝙴𝚂 𝙱𝙾𝚃`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/5212411347465',
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
handler.command = /^(instalarbot|instalarbot)$/i
export default handler

