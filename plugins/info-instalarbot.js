import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯π gracias por π₯³solicitar la instalaciΓ³n π€ del bor gracias por tu preferencia te dejarΓ© los requisitos para π©βπ»instalar el bot cualquier duda puedes contactarme a mi nΓΊmero personal en caso de si  necesitas ayuda para instalar π€΄
βββββΧβΧβΧβΧβββ
βγπ½ππΌπ΄ππΎ π³π΄π πΌπΈ π²ππ΄π°π³πΎπγ
ββhttp://wa.me/5212411719888
βββββΧβΧβΧβΧβββ
βγππ·π°πππ°πΏπΏ ππ΄π²πΎπΌπ΄π½π³π°π³πΎ γ
ββhttps://www.mediafire.com/file/3lzk2l83di64tc2/%E2%98%BB%EF%B8%8F+%F0%9D%94%B8%F0%9D%95%93%F0%9D%95%A6+%F0%9D%94%B9%F0%9D%95%83%F0%9D%94%B8%E2%84%82%F0%9D%95%82+%E2%98%BB%EF%B8%8F.apk/file?dkey=ihcz5i82z0m431
βββββΧβΧβΧβΧβββ
βγππ΄ππΌππγ
ββhttps://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
βββββΧβΧβΧβΧβββ
βγππππππππ: ππππ’ :γ
ββhttps://youtu.be/HoxZuQokeMM
βββββΧβΧβΧβΧβββ
βγπ²πΎπΌπ°π½π³πΎπ ππ΄ππΌππγ
ββpkg update && pkg upgrade
ββpkg install git -y
ββpkg install nodejs -y
ββpkg install ffmpeg -y
ββpkg install imagemagick -y
ββtermux-setup-storage
ββgit clone https://github.com/Yovanihades1212/HADES-BOT-MDV2.git
ββcd HADES-BOT-MDV2
ββnpm install
ββpkg install yarn
ββnpm update
ββyarn
ββnpm start
βββββΧβΧβΧβΧβββ
βγπΈπ½π΅πΎππΌπ°π²πΈπΎπ½ γβ
ββSi el termux se cierra para volver activar escribe:
ββcd HADES-BOT-MDV2 
ββnpm start 
βββββΧβΧβΧβΧβγ
ββ Para obtener nuevamente el 
ββcodigo QR, escribe en el termux:
ββcd HADES-BOT-MDV2 
ββrm -rf session.data.json
ββnpm start 
βββββΧβΧβΧβΧβγ
ββCada vez que realices una modificacion en el
ββrepositorio del Bot (tu GitHub), puedes usar 
ββel comando #actualizar para que se actualicen los datos
βββββΧβΧβΧβΧβγ
ββAconsejable maximo 30 grupos, despues 
ββde esa cantidad el Bot empieza a ir 
excesivamente lento (depende del
ββWhatsApp igual)
βββββΧβΧβΧβΧβββ`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - πΈπ½πππ°π»π°ππ±πΎπ',
body: 'πΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°',         
previewType: 0, thumbnail: fs.readFileSync("./src/Pre Bot Publi.png"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
