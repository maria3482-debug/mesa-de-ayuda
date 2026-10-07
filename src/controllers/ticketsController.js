const data = require('../data/tickets');
const dataTecnicos = require('../data/tecnicos');

const prioridadesValidas = ['baja', 'media', 'alta'];
const estadosValidos = ['abierto', 'en atención', 'cerrado'];

// GET /api/tickets?estado=...&prioridad=...
function listar(req, res) {
  let resultado = data.obtenerTodos();
  const { estado, prioridad } = req.query;
  if (estado) resultado = resultado.filter(t => t.estado === estado);
  if (prioridad) resultado = resultado.filter(t => t.prioridad === prioridad);
  res.json(resultado);
}

// GET /api/tickets/:id
function obtener(req, res) {
  const id = parseInt(req.params.id);
  const ticket = data.obtenerPorId(id);
  if (!ticket) return res.status(404).json({ error: 'Ticket no encontrado' });
  res.json(ticket);
}

// POST /api/tickets
function crear(req, res) {
  const { titulo, descripcion, prioridad } = req.body;
  if (!titulo || !descripcion || !prioridad) {
    return res.status(400).json({ error: 'titulo, descripcion y prioridad son obligatorios' });
  }
  if (!prioridadesValidas.includes(prioridad)) {
    return res.status(400).json({ error: 'prioridad debe ser baja, media o alta' });
  }
  const nuevo = data.crear({
    titulo,
    descripcion,
    prioridad,
    estado: 'abierto',
    tecnico_id: null,
    fecha_creacion: new Date().toISOString()
  });
  res.status(201).json(nuevo);
}

// PUT /api/tickets/:id  (editar, cambiar estado/prioridad, asignar técnico, cerrar)
function actualizar(req, res) {
  const id = parseInt(req.params.id);
  const { titulo, descripcion, prioridad, estado, tecnico_id } = req.body;

  if (!data.obtenerPorId(id)) {
    return res.status(404).json({ error: 'Ticket no encontrado' });
  }
  if (prioridad !== undefined && !prioridadesValidas.includes(prioridad)) {
    return res.status(400).json({ error: 'prioridad debe ser baja, media o alta' });
  }
  if (estado !== undefined && !estadosValidos.includes(estado)) {
    return res.status(400).json({ error: 'estado debe ser abierto, en atención o cerrado' });
  }
  if (tecnico_id !== undefined && tecnico_id !== null && !dataTecnicos.obtenerPorId(tecnico_id)) {
    return res.status(400).json({ error: 'El técnico asignado no existe' });
  }
  if (titulo !== undefined && !titulo) {
    return res.status(400).json({ error: 'titulo no puede estar vacío' });
  }
  if (descripcion !== undefined && !descripcion) {
    return res.status(400).json({ error: 'descripcion no puede estar vacía' });
  }

  // Solo se actualizan los campos permitidos (id y fecha_creacion no se tocan)
  const cambios = {};
  if (titulo !== undefined) cambios.titulo = titulo;
  if (descripcion !== undefined) cambios.descripcion = descripcion;
  if (prioridad !== undefined) cambios.prioridad = prioridad;
  if (estado !== undefined) cambios.estado = estado;
  if (tecnico_id !== undefined) cambios.tecnico_id = tecnico_id;

  res.json(data.actualizar(id, cambios));
}

// DELETE /api/tickets/:id
function eliminar(req, res) {
  const id = parseInt(req.params.id);
  const exito = data.eliminar(id);
  if (!exito) return res.status(404).json({ error: 'Ticket no encontrado' });
  res.status(204).send();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
