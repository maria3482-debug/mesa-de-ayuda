const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Mesa de Ayuda funcionando' });
});

app.use('/api/tickets', require('./src/routes/tickets'));
app.use('/api/tecnicos', require('./src/routes/tecnicos'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT));
