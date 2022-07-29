import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('⌛ _Reiniciando.')
         await m.reply('10')
         await m.reply('20')
         await m.reply('30')
         await m.reply('40')
         await m.reply('50')
         await m.reply('60')
         await m.reply('80')    
         await m.reply('90')
         await m.reply('100') 
         await m.reply('𝙍𝙚𝙞𝙣𝙞𝙘𝙞𝙖𝙧 | 𝙍𝙚𝙨𝙩𝙖𝙧𝙩') 
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(reiniciar|res(tart)?)$/i
handler.exp = 500
handler.rowner = true

export default handler
