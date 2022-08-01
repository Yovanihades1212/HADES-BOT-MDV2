let media = 'https://i.imgur.com/NRv6b71.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
┌「☄️𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓🤖」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💖✨ HOLA TE ENVIAMOS UNIRTE AL LOS💖 GRUPOS OFICIALES DEL BOT DE👩‍🏫✨𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓 SOMOS UNA FAMILIA DE BOTS 
└────ׂ─ׂ─ׂ─ׂ───
┌─「𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:1」─
├❏https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0
└────ׂ─ׂ─ׂ─ׂ───
┌─「𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:2」─
├❏https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ
└────ׂ─ׂ─ׂ─ׂ───
┌─「𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:3」─
├❏https://chat.whatsapp.com/KnpPbr8BN4VDLtwJFMNTtw
└────ׂ─ׂ─ׂ─ׂ───
┌─「𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:4 」─
├❏https://chat.whatsapp.com/BtzGZregRxzFswm0FgunHL
└────ׂ─ׂ─ׂ─ׂ───`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/5212411347465', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎 ','/estado']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
