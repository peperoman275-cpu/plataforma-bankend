const cron = require('cron');
const pool = require('./db');

// Job diario a medianoche
const job = new cron.CronJob('0 0 * * *', async () => {
  try {
    // Seleccionar todas las cuentas
    const [cuentas] = await pool.query('SELECT id FROM cuentas_sociales');

    for (const cuenta of cuentas) {
      // Aquí deberías llamar a la API real de cada plataforma para obtener métricas
      // Ejemplo ficticio: seguidores=1000, likes=200, comentarios=50
      const seguidores = 1000;
      const likes = 200;
      const comentarios = 50;

      await pool.query(
        'INSERT INTO metricas_sociales (cuenta_id, seguidores, likes, comentarios) VALUES (?, ?, ?, ?)',
        [cuenta.id, seguidores, likes, comentarios]
      );
    }

    console.log('Métricas diarias insertadas automáticamente');
  } catch (error) {
    console.error('Error en cron job:', error);
  }
}, null, true, 'America/Mexico_City');

module.exports = job;
