let handler = async (m, { conn }) => {
let vn = './media/presentate.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/glass', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*࿁࿁࿁⸺🌺𝐖𝐄𝐋𝐂𝐎𝐌𝐄🌺⸺࿁࿁࿁                ••••••••••••••••••••••••••••••••••           •┏━━━━━━━━━                                        •┣⁃⭐ 𝐅𝐎𝐓𝐎:                                                                      •┃                                                                                               •┣⁃⭐ 𝐍𝐎𝐌𝐁𝐑𝐄:                                                                  •┃                                                             •┣⁃⭐ 𝐄𝐃𝐀𝐃:                                                                        •┃                                                                             •┣⁃⭐ 𝐏𝐀𝐈𝐒:                                                             •┃                             •┗━━━━━━━━━                 ••••••••••••••••••••••••••••••••••                                                                                          ⪢⫷⫸⫷⫸⫷⫸⫷⫸⫷⫸⫷*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['presentate']
handler.tags = ['maker']
handler.command = /^(presentate)$/i
export default handler
