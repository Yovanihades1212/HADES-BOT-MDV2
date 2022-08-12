let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
┌「𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚😀 este este tutorial de explica cómo tener un bot activo 24/7👌 en Boxmune🏅 Si te ha gustado el video No olvides suscribirte dejar tu like🦈
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢 :」
├❏https://youtu.be/Gn-ESCcdFGw
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
├❏http://wa.me/5212411347465
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚁𝙴𝙲𝙾𝙼𝙴𝙽𝙳𝙰𝙳𝙾 」
├❏https://www.mediafire.com/file/o80pni1rfi0n6zz/ʙᴜsͨɪͧɴᷨᴇͣs๋ᷡsͦ_V6_PRIMARIO.apk/file
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚁𝙴𝙲𝙾𝙼𝙴𝙽𝙳𝙰𝙳𝙾 」
├❏https://www.mediafire.com/file/4kkiwpxvciabjf5/ʙᴜsͨɪͧɴᷨᴇͣs๋ᷡsͦ_V6_SECUNDARIO.apk/file
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙿𝙰𝙶𝙸𝙽𝙰 𝙳𝙴 𝙱𝙾𝚇𝙼𝚄𝙽𝙴𝚆𝙾𝚁𝙻𝙳」
├❏https://dash.boxmineworld.com/register?ref=Mb0BN5ny
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙶𝙸𝚃 𝙲𝙻𝙾𝙽𝙴」
├❏git clone https://github.com/Yovanihades1212/HADES-BOT-MDV2.git
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝙴𝚁𝙼𝚄𝚇」
├❏https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
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
handler.command = /^(instalarbot2|instalarbot2)$/i
export default handler

