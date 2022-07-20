let handler = async (m, { conn, text, command }) => {
    let yh = global.miku
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ miku - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['🍥 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🍥 ', `/${command}`]], m)
  }
  handler.command = /^(miku)$/i
  handler.tags = ['miku']
  handler.help = ['miku']
  export default handler
  
  global.miku = [
    "https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=APIKEY",
  ]
