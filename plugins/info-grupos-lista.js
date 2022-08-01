let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n ${await conn.getName(jid)}\n✦ ${jid} \n${chat?.metadata?.read_only ? '❌ *SIN ESTAR AQUÍ | NO*' : '✅ *SIGO AQUÍ | YES*'}\n\n`
m.reply(`*${gt} ESTÁ EN ESTOS GRUPOS*
*IS IN THESE GROUPS:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://www.facebook.com/groups/987464505464904/', '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', null, null, [
['️𝐌𝐄𝐍𝐔', '.menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎 ', '/estado']
], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
handler.limit = 1
export default handler
