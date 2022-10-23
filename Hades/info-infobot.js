import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = 'https://i.imgur.com/lkch77g.jpeg'
let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `
┌──「𓈃ּ ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓
├❏ [🤴🏻] 𝙲𝚁𝙴𝙰𝙳𝙾𝚁: YOVANI 
├❏ [#️⃣] 𝙽𝙾° 𝙳𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁:
├❏+5212411347465
├❏[🎳] 𝙿𝚁𝙴𝙵𝙸𝙹𝙾: ${usedPrefix}
├❏[🔐] 𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂: ${chats.length - groups.length}
├❏[🦜] 𝙲𝙷𝙰𝚃𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂: ${groups.length}
├❏[💡] 𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: ${chats.length}
├❏[🚀] 𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳: ${uptime}
├❏VERSIÓN ACTUAL | VERSION
├❏ ${vs}
├❏[🎩] 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜
├❏[👨‍🦯] 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: 
├❏${speed}
├❏𝚖𝚒𝚕𝚒𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜
├❏[☑️] 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳: ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
├❏[❗] 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃: ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
└────ׂ─ׂ─ׂ─ׂ───`.trim()

conn.sendHydrated(m.chat, info, wm, pp, 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐌𝐄𝐍𝐔', '#menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎', '.estado']
], m,)
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
