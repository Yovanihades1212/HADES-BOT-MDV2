const xpperlimit = 330
let handler = async (m, { conn, command, args, usedPrefix }) => {
  let count = command.replace(/^buy2/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    //conn.reply(m.chat, `
    let hades = `
┌「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」
├❏𝙳𝙰𝚃𝙾𝚂 𝙳𝙴 𝙲𝙾𝙼𝙿𝚁𝙰
├❏𝙲𝚘𝚖𝚙𝚛𝚊 𝙴𝚏𝚎𝚌𝚝𝚞𝚊𝚍𝚊  +${count} 💎 
├❏𝙷𝚊 𝙶𝚊𝚜𝚝𝚊𝚍𝚘 : -${xpperlimit * count} 𝙲𝙾𝙸𝙽𝚂
└────ׂ─ׂ─ׂ─ׂ───`.trim()
    
await conn.sendHydrated(m.chat, hades, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['💶𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐗10', '.buy2 10'],
['💷𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐗20', '.buy2 20'],
['💸𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐂𝐎𝐍 𝐂𝐎𝐈𝐍𝐒', '/buy']
], m,)
  } else //conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)
    await conn.sendHydrated(m.chat, `┌「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」\n├❏𝙽𝚘 𝚝𝚒𝚎𝚗𝚎 𝚜𝚞𝚏𝚞𝚌𝚒𝚎𝚗𝚝𝚎 𝙲𝙾𝙸𝙽𝚂 𝚙𝚊𝚛𝚊 𝚌𝚘𝚖𝚙𝚛𝚊𝚛\n├❏ ${count} 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎\n\n├❏𝙻𝚎 𝚛𝚎𝚌𝚘𝚖𝚒𝚎𝚗𝚍𝚘 𝚚𝚞𝚎 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚝ú𝚎 𝚌𝚘𝚗 𝚑𝚊𝚍𝚎𝚜 𝙱𝚘𝚝-𝙼𝙳 𝚙𝚊𝚛𝚊 𝙾𝚋𝚝𝚎𝚗𝚎𝚛 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊, 𝚙𝚞𝚎𝚍𝚎 𝚟𝚎𝚛 𝚜𝚞 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 𝚌𝚘𝚗 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 ${usedPrefix}𝚎𝚡𝚙 𝚘 \n├❏${usedPrefix}𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊. 𝚃𝚊𝚖𝚋𝚒é𝚗 𝚙𝚞𝚎𝚍𝚎 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚌𝚘𝚗 𝚑𝚊𝚍𝚎𝚜𝙲𝚘𝚒𝚗𝚜 𝚌𝚘𝚗 𝚎𝚕 𝙲𝚘𝚖𝚊𝚗𝚍𝚘\n├❏${usedPrefix}𝚋𝚞𝚢\n└────ׂ─ׂ─ׂ─ׂ───`, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['💸𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐂𝐎𝐍 𝐄𝐗𝐏𝐄𝐑𝐈𝐄𝐍𝐂𝐈𝐀', '/buy'],
['𝐌𝐄𝐍𝐔️', '/menu']
], m,)
} 
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy2', 'buyall2'] 

handler.disabled = false

export default handler
