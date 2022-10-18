import fetch from 'node-fetch'
import translate from 'translate-google-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`
const tld = 'cn'
let enc = encodeURIComponent(text)
try {
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()
let mystic = await translate(`${gPlay.descripcion}`, { tld, to: 'es' })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`
╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮
╟🔍 Resultado: ${gPlay.titulo}
╟🧬 Identificador: ${gPlay.id}
╟⛓️ Link: ${gPlay.link}
╟🖼️ Imagen: ${gPlay.imagen}
╟✍️ Desarrollador: ${gPlay.desarrollador}
╟📜 Descripcion: ${mystic}
╟💲 Moneda: ${gPlay.moneda}
╟🎭 Gratis?: ${gPlay.gratis}
╟💸 Precio: ${gPlay.precio}
╟📈 Puntuacion: ${gPlay.puntuacion}
╰╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╯`},{quoted:m})
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')
console.log(e)
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
