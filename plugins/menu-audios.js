const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*╭┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╮*
┃ *🌺Hola ${name}*
┃Escribe las palabras o
┃frases tal como estan, no
┃hace falta poner ningun
┃prefijo ( # . * etc. ) ✨
*╰┅─═￭৯•𓆩❤︎𞋯𓆪•৯￭═─┅╯*
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
┏━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━┓
*┃⮕MENU DE AUDIOS🔊*
┃⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪⢷⡪
┣ ⸎⃟🔊 Quien es tu sempai botsito 7w7
┣ ⸎⃟🔊 Te diagnostico con gay
┣ ⸎⃟🔊 A nadie le importa
┣ ⸎⃟🔊 Fiesta del admin
┣ ⸎⃟🔊 Fiesta del administrador
┣ ⸎⃟🔊 Vivan los novios
┣ ⸎⃟🔊 Feliz cumpleaños
┣ ⸎⃟🔊 Noche de paz
┣ ⸎⃟🔊 Buenos dias
┣ ⸎⃟🔊 Buenos tardes
┣ ⸎⃟🔊 Buenos noches
┣ ⸎⃟🔊 Audio hentai
┣ ⸎⃟🔊 Chica lgante
┣ ⸎⃟🔊 Feliz navidad
┣ ⸎⃟🔊 Vete a la vrg
┣ ⸎⃟🔊 Pasa pack Bot
┣ ⸎⃟🔊 Atencion grupo
┣ ⸎⃟🔊 Marica quien
┣ ⸎⃟🔊 Murio el grupo
┣ ⸎⃟🔊 Oh me vengo
┣ ⸎⃟🔊 tio que rico
┣ ⸎⃟🔊 Viernes
┣ ⸎⃟🔊 Baneado
┣ ⸎⃟🔊 Sexo
┣ ⸎⃟🔊 Hola
┣ ⸎⃟🔊 Un pato
┣ ⸎⃟🔊 Nyanpasu
┣ ⸎⃟🔊 Te amo
┣ ⸎⃟🔊 Yamete
┣ ⸎⃟🔊 Bañate
┣ ⸎⃟🔊 Es puto
┣ ⸎⃟🔊 La biblia
┣ ⸎⃟🔊 Onichan
┣ ⸎⃟🔊 Mierda de Bot
┣ ⸎⃟🔊 Siuuu
┣ ⸎⃟🔊 Rawr
┣ ⸎⃟🔊 UwU
┣ ⸎⃟🔊 :c
┣ ⸎⃟🔊 a
┗━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭━ׅ━꯭┛
𖥔 ִ ۫  ּ ⋆ ִ ۫  ּ ⊹  ˑ ִ  ִֶָ  ִ ۫  ּ 𖥔 ִ ۫  ּ ⊹  ˑ  ִ ⋆ִ ۫  ּ ˑ ִ  ִֶָ
                   
*ঔৣ͜͡ீ͜❥🌺𝐁꯭𝐎꯭𝐓꯭ 𝐒꯭𝐄꯭𝐓︦︦𝐒꯭𝐔꯭𝐍꯭𝐀˚₊ˑ*
 █║▌│█│║▌║││█║
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
