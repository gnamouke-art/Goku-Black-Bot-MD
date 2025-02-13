const handler = {
 adivinanzas: [
        {
            pregunta: "¿Qué tiene un ojo pero no puede ver?",
            respuesta: "La aguja"
        },
        {
            pregunta: "¿Qué es lo que sube y nunca baja?",
            respuesta: "La edad"
        },
        {
            pregunta: "¿Qué tiene cabeza, pero no tiene cerebro?",
            respuesta: "El ajo"
        }
    ],
    jugar: function() {
        const randomIndex = Math.floor(Math.random() * this.adivinanzas.length);
        const adivinanza = this.adivinanzas[randomIndex];

        console.log(adivinanza.pregunta);
        
 adivinanza.respuesta
    }
};

handler.tags = ['downloader'];
handler.help = ['aleatorio'];
handler.command = ['aleatorio'];
handler.register = true;

export default handler;