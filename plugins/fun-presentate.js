let handler = async (m, { conn }) => {
let vn = './media/presentate.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/glass', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*🦠〄᭪๑ꪳ⿻ཻ࿔ꪾ✩Welcome!࿑⃕⃰ꨃ᭡⏑ི᭬۵᭪ Tanto si usas PowerPoint como Keynote, la tipografía es el elemento esencial para conseguir una presentación fluida, legible e impactante. Las letras te ayudarán a mejorar la comunicación de tus ideas. Te recomendamos cinco tipos de letra sin remate que funcionan muy bien tanto en pantalla como para imprimir posteriormente la presentación. La selección es una mezcla de tipografías muy potentes con rasgos y detalles muy interesantes:   *', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['presentate']
handler.tags = ['maker']
handler.command = /^(presentate)$/i
export default handler
