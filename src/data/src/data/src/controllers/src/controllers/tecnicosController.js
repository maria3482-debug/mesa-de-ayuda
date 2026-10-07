const data = require('../data/tecnicos');

function listar(req, res) {
  res.json(data.obtenerTodos());
}

function crear(req, res) {
  const { nombre, especialidad } = req.body;
  if (!nombre || !especialidad) {
    return res.status(400).json({ error: 'nombre y especialidad son obligatorios' });
  }
  const nuevo = data.crear({ nombre, especialidad });
  res.status(201).json(nuevo);
}

module.exports = { listar, crear };
