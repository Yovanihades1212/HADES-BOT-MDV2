let handler = async (m, { conn, text, participants }) => {
	let member = participants.map(u => u.id)
	if(!text) {
		var sum = member.length
	} else {
		var sum = text
	}
	var total = 0
	var sider = []
	for(let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
		if((typeof global.DATABASE.data.users[member[i]] == 'undefined' || global.DATABASE.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
			if (typeof global.DATABASE.data.users[member[i]] !== 'undefined'){
				if(global.DATABASE.data.users[member[i]].whitelist == false){
					total++
					sider.push(member[i])
				}
			}else {
				total++
				sider.push(member[i])
			}
		}
	}
	if(total == 0) return conn.reply(m.chat, `┌「𝐍𝐎 𝐒𝐄 𝐇𝐀 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐎 𝐍𝐈𝐍𝐆Ú𝐍 𝐅𝐀𝐍𝐓𝐀𝐒𝐌𝐀」\n└────ׂ─ׂ─ׂ─ׂ───`, m) 
	m.reply(`┌「𝐑𝐄𝐕𝐈𝐒𝐀𝐍𝐃𝐎 𝐋𝐎𝐒 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐎𝐒」\n├❏Grupo: ${conn.getName(m.chat)}\n├❏Participantes: ${sum}\n┌「👻𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐍𝐓𝐄𝐒 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐎𝐒 👻」\n${sider.map(v => '  ├❏👻👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n├❏Nota: Esto puede no ser 100% acertado\n└────ׂ─ׂ─ׂ─ׂ───`, null, { mentions: sider })
}

handler.help = ['verfantasmas']
handler.tags = ['group']
handler.command = /^(verfantasmas|fantasmas|sider|Sider)$/i

handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.limit = 1
export default handler