let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('.... ')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) return m.reply('💫 𝖨𝖭𝖦𝖱𝖤𝖲𝖠 𝖴𝖭 𝖢𝖠𝖫𝖢𝖴𝖫𝖮 𝖯𝖠𝖱𝖠 𝖢𝖠𝖫𝖢𝖴𝖫𝖠𝖱

𝖲𝖮𝖫𝖮 𝖲𝖤 *𝖠𝖣𝖬𝖨𝖳𝖤𝖭* 𝖫𝖮𝖲 𝖲𝖨𝖦𝖴𝖨𝖤𝖭𝖳𝖤𝖲 *𝖯𝖠𝖱𝖠𝖬𝖤𝖳𝖱𝖮𝖲* 𝖯𝖠𝖱𝖠 𝖢𝖠𝖫𝖢𝖴𝖫𝖠𝖱:

◇ *+* = 𝖲𝖴𝖬𝖠
◇ *-* = 𝖱𝖤𝖲𝖳𝖠
◇ *×* = 𝖬𝖴𝖫𝖳𝖨𝖯𝖫𝖨𝖢𝖠𝖱
◇ *÷* = 𝖣𝖨𝖵𝖨𝖣𝖨𝖱
◇ *e* = 𝖦𝖱𝖠𝖥𝖨𝖢𝖮 𝖤
◇ *π* = 𝖦𝖱𝖠𝖥𝖨𝖢𝖮 𝖯𝖨')
    return m.reply('Formato incorrecto, solo 0-9 y símbolo -, +, *, /, ×, ÷, π, e, (, ) que puedes usar')
  }
}
handler.help = ['cal *<ecuacion>*']
handler.tags = ['tools']
handler.command = ['cal', 'calc', 'calcular', 'calculadora'] 
handler.register = true 

export default handler