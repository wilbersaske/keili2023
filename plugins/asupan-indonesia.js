let handler = async (m, { conn, text, command }) => {
    let yh = global.indo
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ ʟᴏʟɪ - ɪѕ ᴄᴜᴛᴇ 🥺`.trim(), author, url, [['🌷 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🌷 ', `/${command}`]], m)
  }
  handler.command = /^(indo)$/i
  handler.tags = ['indo']
  handler.help = ['indo']
  export default handler
  
  global.indo = [
    "https://api.zacros.my.id/asupan/cecan",
  ]
