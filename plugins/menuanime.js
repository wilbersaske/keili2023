const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './src/2.mp4'
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
┣ ⸎⃟🦊 .naruto
┣ ⸎⃟🦊 .indo  (indonesia)
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .proximamente
┣ ⸎⃟🦊 .videololi  (randow specials)
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
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/peru', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu', 'help2', '?', 'menu2']
handler.tags = ['main']
handler.command = /^(menuanime)$/i
handler.fail = null
export default  handler

