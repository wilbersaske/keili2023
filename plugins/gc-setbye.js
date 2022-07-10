let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] ┏━━«ೋ°۝ೋ°৹»━━┓
┃           *❝ A D I O S ❞*
┃⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪ 
*┃🌺Se fue @51943689405*
*┃🔥un GAY menos🔥*
*┃         🏳️‍🌈🏳️‍🌈🏳️‍🌈*
*┃  Que dios lo bendiga️*
*┃  Y lo atropelle un tren*
┃                 😇
┗━━«ೋ°۝ೋ°৹»━━┛')
} else throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙳𝙴𝚂𝙿𝙴𝙳𝙸𝙳𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝚁, 𝚄𝚂𝙴:*\n*- @user (mención)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
