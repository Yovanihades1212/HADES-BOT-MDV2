/* Creditos a https://github.com/ALBERTO9883 */

let handler = async (m, { conn, text, args, usedPrefix, command }) => {	
if (!args[0]) throw `╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮\n╟⚠️️ *_Ingrese un texto para iniciar la escuesta._*\n\n╟📌 Ejemplo : \n╟${usedPrefix + command}* texto|texto2..\n╰╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╯.`
if (!text.includes('|')) throw  `╭╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╮\n╟⚠️️ Separe las encuestas con *|* \n\n╟📌 Ejemplo : \n╟*${usedPrefix + command}* texto|texto2...\n╰╾┅≼⊰⸎҉🅫͢𝑯𝒂𝒅𝒆𝒔🅫͢⸎҉⊱≽┅╼╯`
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) { a.push([b[c]]) }
return conn.sendPoll(m.chat, `📊 *Encuesta para:*\n\n${text}`, a, m)}
handler.help = ['encuesta <text|text2>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta'] 
export default handler
