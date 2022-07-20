let handler = async (m, { conn, text, command }) => {
    let yh = global.videololi
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ Video Lolis - ɪѕ BEATIFUL 🥺`.trim(), author, url, [['🌷 𝐒 𝐈 𝐆 𝐔 𝐈 𝐄 𝐍 𝐓 𝐄 🌷 ', `/${command}`]], m)
  }
  handler.command = /^(videololi)$/i
  handler.tags = ['videololi']
  handler.help = ['videololi']
  export default handler
  
  global.videololi = [
    "https://api.zacros.my.id/asupan/loli",
  ]
