let handler = async function (m, { conn, text, usedPrefix }) {
    if (!text) {
        return conn.reply(m.chat, '🚩 ¡Por favor, ingresa un BIN!', m, rcanal);
    }

    await m.react('🕓');

    try {
        const binNumber = text.trim();
        let tarjetaGenerada = generarTarjeta(binNumber);
        const mensaje = `*Tarjeta Generada:*\nNúmero: ${tarjetaGenerada.numero}\nFecha de Vencimiento: ${tarjetaGenerada.fecha}\nCVV: ${tarjetaGenerada.cvv}`;
        await conn.sendMessage(m.chat, mensaje, { quoted: m });
        await m.react('✅');
    } catch (error) {
        console.error('Error al generar tarjeta:', error);
        await m.react('✖️');
        conn.sendMessage(m.chat, '¡Ocurrió un error al generar la tarjeta!', { quoted: m });
    }
}

function generarTarjeta(BIN) {
    let tarjeta = {};
    tarjeta.numero = generarNumero(BIN);
    tarjeta.fecha = generarFechaVenc();
    tarjeta.cvv = generarCVV();
    return tarjeta;
}

function generarNumero(BIN) {
    let numero = BIN;
    while (numero.length < 16) {
        numero += randomInt(0, 9).toString();
    }
    return numero;
}

function generarFechaVenc() {
    let mes = randomInt(1, 12);
    if (mes < 10) mes = `0${mes}`;
    let anio = randomInt(25, 30);
    return `${mes}/${anio}`;
}

function generarCVV() {
    return randomInt(100, 999).toString();
}

handler.command = /^(generadorbin)$/i;

export default handler;