let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw '*_️𝐢𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐬𝐮𝐠𝐞𝐫𝐢𝐫._*'
    if (text.length < 10) throw '*_𝐄𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐬𝐮𝐫𝐠𝐞𝐫𝐢𝐫 𝐝𝐞𝐛𝐞 𝐝𝐞 𝐭𝐞𝐧𝐞𝐫 𝐦𝐚𝐬 𝐝𝐞 10 𝐜𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐞𝐬._*'
    if (text.length > 1000) throw '*_Máximo 1000 caracteres para enviar el comando sugerido._*'
    let teks = `*[ COMANDO SUGERIDO ]*\n\n*• Usuario:* @${m.sender.split`@`[0]}\n*• Texto:* ${text}`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
    m.reply('*_El comando sugerido se envío a mi creador, cualquier cosa mi creador se comunicara contigo._*')
}
handler.help = ['agregarcomandos']
handler.tags = ['info']
handler.command = /^(sugerencia|sugg|sup|coman)$/i

export default handler