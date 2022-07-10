import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'
let url = pack[Math.floor(Math.random() * pack.length)]
conn.sendButton(m.chat, `_🥵 keili 🥵_`, author, url, [['🔥𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄🔥', `/${command}`]], m)
}
handler.help = ['keili']
handler.tags = ['internet']
handler.command = /^(keili)$/i
export default handler

global.pack = [
  "https://lh4.googleusercontent.com/RF1Vzu7ZjIUGBHTwhxSAeCuX68YmqEb4ozN5c8vUwJoLcoH47-kLXTvNCRpw79rSMKVCXBBHUL5jeQ=w2450-h4825",
  "https://lh4.googleusercontent.com/RF1Vzu7ZjIUGBHTwhxSAeCuX68YmqEb4ozN5c8vUwJoLcoH47-kLXTvNCRpw79rSMKVCXBBHUL5jeQ=w2450-h4825",
  "https://lh4.googleusercontent.com/RF1Vzu7ZjIUGBHTwhxSAeCuX68YmqEb4ozN5c8vUwJoLcoH47-kLXTvNCRpw79rSMKVCXBBHUL5jeQ=w2450-h4825",

]
