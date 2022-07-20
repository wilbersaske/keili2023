let handler = async (m, { conn }) => {
let vn = './media/presentate.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/glass', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*🏳😁🦠FICHA DE PRESENTACION ╾┉╌═╼╌┉╾┉╌═╼╌┉╾┉╌╮

〄᭪๑ꪳ⿻ཻ࿔ꪾ✩Welcome!࿑⃕⃰ꨃ᭡⏑ི᭬۵᭪║

╭┉╌═╼╌┉╾┉╌═╼╌┉╾┉╌╯

║䩲䩼▩ꪳ❀ཽ࿔⃨⃕๑̫♡ི༘༗ཻᮭ⊱#TokyoGang (❁´◡`❁)

╰┉╌═╼╌┉╾┉╌═╼╌┉╾┉╌┉╌═╼╌┉╾┉╌╮

[Imagen de tu personaje]

▓꙰꙰꙰꙰꙰⃝⃝⃝⃝⃝ :sweat_drops: ⃢⃢⃢⃢⃢⵿꙰꙰⃟⃟࿑⃟⃟⃟⃟⃟⃝⃝⃝⃝⃝⃝꙰꙰꙰꙰꙰꙰꙰⋱꙰꙰꙰꙰ (Iɴғᴏʀᴍᴀᴄɪᴏ́ɴ ʙᴀ́sɪᴄᴀ) ▓꙰꙰꙰꙰꙰⃝⃝⃝⃝⃝ :sweat_drops: ⃢⃢⃢⃢⃢⵿꙰꙰⃟⃟࿑⃟⃟⃟⃟⃟⃝⃝⃝⃝⃝⃝꙰꙰꙰꙰꙰꙰꙰⋱꙰꙰꙰꙰

╭╦╮⋱⋱╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮

╠╬╣▓꙰꙰꙰꙰꙰⵿᳘ྃྃྃ꙰ꦿ╏⵿ཽི᳗᷍꙰ཹ⵿ཽ᳘ Nᴏᴍʙʀᴇ:

╠╬╣▓꙰꙰꙰꙰꙰⵿᳘ྃྃྃ꙰ꦿ╏⵿ཽི᳗᷍꙰ཹ⵿ཽ᳘ Edɑd:

╠╬╣▓꙰꙰꙰꙰꙰⵿᳘ྃྃྃ꙰ꦿ╏⵿ཽི᳗᷍꙰ཹ⵿ཽ᳘ Gᴇ́ɴᴇʀᴏ:

╠╬╣▓꙰꙰꙰꙰꙰⵿᳘ྃྃྃ꙰ꦿ╏⵿ཽི᳗᷍꙰ཹ⵿ཽ᳘ Oʀɪᴇɴᴛᴀᴄɪᴏ́ɴ sᴇxᴜᴀʟ:

╠╬╣▓꙰꙰꙰꙰꙰⵿᳘ྃྃྃ꙰ꦿ╏⵿ཽི᳗᷍꙰ཹ⵿ཽ᳘ Aᴘᴏᴅᴏ:

╰╩╯⋱⋱╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

😁🦠*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['presentate']
handler.tags = ['maker']
handler.command = /^(presentate)$/i
export default handler
