let handler = async (m, { conn }) => {
let vn = './media/presentate.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/glass', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*🦠〄᭪๑ꪳ⿻ཻ࿔ꪾ✩Welcome!࿑⃕⃰ꨃ᭡⏑ི᭬۵᭪║\n┏━━«ೋ°۝ೋ°৹»━━┓\n🔥࣪˖ W༶E༶L༶C༶O༶M༶E🔥₊˚•\n┗━━«ೋ°۝ೋ°৹»━━┛\n⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷\n┏━━━━━━━━━━━\n┃ *✨ @user bienvenid@ a*\n┃ *@subject ✨*\n┃   \n┃ ·    ·    ·    ·     ·     ·     ·     · \n┃ *➫ Puedes solicitar mi lista de*\n┃     *comandos con:*\n┃ ➥ *#menu*\n┃ *➫ Aquí tienes la descripción*\n┃ *del grupo, léela!!*\n┃\n\n@desc\n\n┃    .         。     ඞ 。     . • \n┃ *🌺  Disfruta de tu* \n┃ *estadía en el grupo  🌺*\n┃   .    .             .         。    。.\n┗━━━━━━━━━━━\n⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷⡾⢷'
🦠*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['presentate']
handler.tags = ['maker']
handler.command = /^(presentate)$/i
export default handler
