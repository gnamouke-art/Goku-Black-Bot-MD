//XD
const handler = {
    command: ['Mascotas', 'Mascota'],
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

// Simular la ejecución del comando
if (handler.command.includes('Mascotas') || handler.command.includes('Mascota')) {
    handler.execute();
}
