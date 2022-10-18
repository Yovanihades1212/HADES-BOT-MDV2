let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮
╟🍀𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃
╟✔️Hola 😉 ya hay una solución para los botones  para termux🕋
╟Tutorial🌴
╟https://youtu.be/zJSmBlNWah0
╟🍁NÚMERO DEL CREADOR
╟🤴http://wa.me/5212411347465
╟🌆𝚃𝙴𝚁𝙼𝚄𝚇」
╟🌴https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
╰╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╯

╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮
╟🍀「𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇」
╟🍀pkg update && pkg upgrade
╟🍀pkg install git -y
╟🍀pkg install nodejs -y
╟🍀pkg install ffmpeg -y
╟🍀pkg install imagemagick -y
╟🍀termux-setup-storage
╟🍀git clone https://github.com/Yovanihades1212/HADES-BOT-TERMUX.git
╟🍀cd HADES-BOT-TERMUX 
╟🍀npm install
╟🍀npm update
╟🍀npm start
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
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'ᴍᴇɴᴜ'}, type: 1}, 
{buttonId: `${usedPrefix}Estado`, buttonText: {displayText: 'ᴇsᴛᴀᴅᴏ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['termux','script']
export default handler
