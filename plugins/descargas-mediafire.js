import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) throw m.reply(`${emoji} Por favor, ingresa un link de mediafire.`);
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
        let ouh = await fetch(`https://api.agatz.xyz/api/mediafire?url=${text}`)
  let gyh = await ouh.json() 
        await conn.sendFile(m.chat, gyh.data[0].link, let text = '*\`乂  M E D I A F I R E\`*\n\n';
    text += `» *Título:* ${name}\n`;
    text += `» *Tamaño:* ${size}\n`;
    text += `» *MIME:* ${mime}\n\n`;
    text += `> ${dev}`, m)       
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['mediafire']
handler.tags = ['descargas']
handler.command = ['mf', 'mediafire']
handler.coin = 10
handler.register = true
handler.group = true

export default handler