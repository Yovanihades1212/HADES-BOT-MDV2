
import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => { 

if (command == 'consejo') {
    
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
try {
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮\n╟${frase1}*\n╰╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╯`)
} catch {
m.reply(`*[❗] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚂𝙸𝙱𝙻𝙴𝙼𝙴𝙽𝚃𝙴 𝙻𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 (𝙰𝙿𝙸) 𝙳𝙴 𝙰𝚈𝚄𝙳𝙰 𝙴𝚂𝚃𝙴 𝙲𝙰𝙸𝙳𝙰 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙼𝙴𝙽𝚃𝙴, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*`)}}
    
if (command == 'fraseromantica') {
try {
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮\n╟❥  ${frase1}*\n╰╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╯`)
} catch {
m.reply(`*[❗] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚂𝙸𝙱𝙻𝙴𝙼𝙴𝙽𝚃𝙴 𝙻𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 (𝙰𝙿𝙸) 𝙳𝙴 𝙰𝚈𝚄𝙳𝙰 𝙴𝚂𝚃𝙴 𝙲𝙰𝙸𝙳𝙰 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙼𝙴𝙽𝚃𝙴, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*`)}}

if (command == 'historiaromantica') {
try {
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'es' })
let titletime = await translate(`${title}`, { tld, to: 'es' })
conn.reply(m.chat, `᭥🫐᭢ Título: ${titletime}
 Autor: ${author_name}
${storytime}`, m)
} catch {    
m.reply(`*[❗] 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚂𝙸𝙱𝙻𝙴𝙼𝙴𝙽𝚃𝙴 𝙻𝙰 𝙿𝙰𝙶𝙸𝙽𝙰 (𝙰𝙿𝙸) 𝙳𝙴 𝙰𝚈𝚄𝙳𝙰 𝙴𝚂𝚃𝙴 𝙲𝙰𝙸𝙳𝙰 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙻𝙼𝙴𝙽𝚃𝙴, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*`)}}
      
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica']
export default handler
