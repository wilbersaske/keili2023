const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './src/anime.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `*╭┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╮*
┃ *🔥Hola ${name},*
*╰┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╯*
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
┏━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━┓
┃    *M E N U + ANIME🦊*
┃Hola, bienvenid@s  
┃a mi blog en este blog
┃subiré fanfics, series, imágenes y mucho más
┃También daré recomendaciones de
┃distintos animes de todo genero :D
┃⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪
┣ ⸎⃟🦊 .nezuko
┣ ⸎⃟🦊 .anime (randows)
┣ ⸎⃟🦊 .kurumi
┣ ⸎⃟🦊 .miku
┣ ⸎⃟🦊 .itori
┣ ⸎⃟🦊 .sasuke
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┗━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭┛
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
`.trim()
}}
handler.help = ['menu', 'help2', '?', 'menu2']
handler.tags = ['main']
handler.command = /^(menuanime)$/i
handler.fail = null
export default  handler

