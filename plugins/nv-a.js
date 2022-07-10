import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let nv = './media/a.mp3'
conn.sendFile(m.chat, nv, 'a.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/
export default handler
