let handler = async (m, { conn, text, command }) => {
    let yh = global.anime
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ wallpapers - ɪѕ BEATIFUL 🥺`.trim(), author, url, [['🌷 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🌷 ', `/${command}`]], m)
  }
  handler.command = /^(montaña)$/i
  handler.tags = ['montaña']
  handler.help = ['montaña']
  export default handler
  
  global.montaña = [
    "https://api-reysekha.herokuapp.com/api/wallpaper/mountain?apikey=APIKEY",
  ]
