let handler = async (m, { conn, text, command }) => {
    let yh = global.nezuko
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ demon slayer - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['🍥 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🍥 ', `/${command}`]], m)
  }
  handler.command = /^(nezuko)$/i
  handler.tags = ['nezuko']
  handler.help = ['nezuko']
  export default handler
  
  global.nezuko = [
    "https://api-reysekha.herokuapp.com/api/wallpaper/nezuko?apikey=apirey",
  ]
