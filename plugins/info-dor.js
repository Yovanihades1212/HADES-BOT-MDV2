
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮
╟◦➛📔ᩭ✎si deseas 🤝apoyarme mejor ayúdame y apóyame en mis cuentas oficiales de 🌆YouTube y en 👥facebook y podrías regalarme una estrella en mi cuenta de git📈
╟◦➛🍀ᩭ✎𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁
╟◦➛📚ᩭ✎http://wa.me/5212411719888 
╟◦➛📔ᩭ✎𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢
╟◦➛🍀ᩭ✎https://youtu.be/6FYKkeBCTdw
╟◦➛☃️ᩭ✎𝙶𝙸𝚃 𝙲𝙻𝙾𝙽𝙴
╟◦➛📚ᩭ✎https://github.com/Yovanihades1212/MIKU_BOT.git
╟◦➛🌱ᩭ✎𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 
╟◦➛🌴ᩭ✎https://www.facebook.com/groups/987464505464904
╟◦➛📔ᩭ✎voy a agradecer ☘️mucho su apoyo 📚
╟◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╯`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `🍀𝐓𝐇𝐄-𝐇𝐀𝐃𝐄𝐒-𝐁𝐎𝐓-𝐌𝐃✨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Yovanihades1212/MIKU_BOT.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/6FYKkeBCTdw' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'ᴍᴇɴᴜ'}, type: 1}, 
{buttonId: `${usedPrefix}sc`, buttonText: {displayText: '𝙶𝙸𝚃𝙷𝚄𝙱'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^doo$/i

export default handler