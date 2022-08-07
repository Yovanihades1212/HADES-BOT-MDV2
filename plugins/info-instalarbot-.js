import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
┌「𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚 gracias por 🥳solicitar la instalación 🤖 del bot gracias por tu preferencia te dejaré los requisitos para 👩‍💻instalar el bot cualquier duda puedes contactarme a mi número personal en caso de si  necesitas ayuda para instalar 🤴
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
├❏http://wa.me/5212411719888
└────ׂ─ׂ─ׂ─ׂ───
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
└────ׂ─ׂ─ׂ─ׂ───`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: '𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ',         
previewType: 0, thumbnail: fs.readFileSync("./src/Pre Bot Publi.png"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`}}})   
}
handler.command = /^(instalarbot)/i
handler.limit = 1
export default handler

