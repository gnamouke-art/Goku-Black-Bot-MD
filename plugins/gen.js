let handler = async function (m, { conn, text, usedPrefix }) {
    if (!text) {
        conn.sendMessage(m.chat, '¡Por favor, ingresa un BIN!', m.reply);
        return;
    }

    try {
        // Extraer BIN del texto del usuario
        const binNumber = text.trim();
        
        // Generar tarjeta a partir del BIN
        let tarjetaGenerada = generarTarjeta(binNumber);

        // Responder con los detalles de la tarjeta generada
        const mensaje = `*Tarjeta Generada:*\n\nNúmero: ${tarjetaGenerada.numero}\nFecha de Vencimiento: ${tarjetaGenerada.fecha}\nCVV: ${tarjetaGenerada.cvv}`;

        conn.sendMessage(m.chat, mensaje, replyMessage);
    } catch (error) {
        console.error('Error al generar tarjeta:', error);
        conn.sendMessage(m.chat, '¡Ocurrió un error al generar la tarjeta!', m.reply);
    }
}

// Función para generar tarjeta a partir del BIN
function generarTarjeta(BIN) {
    let tarjeta = {};
    // Validar y generar datos de la tarjeta
    tarjeta.numero = generarNumero(BIN);
    tarjeta.fecha = generarFechaVenc();
    tarjeta.cvv = generarCVV();

    return tarjeta;
}

// Función para generar número de tarjeta
function generarNumero(BIN) {
    let numero = BIN;
    while (numero.length < 16) {
        numero += randomInt(0, 9).toString();
    }
    return numero;
}

// Función para generar fecha de vencimiento
function generarFechaVenc() {
    let mes = randomInt(1, 12);
    if (mes < 10) mes = `0${mes}`;
    let anio = randomInt(25, 30);
    return `${mes}/${anio}`;
}

// Función para generar CVV
function generarCVV() {
    return randomInt(100, 999).toString();
}

// Definición del comando con expresión regular
handler.command = ['generar']

handler.onCommand = async function (m, { conn, text, usedPrefix }) {
    await handler(m, { conn, text, usedPrefix });
}

export default handler;