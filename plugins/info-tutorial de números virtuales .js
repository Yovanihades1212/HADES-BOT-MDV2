let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `┌「𝚗ú𝚖𝚎𝚛𝚘𝚜 𝚟𝚒𝚛𝚝𝚞𝚊𝚕𝚎𝚜」
├❏https://youtu.be/1gkrimnxKBg
├❏๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚😀 este este tutorial de explica cómo tener cómo crear números virtuales 100% funcionable 🦈
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
├❏http://wa.me/5212411347465
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙻𝙸𝙲𝙰𝙲𝙸Ó𝙽
」
├❏la aplicación se encuentra play store se llama : Textnow 
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚁𝙴𝙲𝙾𝙼𝙴𝙽𝙳𝙰𝙳𝙾 」
├❏https://www.mediafire.com/file/o80pni1rfi0n6zz/ʙᴜsͨɪͧɴᷨᴇͣs๋ᷡsͦ_V6_PRIMARIO.apk/file
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚁𝙴𝙲𝙾𝙼𝙴𝙽𝙳𝙰𝙳𝙾 」
├❏https://www.mediafire.com/file/4kkiwpxvciabjf5/ʙᴜsͨɪͧɴᷨᴇͣs๋ᷡsͦ_V6_SECUNDARIO.apk/file
└────ׂ─ׂ─ׂ─ׂ───`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `🍀⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍✨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['creatunumero','creatunumero']
export default handler

