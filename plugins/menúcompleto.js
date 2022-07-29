import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/naa.mp3'
let pp = 'https://i.imgur.com/lkch77g.jpeg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let str = `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${name}💖✨ 
├❏ 📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}
├❏ 🔋𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
├❏ 📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
└────ׂ─ׂ─ׂ─ׂ───
┌──「📌𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓」─
├❏❗${usedPrefix}terminos y condiciones y privacidad
├❏🔺${usedPrefix}grupos
├❏🔻${usedPrefix}cuentaserikabot
├❏🔺${usedPrefix}estado
├❏🔻${usedPrefix}infobot
├❏🔺${usedPrefix}donar
├❏🔻${usedPrefix}listagrupos
├❏🔺${usedPrefix}velocidad
├❏🔻${usedPrefix}owner
├❏🔺Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├❏❗${usedPrefix}join enlace / link / url>
└────ׂ─ׂ─ׂ─ׂ───
┌──「🌱𝐑𝐏𝐆」─
├❏🪴${usedPrefix}balance
├❏💐${usedPrefix}claim
├❏🌱${usedPrefix}top
├❏🥀${usedPrefix}levelup
├❏🍃${usedPrefix}myns
├❏🪴${usedPrefix}perfil
├❏💐${usedPrefix}work
├❏🌱${usedPrefix}minar
├❏🥀${usedPrefix}buy
├❏🍃${usedPrefix}buyall
├❏🪴${usedPrefix}transfer <tipo> <cantidad> <@tag
├❏🌱${usedPrefix}verificar
├❏🌱${usedPrefix}unreg <numero de serie>
└────ׂ─ׂ─ׂ─ׂ───
┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」
├❏📑${usedPrefix}facebook <enlace / link / url
├❏🗃️${usedPrefix}instagram <enlace / link / url
├❏🗂️${usedPrefix}mediafire <enlace / link / url
├❏📰${usedPrefix}instagram <enlace / link / url
├❏📇${usedPrefix}gitclone <enlace / link / url
├❏📑${usedPrefix}tiktok <enlace / link / url
├❏🗃️${usedPrefix}ytmp3 <enlace / link / url
├❏🗂️${usedPrefix}ytmp4 <enlace / link / url
├❏📰${usedPrefix}play.1 <texto / enlace / link / url
├❏📇${usedPrefix}play.2 <texto / enlace / link / url
├❏📑${usedPrefix}play <texto
├❏🗃️${usedPrefix}spotify <texto
├❏🗂️${usedPrefix}imagen <texto
├❏📰${usedPrefix}pinteret <texto
├❏📇${usedPrefix}wallpaper <texto
├❏📑${usedPrefix}wallpaper2 <texto
├❏🗃️${usedPrefix}pptiktok <nombre de usuario
├❏🗂️${usedPrefix}igstalk <nombre de usuario
├❏📰${usedPrefix}tiktokstalk <nombre de usuario
└────ׂ─ׂ─ׂ─ׂ───
┌──「⛩️𝐀𝐍𝐈𝐌𝐄𝐒」─
├❏🕋.hades
├❏🎎${usedPrefix}cristianoronaldo
├❏🌃${usedPrefix}messi
├❏💒${usedPrefix}meme
├❏⛪${usedPrefix}itzy
├❏🏰${usedPrefix}blackpink
├❏🕌${usedPrefix}kpop <blackpink / exo / bts
├❏🎑${usedPrefix}lolivid
├❏⛩️${usedPrefix}loli
├❏🎎${usedPrefix}navidad
├❏🌃${usedPrefix}ppcouple
├❏💒${usedPrefix}neko
├❏⛪${usedPrefix}waifu
├❏🏰${usedPrefix}akira
├❏🕌${usedPrefix}akiyama
├❏🎑${usedPrefix}anna
├❏⛩️${usedPrefix}asuna
├❏🎎${usedPrefix}ayuzawa
├❏🌃${usedPrefix}boruto
├❏💒${usedPrefix}chiho
├❏⛪${usedPrefix}chitoge
├❏🏰${usedPrefix}deidara
├❏🕌${usedPrefix}erza
├❏🎑${usedPrefix}elaina
├❏⛩️${usedPrefix}eba
├❏🎎${usedPrefix}emilia
├❏🌃${usedPrefix}hestia
├❏💒${usedPrefix}hinata
├❏⛪${usedPrefix}inori
├❏🏰${usedPrefix}isuzu
├❏🕌${usedPrefix}itachi
├❏🎑${usedPrefix}itori
├❏⛩️${usedPrefix}kaga
├❏🎎${usedPrefix}kagura
├❏🌃${usedPrefix}kaori
├❏💒${usedPrefix}keneki
├❏⛪${usedPrefix}kotori
├❏🏰${usedPrefix}kurumi
├❏🕌${usedPrefix}madara
├❏🎑${usedPrefix}mikasa
├❏⛩️${usedPrefix}miku
├❏🎎${usedPrefix}minato
├❏🌃${usedPrefix}naruto
├❏💒${usedPrefix}nezuko
├❏⛪${usedPrefix}sagiri
├❏⛪${usedPrefix}sasuke
├❏🎑${usedPrefix}sakura
├❏🌃${usedPrefix}cosplay
└────ׂ─ׂ─ׂ─ׂ───
┌──「🎙️𝐏𝐄𝐍𝐆𝐔𝐁𝐀𝐇 𝐒𝐔𝐀𝐑𝐀」
├❏🎤${usedPrefix}bass
├❏🎙️${usedPrefix}blown
├❏🎧${usedPrefix}deep
├❏🎤${usedPrefix}earrape
├❏🎙️${usedPrefix}fast
├❏🎧${usedPrefix}fat
├❏🎤${usedPrefix}nightcore
├❏🎙️${usedPrefix}reverse
├❏🎧${usedPrefix}robot
├❏🎤${usedPrefix}slow
├❏🎙️${usedPrefix}smooth
├❏🎧${usedPrefix}tupai_
└────ׂ─ׂ─ׂ─ׂ───
┌──「🌌𝐒𝐓𝐈𝐂𝐊𝐄𝐑」─
├❏🪩${usedPrefix}emojimix <emoji 1>&<emoji 2
├❏🧩${usedPrefix}attp <texto
├❏🪁${usedPrefix}ttp <texto
├❏🃏${usedPrefix}pat <@tag
├❏🌃${usedPrefix}slap <@tag
├❏🏝️${usedPrefix}kiss <@tag
├❏🪅${usedPrefix}dado
├❏🧧${usedPrefix}wm <packname> <author
├❏🪩${usedPrefix}stickermarker <efecto> <responder a imagen
├❏🌃${usedPrefix}stickerfilter <efecto> <responder a imagen
└────ׂ─ׂ─ׂ─ׂ───
┌──「📑𝐐𝐔𝐎𝐓𝐄𝐒」─
├❏📌${usedPrefix}logos <efecto <texto
├❏🧧${usedPrefix}simpcard <@tag
├❏🧨${usedPrefix}hornycard <@tag
├❏📌${usedPrefix}lolice <@tag
├❏🧧${usedPrefix}ytcomment <texto
├❏🧨${usedPrefix}itssostupid
├❏📌${usedPrefix}pixelar
├❏🧨${usedPrefix}blur
└────ׂ─ׂ─ׂ─ׂ───
┌──「🎑𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒」
├❏🪅${usedPrefix}toimg <responde a un sticker
├❏🎐${usedPrefix}tomp3 *<responde a un video / nota de voz
├❏🪔${usedPrefix}toptt <responde a un video / audio
├❏🌃${usedPrefix}tovideo <responde a un audio
├❏🎍${usedPrefix}tourl <responde a un video / imagen / audio
├❏🎀${usedPrefix}tts es <texto
└────ׂ─ׂ─ׂ─ׂ───
┌──「🏢𝐆𝐑𝐎𝐔𝐏」─
├❏💎${usedPrefix}add <numero
├❏📎${usedPrefix}kick <@tag
├❏🖇️${usedPrefix}grupo <abrir / cerrar
├❏🗄️${usedPrefix}promote <@tag
├❏⛓️${usedPrefix}demote <@tag
├❏💎${usedPrefix}banchat
├❏📎${usedPrefix}unbanchat
├❏🖇️admins *<texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├❏🗄️${usedPrefix}demote <@tag
├❏⛓️${usedPrefix}infogroup
├❏💎${usedPrefix}link
├❏📎${usedPrefix}setname <texto
├❏🖇️${usedPrefix}setdesc <texto
├❏🗄️${usedPrefix}invocar <texto
├❏⛓️${usedPrefix}setwelcome <texto
├❏💎${usedPrefix}setbye <texto
├❏📎${usedPrefix}hidetag <texto
├❏🖇️${usedPrefix}simular <welcome / bye / promote / demote>
└────ׂ─ׂ─ׂ─ׂ───
┌──「🧰𝐆𝐈𝐓𝐇𝐔𝐁」─
├❏/instalarbot
└────ׂ─ׂ─ׂ─ׂ───
┌──「🖼𝐈𝐌𝐀𝐆𝐄」─
├❏🔮${usedPrefix}xnxxsearch <texto
├❏🔍${usedPrefix}animeinfo <texto
├❏🪅${usedPrefix}google <texto
├❏📌${usedPrefix}letra *<texto>*_
├❏🔬${usedPrefix}wikipedia <texto
├❏🔭${usedPrefix}ytsearch <texto
├❏🔮${usedPrefix}apkdone <texto
├❏🔍${usedPrefix}apkgoogle <texto
├❏🪅${usedPrefix}apkmody <texto
├❏🔬${usedPrefix}apkshub <texto
├❏🔭${usedPrefix}happymod <texto
├❏🔮${usedPrefix}hostapk <texto
├❏🔍${usedPrefix}revdl <texto
├❏🪅${usedPrefix}toraccino <texto
├❏🔬${usedPrefix}uapkpro <texto
└────ׂ─ׂ─ׂ─ׂ───

