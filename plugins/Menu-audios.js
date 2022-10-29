import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/ja.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `┌「⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${taguser}💖✨ 
├❏ 📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
├❏ 🔋𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
├❏ 📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
└────ׂ─ׂ─ׂ─ׂ───
┌──「🎧𝐀𝐔𝐃𝐈𝐎𝐒」─
╟🎧Noche de paz
╟🎻Miau
╟🎺Buenos dias
╟🎸La cumbia del tilín
╟🎷buenas noches
╟🎹No pedí tu opinión
╟🎤Senpai
╟🥁esto va a ser épico
╟🎧insulta
╟🎻Audio hentai
╟🎺Tiene la cara
╟🎸Fiesta del admin
╟🎷tengo
╟🎹tranquilo
╟🎤Viernes
╟🥁Chica lgante
╟🎧No soy pati
╟🎻Baneado
╟🎺Bien pensado woody
╟🎸Homero chino
╟🎷El pepe
╟🎹A nadie le importa
╟🎤Sexo
╟🥁nadie te pregunto
╟🎧Vete a la vrg
╟🎻Hola
╟🎺Oye Bot te amo
╟🎸Te amo
╟🎷Yamete
╟🎹y que agarra y qué me dice
╟🎤Te diagnostico con gay
╟🥁Eres fuerteSu nivel de pendejo
╟🎧Que pasa
╟🎻cállese señora
╟🎺Quien es tu sempai botsito 7w7
╟🎸BiTCH
╟🎷Bañate
╟🎹cuándo se muera
╟🎤Que rico
╟🥁Feliz jueves
╟🎧Lo puede todo
╟🎻Gemime
╟🎺Vivan los novios
╟🎸sigues con vida
╟🎷Marica quien
╟🎹Es puto
╟🎤Onichan
╟🥁Feliz cumpleaños
╟🎧O omosa
╟🎻Atencion grupo
╟🎺Oh me vengo
╟🎸Que linda noche
╟🎷Te siento mía
╟🎹hentai2
╟🎤detengase admin
╟🥁Canta2
╟🎧Murio el grupo
╟🎻Siuuu
╟🎺Se enojan
╟🎸Al unico
╟🎷Se van a dormir
╟🎹Hare mi rutina
╟🎤Te sabes
╟🥁:c
╟🎧Hay el amor
╟🎻Orale
╟🎺Se ríe
╟🎸Que es eso
╟🎷anana
╟🎹No trabajo
╟🎤asen
╟🥁confeti
╟🎧flash
╟🎻Una pregunta
╟🎺pinches bot
╟🎸mmm
╟🎷Oxxo
╟🎹Soy nuevo
╟🎤La voz de hombre
╟🥁Picachu
╟🎧Pokemon
╟🎻ñaña
╟🎺yutki
╟🎸Ya basta jovenes
╟🎷Verdad que te engañe
╟🎹Calla maldita puta
╟🎤YoShi
╟🥁Me los voy a coger
╟🎧manco
╟🎻Me voy
╟🎺Música desamor
╟🎸mitamita
╟🎷tuturu
╟🎹woau
╟🎤unga
╟🥁umai
╟🎧tututu
╟🎻uma
╟🎺uff
╟🎸Tara
╟🎷uchinchi
╟🎹talcho
╟🎤sss
╟🥁a
╟🎧Triste enojada toy
╟🎻Bot maricon
╟🎺Bot puto
╟🎸estúpido
╟🎷Un pato
╟🎹Nyanpasu
╟🎤El amor no existe
╟🥁Es todo lo que tiene que decir
╟🎧Muere por los humanos
╟🎻La biblia
╟🎺Otaku
╟🎸Hace frío
╟🎷Pikachu
╟🎹Niconi
╟🎤Mimir
╟🥁Beastars
╟🎧Manos
╟🎻Facha
╟🎺Sexual
╟🎸Mujer
╟🎷Cringe
╟🎹Konede
╟🎤Gambare
╟🥁Pack
╟🎧Temon
╟🎻Primo
╟🎺jaja quiero
╟🎸Kya
╟🎷rawr
╟🎹El mundo
╟🎤Nos vale
╟🥁Bot gemine
╟🎧Pespes
╟🎻Ora
╟🎺Hades bot
╟🎸Tori
╟🎷Oxxo
╟🎹Mi bot es le mejor
╟🎤Bunny
╟🥁cancion hades2
╟🎧cancion de hades
╟🎻Hades es un Dios
╟🎺llamando a seguridad_
╟🎸Atena_
╟🎷Que tonta eres_
╟🎹Bts      
╟🎤ara ara
╟🥁La bebecita
╟🎧Lol
╟🎻Feliz navidad
╟🎺Risa diabolica
╟🎸Te pasas
╟🎷Darling
╟🎹Elmo
╟🎤La lechuza
╟🥁ñi
╟🎧Éxtasis
╟🎻no te acerques
╟🎺Por que
╟🎸La mamare
╟🎷Lala
╟🎹Ya paso
╟🎤UwU
╟🥁bebito fiu fiu
╟🎧Gracias bot
└────ׂ─ׂ─ׂ─ׂ───`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: '𝐌𝐄𝐍𝐔' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: '𝐄𝐒𝐓𝐀𝐃𝐎' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'ja.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio|keyaudio|keyaudios)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
