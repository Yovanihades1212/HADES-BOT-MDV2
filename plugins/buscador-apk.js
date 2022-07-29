
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
{await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱')}
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`
if (command == 'apkdone') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴:* *${x.apps_name}
├❏ 𝙻𝙸𝙽𝙺:* ${x.apps_linkdl}
├❏ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽:* ${x.apps_version}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'apkgoogle') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴:${x.apps_name}*
├❏ 𝙻𝙸𝙽𝙺: ${x.apps_linkdl}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'apkmody') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴: ${x.apps_name}*
├❏ 𝙻𝙸𝙽𝙺: ${x.apps_linkdl}
├❏ 𝙳𝙴𝚂𝙲: ${x.desc}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'apkshub') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴: ${x.apps_name}*
├❏ 𝙻𝙸𝙽𝙺: ${x.apps_linkdl}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'happymod') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴: ${x.apps_name}
├❏ 𝙻𝙸𝙽𝙺:* ${x.apps_linkdl}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'hostapk') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴: ${x.apps_name}
├❏ 𝙻𝙸𝙽𝙺: ${x.apps_linkdl}
├❏ 𝙳𝙴𝚂𝙲: ${x.apps_desc}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'revdl') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴: ${x.apps_name}
├❏ 𝙻𝙸𝙽𝙺: ${x.apps_linkdl}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'toraccino') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴: ${x.apps_name}
├❏ 𝙻𝙸𝙽𝙺: ${x.apps_linkdl}
├❏ 𝙳𝙴𝚂𝙲: ${x.apps_desc}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

if (command == 'uapkpro') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let jsons = await json.json()
let caption = `┌「 ${command}」\n`
for (let x of jsons.result) {
caption += `
┌「💎Resultados Encontrados🏓」
├❏ 𝙽𝙾𝙼𝙱𝚁𝙴: ${x.apps_name}*
├❏ 𝙻𝙸𝙽𝙺: ${x.apps_linkdl}
└────ׂ─ׂ─ׂ─ׂ───`}
await conn.reply(m.chat, caption, m)}

}
handler.command = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
export default handler
