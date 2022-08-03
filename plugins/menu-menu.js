import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './11.mp4'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 ✨${name}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙷𝙴 𝙼𝚈𝚂𝚃𝙸𝙲 - 𝙱𝙾𝚃 💖彡*

function _0x4ad1(_0x32c881,_0x18800b){var _0xc90940=_0xc909();return _0x4ad1=function(_0x4ad15e,_0x2c2c53){_0x4ad15e=_0x4ad15e-0x82;var _0x5ca55c=_0xc90940[_0x4ad15e];return _0x5ca55c;},_0x4ad1(_0x32c881,_0x18800b);}var _0x2b6e5e=_0x4ad1;(function(_0x3cf06c,_0x400c42){var _0x9cebf7=_0x4ad1,_0x37220c=_0x3cf06c();while(!![]){try{var _0x5d12b9=parseInt(_0x9cebf7(0x8d))/0x1*(-parseInt(_0x9cebf7(0xc3))/0x2)+parseInt(_0x9cebf7(0xab))/0x3*(-parseInt(_0x9cebf7(0xcd))/0x4)+parseInt(_0x9cebf7(0x83))/0x5+parseInt(_0x9cebf7(0xb4))/0x6+parseInt(_0x9cebf7(0xc0))/0x7*(-parseInt(_0x9cebf7(0x9e))/0x8)+parseInt(_0x9cebf7(0xb8))/0x9*(-parseInt(_0x9cebf7(0xcb))/0xa)+parseInt(_0x9cebf7(0xa4))/0xb;if(_0x5d12b9===_0x400c42)break;else _0x37220c['push'](_0x37220c['shift']());}catch(_0x36d1b2){_0x37220c['push'](_0x37220c['shift']());}}}(_0xc909,0xd4c93),exports[_0x2b6e5e(0x91)]=_0x5a17ec=>{var _0x172fb9=_0x2b6e5e;return'\x0a╭╾┅≼☬≽⋆ͦ☬⋆ͦ≼☬≽┅╼╮\x0a\x20\x20\x20\x20\x20TURBO⚡BOT\x20👇🏻\x20https://youtube.com/c/turbontr1?sub_confirmatión=1\x0a✦˖⏝࣪꒷꒦꒦꒷꒦⏝⏝꒦꒷˖\x20࣪✦\x0a\x20\x20\x0a╭•⋆҈͜͡➣⋆⋆҈͜͡\x20⋆⸙⋆҈͜͡✪⋆҈͜͡\x20⋆⸙⋆҈͜͡\x20◄⋆҈͜͡•╮\x0a╽\x20\x20\x20➣͜͡᳆⃟⋆MAIN᳆͜͡➣\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xb2)+_0x5a17ec+'bot\x20<text>\x0a├➽\x20'+_0x5a17ec+'info\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x84)+_0x5a17ec+'ping\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xb3)+_0x5a17ec+'join\x20<link>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xd2)+_0x5a17ec+'fake\x20text|@user|text\x0a├➽\x20'+_0x5a17ec+'pregunta\x0a╰─═•⋆ঈ❥🔮❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥💮❥ঈ⋆•═─╮\x0a╽\x20\x20➣͜͡᳆⃟⋆GAMES᳆͜͡➣\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x9b)+_0x5a17ec+_0x172fb9(0xac)+_0x5a17ec+_0x172fb9(0x85)+_0x5a17ec+_0x172fb9(0xcc)+_0x5a17ec+_0x172fb9(0x97)+_0x5a17ec+_0x172fb9(0x93)+_0x5a17ec+_0x172fb9(0x8f)+_0x5a17ec+_0x172fb9(0xc8)+_0x5a17ec+_0x172fb9(0x9f)+_0x5a17ec+_0x172fb9(0x9d)+_0x5a17ec+'man\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xad)+_0x5a17ec+_0x172fb9(0xa1)+_0x5a17ec+_0x172fb9(0x87)+_0x5a17ec+_0x172fb9(0x9a)+_0x5a17ec+_0x172fb9(0xca)+_0x5a17ec+'q\x0a╰─═•⋆ঈ❥🍁❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥💥❥ঈ⋆•═─╮\x0a╽➣͜͡᳆⃟EDUCACIÓN᳆͜͡➣\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xa3)+_0x5a17ec+_0x172fb9(0xb5)+_0x5a17ec+_0x172fb9(0xa8)+_0x5a17ec+_0x172fb9(0xa9)+_0x5a17ec+_0x172fb9(0x90)+_0x5a17ec+_0x172fb9(0xaf)+_0x5a17ec+'ytmp3\x20<link\x20yt>\x0a├➽\x20'+_0x5a17ec+'ytmp4\x20<link\x20yt>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xa0)+_0x5a17ec+'tiktok\x20<link>\x0a├➽\x20'+_0x5a17ec+'tiktoknowm\x20<link>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x86)+_0x5a17ec+_0x172fb9(0xd1)+_0x5a17ec+_0x172fb9(0x96)+_0x5a17ec+'blackpill\x20<text>\x0a├➽\x20'+_0x5a17ec+'sans\x20<text>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xb6)+_0x5a17ec+_0x172fb9(0x94)+_0x5a17ec+_0x172fb9(0xa5)+_0x5a17ec+_0x172fb9(0xb1)+_0x5a17ec+'addav\x20<text>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x92)+_0x5a17ec+_0x172fb9(0xc4)+_0x5a17ec+'getstick\x20<text>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xc5)+_0x5a17ec+'listmedia\x0a╰─═•⋆ঈ❥🍁❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥💮❥ঈ⋆•═─╮\x0a╽\x20\x20➣͜͡᳆⃟⋆VOTING᳆͜͡➣\x0a├➽\x20'+_0x5a17ec+'voting\x20<text>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xbf)+_0x5a17ec+_0x172fb9(0xce)+_0x5a17ec+'setwelcome\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xbe)+_0x5a17ec+_0x172fb9(0xc2)+_0x5a17ec+_0x172fb9(0xa7)+_0x5a17ec+_0x172fb9(0x8c)+_0x5a17ec+_0x172fb9(0x8e)+_0x5a17ec+_0x172fb9(0xbb)+_0x5a17ec+_0x172fb9(0xa6)+_0x5a17ec+_0x172fb9(0xaa)+_0x5a17ec+_0x172fb9(0xbd)+_0x5a17ec+_0x172fb9(0xcf)+_0x5a17ec+_0x172fb9(0x8a)+_0x5a17ec+_0x172fb9(0x88)+_0x5a17ec+_0x172fb9(0xbc)+_0x5a17ec+_0x172fb9(0xc9)+_0x5a17ec+'add\x20<numero>\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xae)+_0x5a17ec+'promote\x20@user\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xb9)+_0x5a17ec+'warn\x20@user\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0xc6)+_0x5a17ec+'warns\x20@user\x0a╰─═•⋆ঈ❥☣️❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥🧿❥ঈ⋆•═─╮\x0a╽\x20\x20➣͜͡᳆⃟⋆GRUPO᳆͜͡➣\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x8b)+_0x5a17ec+_0x172fb9(0x99)+_0x5a17ec+_0x172fb9(0xba)+_0x5a17ec+_0x172fb9(0xa2)+_0x5a17ec+'link\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x98)+_0x5a17ec+_0x172fb9(0x82)+_0x5a17ec+_0x172fb9(0xc1)+_0x5a17ec+_0x172fb9(0xb0)+_0x5a17ec+_0x172fb9(0xb7)+_0x5a17ec+'ban\x20@user\x0a├➽\x20'+_0x5a17ec+'unban\x20@user\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x95)+_0x5a17ec+_0x172fb9(0xd0)+_0x5a17ec+'update\x0a├➽\x20'+_0x5a17ec+_0x172fb9(0x89)+_0x5a17ec+_0x172fb9(0x9c)+_0x5a17ec+_0x172fb9(0xc7)+_0x5a17ec+'listreport\x0a├➽\x20$\x0a├➽\x20>\x0a╰─═•⋆ঈ❥🔮❥ঈ⋆•═─╯\x0a\x0a╭╾┅≼☬≽.𓀬.≼☬≽┅╼╮\x0a╽\x20\x20☬✪𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐞𝐬✪☬\x20╽\x0a╿☞𝐓𝐔𝐑𝐁𝐎☬𝐍𝐓𝐑✪.li\x20╿\x0a╰╾┅≼☬≽.𓀬.≼☬≽┅╼╯';});function _0xc909(){var _0x16f433=['profile\x0a├➽\x20','7188100XFULAv','language\x0a├➽\x20','ppt\x0a╰─═•⋆ঈ❥💮❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥🧿❥ঈ⋆•═─╮\x0a╽\x20➣͜͡᳆⃟⋆STICKER᳆͜͡➣\x20\x0a├➽\x20','tiktokaudio\x20<link>\x0a╰─═•⋆ঈ❥🔮❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥⚡❥ঈ⋆•═─╮\x0a╽➣͜͡᳆⃟TEXTMAKER᳆͜͡➣\x0a├➽\x20','fakethumb\x0a├➽\x20','setppgp\x0a├➽\x20','setppbot\x0a├➽\x20','tagall\x0a├➽\x20','welcome\x20on/off\x0a├➽\x20','simulate\x20<welcome/bye>\x0a├➽\x20','5JvicaY','group\x20<open/close>\x0a├➽\x20','attp\x0a╰─═•⋆ঈ❥🧿❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥💝❥ঈ⋆•═─╮\x0a╽\x20➣͜͡᳆⃟⋆PICTURE᳆͜͡➣\x0a├➽\x20','play2\x0a├➽\x20','menu','getimg\x20<text>\x0a├➽\x20','toimg\x0a├➽\x20','addimg\x20<text>\x0a├➽\x20','view\x0a├➽\x20','typewriter\x20<text>\x0a├➽\x20','take\x20<nombre>|<autor>\x0a├➽\x20','infogp\x0a├➽\x20','antidelete\x20on/off\x0a├➽\x20','tomp3\x0a├➽\x20','verdad\x0a├➽\x20','setfakethumb\x0a├➽\x20','girl\x0a├➽\x20','16iLpZsg','imagen\x0a├➽\x20','igdl\x20<link>\x0a├➽\x20','afk\x20<razon>\x0a├➽\x20','antilink\x20on/off\x0a├➽\x20','translate\x20<lang><text>\x0a╰─═•⋆ঈ❥💥❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥🏮❥ঈ⋆•═─╮\x0a╽➣͜͡᳆⃟⋆BUSQUEDA᳆͜͡➣\x0a├➽\x20','29587272hCXFCS','addvid\x20<text>\x0a├➽\x20','banchat\x0a├➽\x20','delbye\x0a├➽\x20','ytsearch\x0a╰─═•⋆ঈ❥🏮❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥🔮❥ঈ⋆•═─╮\x0a╽➣͜͡᳆⃟DOWNLOAD᳆͜͡➣\x0a├➽\x20','play\x0a├➽\x20','unbanchat\x0a├➽\x20','1582311ZPwVmX','reto\x0a├➽\x20','wallpaper\x0a╰─═•⋆ঈ❥💝❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥🍁❥ঈ⋆•═─╮\x0a╽\x20\x20➣͜͡᳆⃟⋆TOOLS᳆͜͡➣\x0a├\x20','kick\x20@user\x0a├➽\x20','playvid\x0a├➽\x20','addpremium\x20@user\x0a├➽\x20','addstick\x20<text>\x0a├➽\x20','chatbot\x20on/off\x0a├➽\x20','owner\x0a├➽\x20','6025278Pbkfid','playstore\x0a├➽\x20','castle\x20<text>\x0a╰─═•⋆ঈ❥⚡❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥🍁❥ঈ⋆•═─╮\x0a╽➣͜͡᳆⃟⋆DATABASE᳆͜͡➣\x0a├➽\x20','delpremium\x20@user\x0a├➽\x20','36YhVwFE','demote\x20@user\x0a├➽\x20','detect\x20on/off\x0a├➽\x20','resetlink\x0a├➽\x20','setname\x20<text>\x0a├➽\x20','hidetag\x0a├➽\x20','seybye\x0a├➽\x20','delvote\x0a├➽\x20','2720494VmyrGW','invite\x20<549xxxx>\x20\x0a╰─═•⋆ঈ❥🧿❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥🔮❥ঈ⋆•═─╮\x0a╽\x20\x20➣͜͡᳆⃟⋆OWNER᳆͜͡➣\x0a├➽\x20','delwelcome\x0a├➽\x20','386886lLfEbP','getvid\x20<text>\x0a├➽\x20','getav\x20<text>\x0a├➽\x20','delwarn\x20@user\x0a├➽\x20','setprefix\x0a├➽\x20','pinterest\x0a├➽\x20','setdesc\x20<text>\x0a├➽\x20','toav\x0a├➽\x20','2333010jkuKOc','sticker\x20<nombre>|<autor>\x0a├➽\x20','12BoyZmG','checkvote\x0a╰─═•⋆ঈ❥💮❥ঈ⋆•═─╯\x0a\x0a╭─═•⋆ঈ❥☣️❥ঈ⋆•═─╮\x0a╽\x20\x20➣͜͡᳆⃟⋆ADMIN᳆͜͡➣\x0a├➽\x20','notify\x0a├➽\x20','grouplist\x0a├➽\x20','nameninja\x20<text>\x0a├➽\x20','report\x20<text>\x0a╰•⋆҈͜͡➣⋆⋆҈͜͡\x20⋆⸙⋆҈͜͡✪⋆҈͜͡\x20⋆⸙⋆҈͜͡\x20◄⋆҈͜͡•╯\x0a\x0a≡\x20List\x20Menu\x0a\x0a╭─═•⋆ঈ❥🔮❥ঈ⋆•═─╮\x0a╽\x20\x20\x20➣͜͡᳆⃟⋆FUN᳆͜͡➣\x0a├➽\x20'];_0xc909=function(){return _0x16f433;};return _0xc909();}
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://youtu.be/BEzODBDiuMg', 'YOUTUBE', 'https://github.com/', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
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
