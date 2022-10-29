let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(anadieleimporta|a nadie le importa)/gi)) {
let vn = './media/dylan1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(araara|ara ara)/gi)) {    
let vn = './media/Ara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(miarda de bot|mierda de bot|mearda de bot|Miarda de Bot|Mierda de Bot|Mearda de Bot)/gi)) {    
let vn = './media/insultar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (!chat.isBanned && chat.audios && m.text.match(/(bañate|Bañate)/gi)) {    
let vn = './media/Banate.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
    
if (!chat.isBanned && chat.audios && m.text.match(/(baneado|Baneado)/gi)) {    
let vn = './media/baneado.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
   
if (!chat.isBanned && chat.audios && m.text.match(/(bebito fiu fiu|bff|Bebito Fiu Fiu|Bff)/gi)) {    
let vn = './media/bff.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
    
if (!chat.isBanned && chat.audios && m.text.match(/(buenas noches|Buenas noches|Boanoite|boanoite)/gi)) {    
let vn = './media/boanoite.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(buenas tardes|Buenas tardes|boatarde|Boatarde)/gi)) {    
let vn = './media/boatarde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(buenos dias|Buenos dias|buenos días|Buenos días)/gi)) {    
let vn = './media/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(chica lgante|Chica lgante|Chicalgante|chicalgante|chical gante|Chical gante)/gi)) {    
let vn = './media/chica lgante.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(giagnosticadoconlet|diagnosticado con let|diagnosticado let|te diagnóstico con gay|diagnóstico gay|te diagnostico con gay|te diagnóstico con gay|te diagnosticó con gay|te diagnostico con gay)/gi)) {    
let vn = './media/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(es puto|eeesss putoo|es putoo|esputoo)/gi)) {    
let vn = './media/Es putoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(feliz cumpleaños|felizcumpleaños|happy birthday)/gi)) {    
let vn = './media/Feliz cumple.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Fiesta del admin|fiesta del admin)/gi)) {    
let vn = './media/admin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(fiesta del administrador)/gi)) {    
let vn = './media/fiesta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(fiesta del admin 3|atención grupo|atencion grupo|aviso importante|fiestadeladmin3)/gi)) {    
let vn = './media/Fiesta1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(gemidos|gemime|gime|gemime|gemi2)/gi)) {    
let vn = './media/gemi2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(audio hentai|Audio hentai|audiohentai|Audiohentai)/gi)) {    
let vn = './media/hentai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(sexo|Sexo|Hora de sexo|hora de sexo)/gi)) {    
let vn = './media/maau1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(laoracion|La biblia|La oración|La biblia|La oración|la biblia|La Biblia)/gi)) {    
let vn = './media/ora.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Marica tu|cancion1|Marica quien)/gi)) {    
let vn = './media/cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Murió el grupo|Murio el grupo|murio el grupo|murió el grupo|Grupo muerto|grupo muerto)/gi)) {    
let vn = './media/Murio.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {    
let vn = './media/navidad.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(noche de paz|Noche de paz|Noche de amor|noche de amor|Noche de Paz)/gi)) {    
let vn = './media/Noche.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Nyapasu|Nyanpasu|nyapasu|Nyapasu|Gambure|Yabure)/gi)) {    
let vn = './media/letu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo)/gi)) {    
let vn = './media/vengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(oni-chan|onichan|o-onichan)/gi)) {    
let vn = './media/Onichan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|Pásame tus fotos desnudas|pásame tu pack|me pasas tu pak|me pasas tu pack|pasa pack)/gi)) {    
let vn = './media/Elmo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Quién es tu senpai botsito 7u7|Quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7u7|Quien es tu sempai botsito 7u7|Quién es tu senpai botsito 7w7|Quien es tu senpai botsito 7w7|quién es tu senpai botsito 7u7|quien es tu senpai botsito 7u7|Quién es tu sempai botsito 7w7|Quien es tu sempai botsito 7w7|Quién es tu senpai botsito|Quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito|Quién es tu senpai botsito|Quien es tu senpai botsito|quién es tu senpai botsito|quien es tu senpai botsito|Quién es tu sempai botsito|Quien es tu sempai botsito)/gi)) {    
let vn = './media/Tu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(rawr|Rawr|RAWR|raawwr|rraawr|rawwr)/gi)) {    
let vn = './media/rawr.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {    
let vn = './media/siu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(te amo|teamo)/gi)) {    
let vn = './media/Te-amo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ooo tio|tio que rico)/gi)) {    
let vn = './media/oh_tio.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {    
let vn = './media/pato.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {    
let vn = './media/Uwu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {    
let vn = './media/vete a la verga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {    
let vn = './media/viernes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(vivan!!|vivan los novios|vivanlosnovios)/gi)) {    
let vn = './media/vivan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {    
let vn = './media/Yamete-kudasai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(epico|esto va a ser epico)/gi)) {    
let vn = './media/Epico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(shitpost)/gi)) {    
let vn = './media/shitpost.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(BITCH|Bitch|Bich|BICH)/gi)) {    
let vn = './media/BiTCH.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
    
if (!chat.isBanned && chat.audios && m.text.match(/(adiós|Adiós|ADIÓS)/gi)) {    
let vn = './media/adiós.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   

if (!chat.isBanned && chat.audios && m.text.match(/(al único|el único|Al único|El único)/gi)) {    
let vn = './media/al único.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(asen|Asen|acen|Acen|asenga|Asengan)/gi)) {    
let vn = './media/asen.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(atena|Atenas|atenas|Atena)/gi)) {    
let vn = './media/Atena.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(basta jovenes|Basta jovenes|Basta-jovenes|basta-jovenes)/gi)) {    
let vn = './media/basta-jovenes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(bb|BEBE|BB|bebe|bebito|bebito fiufiu|FiuFiu|FIUFIU)/gi)) {    
let vn = './media/bb.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(Beastars|beastars|beas-tars|Beas-tars)/gi)) {    
let vn = './media/Beastars.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(bien-pensado-woody|bien-pensado|bien pensado|woody|bien pensado woody)/gi)) {    
let vn = './media/bien-pensado-woody.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(bot)/gi)) {    
let vn = './media/bot.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(Bog gimeme|Bot gemime|Bot gimene|Gimeme|gemime|gimene)/gi)) {    
let vn = './media/Bot gimine.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(Bot maricon|Botmaricon|bot maricon|bot marica|Bot marica|marica|Marica|maricon|Maricon)/gi)) {    
let vn = './media/Bot maricon.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Bot-puto|Puto-Bot|Bot puto|bot puto|puto bot|puto-bot|Puto-Bot)/gi)) {    
let vn = './media/Bot puto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(Bts|BTS|bts|Fan-de-bts|fan-de-bts)/gi)) {    
let vn = './media/Bts.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(Buenos días|Buenos-dias|Buenos-Dias|Buenos días|buenos días|buenos dias|Buenos dias|buen dia|Buen dia)/gi)) {    
let vn = './media/Buenos-dias2'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(bunny|Bunny)/gi)) {    
let vn = './media/Bunny.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    
if (!chat.isBanned && chat.audios && m.text.match(/(cállese|Cállese|callece señora|callese señora|Callese señora)/gi)) {    
let vn = './media/cállese.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
    
if (!chat.isBanned && chat.audios && m.text.match(/(cancion hades|Cancion hades)/gi)) {    
let vn = './media/cancion de hades.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(cancion hades2|Cancion hades2)/gi)) {    
let vn = './media/cancion de hades2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la concha de tu madre|concha de tu|andate a la concha de tu madre Andate a la concha de tu madre)/gi)) {    
let vn = './media/concha de tu madre.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(sss|Sss)/gi)) {    
let vn = './media/Sss.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(confeti|Confeti|confe ti|Confe ti|confe-ti|Confe-ti)/gi)) {    
let vn = './media/confeti.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Cringe|cringe)/gi)) {    
let vn = './media/Cringemp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(cuándo se muera|Cuándo se muera|cuando se muera|Cuando se muera)/gi)) {    
let vn = './media/cuándo se muera.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

   
 if (!chat.isBanned && chat.audios && m.text.match(/(Darling|darling)/gi)) {    
let vn = './media/Darling.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Musica desamor|musica desamor)/gi)) {    
let vn = './media/desamor.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(detengase admin|Detengase admin)/gi)) {    
let vn = './media/detengase admin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(dormir|Dormir)/gi)) {    
let vn = './media/dormiri.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
       
         
 if (!chat.isBanned && chat.audios && m.text.match(/(El amor|el amor|Hay el amor|hay el amor)/gi)) {    
let vn = './media/El amor.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(El amor no existe|el amor no existe)/gi)) {    
let vn = './media/El amor no existe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(El mundo|el mundo)/gi)) {    
let vn = './media/El mundo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(El pepe|el pep|Pepe|pepe)/gi)) {    
let vn = './media/el pepe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
                
  if (!chat.isBanned && chat.audios && m.text.match(/(es todo lo que tienes que decir|Es todo lo que tienes que decir)/gi)) {    
let vn = './media/Es todo lo que tienes que decir.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(eso tilin|Eso tilin)/gi)) {    
let vn = './media/eso tilin.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Éxtasis|estaxsi|éstaxsi|extasi)/gi)) {    
let vn = './media/Estaxsi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


   if (!chat.isBanned && chat.audios && m.text.match(/(Esto va a ser épico|esto va a ser épico|esto va a ser epico|Esto va a ser epico)/gi)) {    
let vn = './media/esto va a ser épico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Estupido|estupido|estúpido|Estúpido)/gi)) {    
let vn = './media/estúpido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Facha|facha|queda detenido por exceso de facha|exceso de facha)/gi)) {    
let vn = './media/Facha.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(eres fuerte|Eres fuerte)/gi)) {    
let vn = './media/fuerte.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(gambare|Gambare)/gi)) {    
let vn = './media/Gambare.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(gay|Gay)/gi)) {    
let vn = './media/gay2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(gracias bot|Gracias bot)/gi)) {    
let vn = './media/Gracias bot.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(hasta mañana|Hasta mañana|hazta mañana|Hazta mañana)/gi)) {    
let vn = './media/ha.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(hace frío|Hace frío)/gi)) {    
let vn = './media/Hace frío.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Hades es un Dios|hades es un dios|Hades es un dios)/gi)) {    
let vn = './media/Hades es un Dios.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Homero chino|homero chino)/gi)) {    
let vn = './media/Homero chino.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(invocar|Invocar)/gi)) {    
let vn = './media/Invocar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(ja|Ja)/gi)) {    
let vn = './media/ja.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
    
if (!chat.isBanned && chat.audios && m.text.match(/(quiero morir me|jaja quiero|Jaja quiero|Quiero morir me)/gi)) {    
let vn = './media/jaja quiero.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(jashire|Jashire)/gi)) {    
let vn = './media/jashire.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Jesucristo|jesucristo)/gi)) {    
let vn = './media/Jesucristo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(konede|Konede|conede|Conede)/gi)) {    
let vn = './media/Konede.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(kya|Kya)/gi)) {    
let vn = './media/Kya.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la voz de hombre|La voz de hombre|la-vox-de-hombre|La-voz-de-hombre)/gi)) {    
let vn = './media/la-voz-de-hombre.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(La bebecita|la bebecita)/gi)) {    
let vn = './media/La bebecita.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la lechuza|La lechuza)/gi)) {    
let vn = './media/La lechuza.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(la biblia|La biblia)/gi)) {    
let vn = './media/La biblia.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(la mamare|La mamare)/gi)) {    
let vn = './media/La mamare.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Lala|lala)/gi)) {    
let vn = './media/lala.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(llamando a seguridad|Llamando a seguridad)/gi)) {    
let vn = './media/llamando a seguridad.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
                    
if (!chat.isBanned && chat.audios && m.text.match(/(Lol|lol)/gi)) {    
let vn = './media/Lol.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(maldita-puta|Mladita-puta|maldita Puta|Maldita puta|maldita puta)/gi)) {    
let vn = './media/maldita-puta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(manco|Manco)/gi)) {    
let vn = './media/manco.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(manos|Manos)/gi)) {    
let vn = './media/Manos.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(mariana|Mariana)/gi)) {    
let vn = './media/mariana.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(me los voy a coger|Me los vpy a coger)/gi)) {    
let vn = './media/me-los-voy-a-coger.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(amiga|Amiga|mi amiga|Mi amiga)/gi)) {    
let vn = './media/mi amiga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(miau|Miau)/gi)) {    
let vn = './media/Miau.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(mimir|Mimir)/gi)) {    
let vn = './media/mimir.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(mitamita|Mitamita|mita mita)/gi)) {    
let vn = './media/mitamita.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(mmm|Mmm)/gi)) {    
let vn = './media/mmm.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(mujer|Mujer|mujeres|Mujeres)/gi)) {    
let vn = './media/Mujer.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    if (!chat.isBanned && chat.audios && m.text.match(/(mus)/gi)) {    
let vn = './media/mus.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(musica|Musica)/gi)) {    
let vn = './media/Musica.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Musica de espera|musica de espera)/gi)) {    
let vn = './media/Musica de espera.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Gawr gura cantando|gawr gura cantando)/gi)) {    
let vn = './media/naa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(nadie te pregunto|Nadie te pregunto)/gi)) {    
let vn = './media/nadie te pregunto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(nico-nico-ni|niconi|Niconi|Nico-nico-ni)/gi)) {    
let vn = './media/Niconi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(nivel|Nivel|su nivel|Su nivel)/gi)) {    
let vn = './media/nivel.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no digas mamadas|No digas mamadas|No digas mamadas meriyein|no digas mamafas meriyein)/gi)) {    
let vn = './media/no-digas-mamadas-meriyein.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(no esta|No esta)/gi)) {    
let vn = './media/No esta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no le vuelvo a hablar|No le vuelvo a hablar|no funciona|No funciona)/gi)) {    
let vn = './media/no funciona.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(no pedi tu opinión|No pedi tu opinión|no pedi tu opinion|No pedi tu opiniom)/gi)) {    
let vn = './media/No pedí tu opinión.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no soy pati|No soy pati|no soy pa ti|No soy pa ti)/gi)) {    
let vn = './media/No soy pati.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(no soy real|No soy real)/gi)) {    
let vn = './media/No soy real.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(No te acerques|no te acerques)/gi)) {    
let vn = './media/no te acerques.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(nos vale|Nos vale)/gi)) {    
let vn = './media/Nos vale.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Nyanpasu|nyanpasu)/gi)) {    
let vn = './media/Nyanpasu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(O mosa|o mosa|omosa|Omosa)/gi)) {    
let vn = './media/O mosa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(reglas|Reglas|soy nuevo|Soy nuevo)/gi)) {    
let vn = './media/Regalas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(ok|Ok)/gi)) {    
let vn = './media/Ok.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(omg|Omg|Omaiga|omaiga)/gi)) {    
let vn = './media/Omaiga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Orale|orale)/gi)) {    
let vn = './media/orale.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Oxxo|oxxo)/gi)) {    
let vn = './media/Oxxo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(pack|Pack|no chupala|No chupala)/gi)) {    
let vn = './media/Pack.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Pero esto|pero esto)/gi)) {    
let vn = './media/pero esto.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

    if (!chat.isBanned && chat.audios && m.text.match(/(pespes|Pespes|pes-pes|Pes-pes)/gi)) {    
let vn = './media/pespes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(pikachu|Pikachu|picachu|Picachu)/gi)) {    
let vn = './media/pikachu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(pokemon|Pokemon)/gi)) {    
let vn = './media/pokemon.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Porque|Por que|porque|por que)/gi)) {    
let vn = './media/Por que.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(primo|Primo)/gi)) {    
let vn = './media/Primo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(que linda noche|Que linda noche)/gi)) {    
let vn = './media/Que linda noche.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(Que pasa|que pasa|todo bien|Todo bien)/gi)) {    
let vn = './media/Que pasa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(Que sucede|que sucede)/gi)) {    
let vn = './media/Que sucede.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(que tonta eres|Que tonta eres)/gi)) {    
let vn = './media/Que tonta eres.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(que rico sabe|Que rico sabe|Qué rico sabe|qué rico sabe)/gi)) {    
let vn = './media/qué rico sabe.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
                                            
if (!chat.isBanned && chat.audios && m.text.match(/(risa|Risa|risas|Rosas)/gi)) {    
let vn = './media/risa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


if (!chat.isBanned && chat.audios && m.text.match(/(risa diabólica|Risa diabólica|risa diabolica|Risa diabolica)/gi)) {    
let vn = './media/Risa diabolica.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/()Rutina|rutina/gi)) {    
let vn = './media/rutina.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(se enojan|Se enojan)/gi)) {    
let vn = './media/se enojan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(senpai|Senpai)/gi)) {    
let vn = './media/senpai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(sexual|Sexual)/gi)) {    
let vn = './media/Secual.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(sigues con vida|Sigues con vida)/gi)) {    
let vn = './media/sigues con vida.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(sonrisas|Sonrisas)/gi)) {    
let vn = './media/sonrisas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(talcho|Talcho)/gi)) {    
let vn = './media/talcho.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tafa|Tara)/gi)) {    
let vn = './media/Tara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Te pasas|te pasas)/gi)) {    
let vn = './media/te pasas.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Te sabes|te sabes)/gi)) {    
let vn = './media/te sabes.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(te siento mia|Te siento mia|Te siento mía|te siento mía)/gi)) {    
let vn = './media/Te siento mía.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Temon|temon)/gi)) {    
let vn = './media/Temon.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Tengo|tengo|calzones del admi|Calzones del admi)/gi)) {    
let vn = './media/Tengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tiene la cara|Tiene la cara)/gi)) {    
let vn = './media/tiene la cara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(:c|:C|toma para que dejes de llorar|Toma para que dejes de llorar|para que dejes de llorar|Para que dejes de llorar)/gi)) {    
let vn = './media/toma.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tori|Tori)/gi)) {    
let vn = './media/Tori.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(no trabajo|mañana no trabajo|Mañana no trabajo|Trabajo)/gi)) {    
let vn = './media/.trabajomp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tranquilo|Tranquilo)/gi)) {    
let vn = './media/tranquilo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(triste enojada toy|Triste enojada toy)/gi)) {    
let vn = './media/Trisre enojada toy.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tuturu|Tuturu)/gi)) {    
let vn = './media/tuturu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(tututu|Tututu)/gi)) {    
let vn = './media/tututu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/uchinchi|Uchinchi()/gi)) {    
let vn = './media/uchinchi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Umai|umai)/gi)) {    
let vn = './media/umai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Un pato|un pato)/gi)) {    
let vn = './media/Un pato.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(una pregunta|Una pregunta|una-pregunta|Una-pregunta)/gi)) {    
let vn = './media/una-pregunta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}        
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(unga|Unga)/gi)) {    
let vn = './media/unga.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Ven|ven|hici hacemos un mulero|Hici hacemos un muñeco)/gi)) {    
let vn = './media/ven.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(verdad que te engañe|Verdad que te engañe)/gi)) {    
let vn = './media/verdad-que-te-engane.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(woahh|Woahh)/gi)) {    
let vn = './media/woahh.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(y que agarra y qué me dice|Y que agarra y qué me dice)/gi)) {    
let vn = './media/y que agarra y qué me dice.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(Ya paso|ya paso)/gi)) {    
let vn = './media/Ya paso.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
               
               
 if (!chat.isBanned && chat.audios && m.text.match(/(yoshi cancion|Yoshi cancion)/gi)) {    
let vn = './media/yoshi-cancion.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                
               
 if (!chat.isBanned && chat.audios && m.text.match(/(yutkl|Yutki)/gi)) {    
let vn = './media/yutki.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(ñaña|Ñaña)/gi)) {    
let vn = './media/ñaña.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}    
                 
               
 if (!chat.isBanned && chat.audios && m.text.match(/(ñi|Ñi|Ña|ña)/gi)) {    
let vn = './media/ñi.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}         
                   
 if (!chat.isBanned && chat.audios && m.text.match(/(omosa|Omosa)/gi)) {    
let vn = './media/O omosa.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}                 
                      
                   

   
return !0 }
export default handler