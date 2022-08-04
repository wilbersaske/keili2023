const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './111.mp4'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `

*╭┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╮*
┃ *🔥Hola ${name},*
*╰┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╯*
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
┏━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━┓
┃       *⮕ M E N U +🔞*
┃Usar los comandos bajo
┃su responsabilidad nome
┃hago responsable del mal
┃uso que se les pueda dar
┃⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪
┣ ⸎⃟🍑 .pack
┣ ⸎⃟🍑 .pack2
┣ ⸎⃟🍑 .pack3
┣ ⸎⃟🍑 .videoxxx
┣ ⸎⃟🍑 .tetas
┣ ⸎⃟🍑 .booty
┣ ⸎⃟🍑 .ecchi
┣ ⸎⃟🍑 .furro
┣ ⸎⃟🍑 .imagenlesbians
┣ ⸎⃟🍑 .panties
┣ ⸎⃟🍑 .pene
┣ ⸎⃟🍑 .porno
┣ ⸎⃟🍑 .porno2
┣ ⸎⃟🍑 .randomxxx
┣ ⸎⃟🍑 .pechos
┣ ⸎⃟🍑 .yaoi
┣ ⸎⃟🍑 .yaoi2
┣ ⸎⃟🍑 .yuri
┣ ⸎⃟🍑 .yuri2
┣ ⸎⃟🍑 .trapito
┣ ⸎⃟🍑 .hentai
┣ ⸎⃟🍑 .pies
┣ ⸎⃟🍑 .nsfwloli
┣ ⸎⃟🍑 .nsfworgy
┣ ⸎⃟🍑 .nsfwfoot
┣ ⸎⃟🍑 .nsfwass
┣ ⸎⃟🍑 .nsfwbdsm
┣ ⸎⃟🍑 .nsfwcum
┣ ⸎⃟🍑 .nsfwero
┣ ⸎⃟🍑 .nsfwfemdom
┣ ⸎⃟🍑 .nsfwglass
┗━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭┛
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menubiblia)$/i
handler.fail = null
export default  handler
