console.log('✅ㅤIniciando...')
import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('HADES-BOT-MD\nꪝɪℓℓ  👻🖤\n WHATSAPP-BOT', {
font: 'chrome',
align: 'center',
gradient: ['red', 'magenta']})
say(`EL MEJOR BOT DE WHATSAPP 2022 LA MEJOR CALIDAD Y SERVICIO DE WHATSAPP HADES_BOT
|< ================================================== >|
[•]-SERVIDOR : PRIVADO
[•]-BOT VERSION : 10.8.9
[•]-ESTADO : ACTIVO
[•]-Owner : ꪝɪℓℓ  👻🖤
[•]-GRACIAS POR USAR LE BOT DE HADES 
[•]-SUBSCRIBETE LA CANAL YOUTUBE 
[•]-CERRADO EL BOT HADES
|< ================================================== >|`, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})

var isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]

say('Ajuste la pantalla para escanear el codigo QR', {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})
  
setupMaster({
exec: args[0],
args: args.slice(1), })
let p = fork()
p.on('message', data => {
console.log('[RECEIVED]', data)
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break }})
p.on('exit', (_, code) => {
isRunning = false
console.error('❎ㅤOcurrio un error inesperado:', code)
  
p.process.kill()
isRunning = false
start.apply(this, arguments)
  
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)})})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())})}
start('main.js')
