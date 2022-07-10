let handler = async (m, { conn, text, command }) => {
    let yh = global.anime
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ sasuke - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['🍥 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🍥 ', `/${command}`]], m)
  }
  handler.command = /^(itori)$/i
  handler.tags = ['sasuke']
  handler.help = ['sasuke']
  export default handler
  
  global.anime = [
    "https://api-reysekha.herokuapp.com/api/wallpaper/sasuke?apikey=APIKEY",
  ]