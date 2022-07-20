let handler = async (m, { conn, text, command }) => {
    let yh = global.kurumi
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ kurumi - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['🍥 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🍥 ', `/${command}`]], m)
  }
  handler.command = /^(kurumi)$/i
  handler.tags = ['kurumi']
  handler.help = ['kurumi']
  export default handler
  
  global.kurumi = [
    "https://api-reysekha.herokuapp.com/api/wallpaper/kurumi?apikey=APIKEY",
  ]
