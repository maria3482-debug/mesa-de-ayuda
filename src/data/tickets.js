let tickets = [];
let siguienteId = 1;

function obtenerTodos() {
  return tickets;
}

function obtenerPorId(id) {
  return tickets.find(t => t.id === id);
}

function crear(datos) {
  const nuevo = { id: siguienteId++, ...datos };
  tickets.push(nuevo);
  return nuevo;
}

function actualizar(id, datos) {
  const ticket = obtenerPorId(id);
  if (!ticket) return null;
  Object.assign(ticket, datos);
  return ticket;
}

function eliminar(id) {
  const index = tickets.findIndex(t => t.id === id);
  if (index === -1) return false;
  tickets.splice(index, 1);
  return true;
}

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };
