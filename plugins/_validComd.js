//XD
const handler = {
    execute: function() {
        const mascotas = [
            'Perro',
            'Gato',
            'Loro',
            'Tortuga',
            'Conejo',
            'Hámster',
            'Pez',
            'Iguana'
        ];

        const mascotaAleatoria = mascotas[Math.floor(Math.random() * mascotas.length)];
        console.log(`¡Tu mascota aleatoria es: ${mascotaAleatoria}!`);
    }
};
handler.tags = ['Game'];
handler.help = ['Mascotas'];
handler.command = ['Mascotas'];
handler.register = true;

export default handler;