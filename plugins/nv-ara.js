import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = '.https://github.com/wilbersasuke/TheMystic-Bot-MD/raw/master/media/Ara.mp3'
conn.sendFile(m.chat, vn, 'Ara.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ara ara/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
