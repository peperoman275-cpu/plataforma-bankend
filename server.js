const express = require('express');
const app = express();
const cuentasRoutes = require('./routes/cuentasRoutes');
const metricasRoutes = require('./routes/metricasRoutes');

app.use(express.json());
app.use('/api', cuentasRoutes);
app.use('/api', metricasRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

const job = require('./cronJobs');
job.start();
