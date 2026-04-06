const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const listEndpoints = require('express-list-endpoints'); // 👈 agregado

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const socialRoutes = require('./routes/socialRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const planesRoutes = require('./routes/planesRoutes');
const cuentasRoutes = require('./routes/cuentasRoutes');
const metricasRoutes = require('./routes/metricasRoutes');

// Usar rutas con prefijo /api
app.use('/api/auth', authRoutes);
app.use('/api/social', socialRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/planes', planesRoutes);
app.use('/api/cuentas', cuentasRoutes);
app.use('/api/metricas', metricasRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('Backend activo en Azure con Express');
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo centralizado de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Levantar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);

  // Listar rutas registradas de forma segura
  console.log(listEndpoints(app));
});
