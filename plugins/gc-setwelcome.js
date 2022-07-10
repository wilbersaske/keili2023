let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙱𝙸𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾*')
} else throw `*[❗] ┏━━«ೋ°۝ೋ°৹»━━┓
🔥࣪˖ W༶E༶L༶C༶O༶M༶E🔥₊˚•
┗━━«ೋ°۝ೋ°৹»━━┛
⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷
┏━━━━━━━━━━━
┃ *✨ @51927318556 bienvenid@ a*
┃ *WOLRD OF HENTAI ✨*
┃   
┃ ·    ·    ·    ·     ·     ·     ·     · 
┃ *➫ Puedes solicitar mi lista de*
┃     *comandos con:*
┃ ➥ *#menu* 
┃
┃ *➫ Aquí tienes la descripción* 
┃ *del grupo, léela!!*
┃
┃    .         。     ඞ 。     . • 
┃ *🌺  Disfruta de tu* 
┃ *estadía en el grupo  🌺*  
┃   .    .             .         。    。.
┗━━━━━━━━━━━
⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