┌「🕋𝐏𝐑𝐄𝐍𝐃𝐄𝐑 𝐘 𝐀𝐏𝐀𝐆𝐀𝐑 」
├❏🕋${usedPrefix}enable welcome
├❏📴${usedPrefix}disable welcome
├❏⚠️${usedPrefix}enable modohorny
├❏❎${usedPrefix}disable modohorny
├❏🏧${usedPrefix}enable antilink
├❏🕋${usedPrefix}disable antilink
├❏📴${usedPrefix}enable antilink2
├❏⚠️${usedPrefix}disable antilink2
├❏❎${usedPrefix}enable detect
├❏🏧${usedPrefix}disable detect
├❏🕋${usedPrefix}enable audios
├❏📴${usedPrefix}disable audios
├❏⚠️${usedPrefix}enable autosticker
├❏❎${usedPrefix}disable autosticker
└────ׂ─ׂ─ׂ─ׂ───
┌──「🎧𝐀𝐔𝐃𝐈𝐎𝐒」─
├❏🎧Noche de paz
├❏🎻Miau
├❏🎺Buenos dias
├❏🎸La cumbia del tilín
├❏🎷buenas noches
├❏🎹No pedí tu opinión
├❏🎤Senpai
├❏🥁esto va a ser épico
├❏🎧insulta
├❏🎻Audio hentai
├❏🎺Tiene la cara
├❏🎸Fiesta del admin
├❏🎷tengo
├❏🎹tranquilo
├❏🎤Viernes
├❏🥁Chica lgante
├❏🎧No soy pati
├❏🎻Baneado
├❏🎺Bien pensado woody
├❏🎸Homero chino
├❏🎷El pepe
├❏🎹A nadie le importa
├❏🎤Sexo
├❏🥁nadie te pregunto
├❏🎧Vete a la vrg
├❏🎻Hola
├❏🎺Oye Bot te amo
├❏🎸Te amo
├❏🎷Yamete
├❏🎹y que agarra y qué me dice
├❏🎤Te diagnostico con gay
├❏🥁Eres fuerteSu nivel de pendejo
├❏🎧Que pasa
├❏🎻cállese señora
├❏🎺Quien es tu sempai botsito 7w7
├❏🎸BiTCH
├❏🎷Bañate
├❏🎹cuándo se muera
├❏🎤Que rico
├❏🥁Feliz jueves
├❏🎧Lo puede todo
├❏🎻Gemime
├❏🎺Vivan los novios
├❏🎸sigues con vida
├❏🎷Marica quien
├❏🎹Es puto
├❏🎤Onichan
├❏🥁Feliz cumpleaños
├❏🎧O omosa
├❏🎻Atencion grupo
├❏🎺Oh me vengo
├❏🎸Que linda noche
├❏🎷Te siento mía
├❏🎹hentai2
├❏🎤detengase admin
├❏🥁Canta2
├❏🎧Murio el grupo
├❏🎻Siuuu
├❏🎺Se enojan
├❏🎸Al unico
├❏🎷Se van a dormir
├❏🎹Hare mi rutina
├❏🎤Te sabes
├❏🥁:c
├❏🎧Hay el amor
├❏🎻Orale
├❏🎺Se ríe
├❏🎸Que es eso
├❏🎷anana
├❏🎹No trabajo
├❏🎤asen
├❏🥁confeti
├❏🎧flash
├❏🎻Una pregunta
├❏🎺pinches bot
├❏🎸mmm
├❏🎷Oxxo
├❏🎹Soy nuevo
├❏🎤La voz de hombre
├❏🥁Picachu
├❏🎧Pokemon
├❏🎻ñaña
├❏🎺yutki
├❏🎸Ya basta jovenes
├❏🎷Verdad que te engañe
├❏🎹Calla maldita puta
├❏🎤YoShi
├❏🥁Me los voy a coger
├❏🎧manco
├❏🎻Me voy
├❏🎺Música desamor
├❏🎸mitamita
├❏🎷tuturu
├❏🎹woau
├❏🎤unga
├❏🥁umai
├❏🎧tututu
├❏🎻uma
├❏🎺uff
├❏🎸Tara
├❏🎷uchinchi
├❏🎹talcho
├❏🎤sss
├❏🥁a
├❏🎧Triste enojada toy
├❏🎻Bot maricon
├❏🎺Bot puto
├❏🎸estúpido
├❏🎷Un pato
├❏🎹Nyanpasu
├❏🎤El amor no existe
├❏🥁Es todo lo que tiene que decir
├❏🎧Muere por los humanos
├❏🎻La biblia
├❏🎺Otaku
├❏🎸Hace frío
├❏🎷Pikachu
├❏🎹Niconi
├❏🎤Mimir
├❏🥁Beastars
├❏🎧Manos
├❏🎻Facha
├❏🎺Sexual
├❏🎸Mujer
├❏🎷Cringe
├❏🎹Konede
├❏🎤Gambare
├❏🥁Pack
├❏🎧Temon
├❏🎻Primo
├❏🎺jaja quiero
├❏🎸Kya
├❏🎷rawr
├❏🎹El mundo
├❏🎤Nos vale
├❏🥁Bot gemine
├❏🎧Pespes
├❏🎻Ora
├❏🎺Hades bot
├❏🎸Tori
├❏🎷Oxxo
├❏🎹Mi bot es le mejor
├❏🎤Bunny
├❏🥁cancion hades2
├❏🎧cancion de hades
├❏🎻Hades es un Dios
├❏🎺llamando a seguridad_
├❏🎸Atena_
├❏🎷Que tonta eres_
├❏🎹Bts      
├❏🎤ara ara
├❏🥁La bebecita
├❏🎧Lol
├❏🎻Feliz navidad
├❏🎺Risa diabolica
├❏🎸Te pasas
├❏🎷Darling
├❏🎹Elmo
├❏🎤La lechuza
├❏🥁ñi
├❏🎧Éxtasis
├❏🎻no te acerques
├❏🎺Por que
├❏🎸La mamare
├❏🎷Lala
├❏🎹Ya paso
├❏🎤UwU
├❏🥁Gracias bot
└────ׂ─ׂ─ׂ─ׂ───
┌──「🎮𝐆𝐀𝐌𝐄」─
├❏🎡${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
├❏🎪${usedPrefix}ppt <papel / tijera /piedra
├❏🎾${usedPrefix}prostituto <nombre / @tag
├❏⛳${usedPrefix}prostituta <nombre / @tag
├❏🥌${usedPrefix}gay2 <nombre / @tag
├❏🪀${usedPrefix}lesbiana <nombre / @tag
├❏🔫${usedPrefix}pajero <nombre / @tag
├❏🕹️${usedPrefix}pajera <nombre / @tag
├❏🧩${usedPrefix}puto <nombre / @tag
├❏🎮${usedPrefix}puta <nombre / @tag
├❏🪁${usedPrefix}manco <nombre / @tag
├❏🪃${usedPrefix}manca <nombre / @tag
├❏🎱${usedPrefix}rata <nombre / @tag
├❏🎯${usedPrefix}love <nombre / @tag
├❏🏹${usedPrefix}doxear <nombre / @tag
├❏🥏${usedPrefix}pregunta <texto
├❏🛹${usedPrefix}slot <apuesta
├❏🎳${usedPrefix}simi <texto
├❏♟️${usedPrefix}topgays
├❏🏓${usedPrefix}topotakus
├❏🎲${usedPrefix}formarpareja
├❏🪄${usedPrefix}verdad
├❏🎾${usedPrefix}reto
└────ׂ─ׂ─ׂ─ׂ───
┌──「💎𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓」─
├❏👑${usedPrefix}cajafuerte
├❏💸${usedPrefix}enable restrict
├❏🧾${usedPrefix}disable restrict
├❏📍${usedPrefix}enable autoread
├❏🧑‍💻${usedPrefix}disable autoread
├❏🏯${usedPrefix}enable public
├❏🪩${usedPrefix}disable public
├❏👑${usedPrefix}enable pconly
├❏💸${usedPrefix}disable pconly
├❏🧾${usedPrefix}enable gconly
├❏📍${usedPrefix}disable gconly
├❏🧑‍💻${usedPrefix}banchat2
├❏🏯${usedPrefix}unbanchat2
├❏🪩${usedPrefix}banuser <@tag>
├❏👑${usedPrefix}unbanuser <@tag
├❏💸${usedPrefix}banuser <@tag
├❏🧾${usedPrefix}bc <texto
├❏📍${usedPrefix}bcchats <texto
├❏🧑‍💻${usedPrefix}bcgc <texto
├❏🏯${usedPrefix}cleartpm
├❏🪩${usedPrefix}restart
├❏👑${usedPrefix}update
├❏💸${usedPrefix}addprem <@tag>
├❏🧾${usedPrefix}delprem <@tag
├❏📍${usedPrefix}listprem_
├❏🧑‍💻${usedPrefix}añadirdiamantes <@tag> <cantidad
├❏🏯${usedPrefix}añadirxp <@tag> <cantidad
└────ׂ─ׂ─ׂ─ׂ───
┌──「🧼𝐇𝐄𝐍𝐓𝐀𝐈」─
├❏☔{usedPrefix}pack
├❏🔞${usedPrefix}pack2
├❏☄️${usedPrefix}pack3
├❏🌚${usedPrefix}videoxxx
├❏🧼${usedPrefix}tetas
├❏☔${usedPrefix}booty
├❏🔞${usedPrefix}ecchi
├❏☄️${usedPrefix}furro
├❏🌚${usedPrefix}imagenlesbians
├❏🧼${usedPrefix}panties
├❏☔${usedPrefix}pene
├❏🔞${usedPrefix}porno
├❏☄️${usedPrefix}porno2
├❏🌚${usedPrefix}randomxxx
├❏🧼${usedPrefix}pechos
├❏☔${usedPrefix}vagina
├❏🔞${usedPrefix}tetasgrandes
├❏☄️${usedPrefix}pornovideo
├❏🌚${usedPrefix}yaoi
├❏🧼${usedPrefix}yaoi2
├❏☔${usedPrefix}yuri
├❏🔞${usedPrefix}yuri2
├❏☄️${usedPrefix}trapito
├❏🌚${usedPrefix}hentai
├❏🧼${usedPrefix}pies
├❏☔{usedPrefix}nsfwloli
├❏🔞${usedPrefix}nsfworgy
├❏☄️${usedPrefix}nsfwfoot
├❏🌚${usedPrefix}nsfwass
├❏🧼${usedPrefix}nsfwbdsm
├❏☔${usedPrefix}nsfwcum
├❏🔞️${usedPrefix}nsfwero
├❏☄️${usedPrefix}nsfwfemdom
├❏🧼${usedPrefix}nsfwglass
└────ׂ─ׂ─ׂ─ׂ───
┌──「🛠𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔」
├❏🔧${usedPrefix}afk <motivo
├❏🛠️${usedPrefix}acortar <enlace / link / url
├❏🧰${usedPrefix}calc <operacion math
├❏🪛${usedPrefix}del <respondre a mensaje del Bot
├❏⚙️${usedPrefix}qrcode <texto
├❏🔩${usedPrefix}readmore <texto1| texto2>
├❏⛓️${usedPrefix}spamwa <numero|texto|cantidad
├❏🧰${usedPrefix}styletext <texto
├❏🛠️${usedPrefix}traducir <texto
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎','/estado'],


], m,)
await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menúcompleto|menúcompleto\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
