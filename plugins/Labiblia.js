const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './11.mp4'
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
conn.sendHydrated2(m.chat, str, wm, pp, 'https://youtu.be/BEzODBDiuMg', 'YOUTUBE', 'https://github.com/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menubiblia)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
