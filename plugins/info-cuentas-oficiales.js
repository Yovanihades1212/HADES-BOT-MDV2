let media = 'https://i.imgur.com/NRv6b71.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
💜𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎
├❏───ׂ─ׂ─ׂ─ׂ─
├❏✅ *GITHUB*
├❏*${md}*
├❏───ׂ─ׂ─ׂ─ׂ─
├❏✅ *YOUTUBE*
├❏${yt}
├❏───ׂ─ׂ─ׂ─ׂ─
├❏Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '.estado'],
['𝐌𝐄𝐍𝐔', '/menu']
], m,)}

handler.command = /^cuentasoficiales|cuentasoficiales\$/i
handler.exp = 35
handler.limit = 1
export default handler
