let handler = async (m, { conn, text, command }) => {
    let yh = global.anime
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ ANIME - ɪѕ BEATIFUL 🥺`.trim(), "author" : "ShanBot",, url, [['🌷 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🌷 ', `/${command}`]], m)
  }
  handler.command = /^(anime)$/i
  handler.tags = ['anime']
  handler.help = ['anime']
  export default handler
  
  global.anime = [
    "https://api-reysekha.herokuapp.com/api/wallpaper/anime?apikey=APIKEY",
  ]
