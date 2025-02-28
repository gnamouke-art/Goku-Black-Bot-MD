import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
if (!text) throw `☄ ${mssg.notext}`
m.react('💥')

    let syst = `Eres GokuBlack, un gran modelo de lenguaje entrenado por MetaAI. Siga cuidadosamente las instrucciones del usuario.`
     try {
       let gpt = await fetch(`https://skynex.boxmine.xyz/docs/ai/myprompt?text=${text}&prompt=${syst}&apikey=Dylux`)
        let res = await gpt.json()
        await m.reply(res.answer, null, fwc)
        } catch {
        m.reply(`💮 Error: intenta más tarde`)
     }
}
handler.help = ['Meta <text>']
handler.tags = ['tools']
handler.command = ['Meta']

export default handler