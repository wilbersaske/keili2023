import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['💎 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 💎', `/${command}`]],m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
