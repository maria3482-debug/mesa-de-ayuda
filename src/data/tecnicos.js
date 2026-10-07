let tecnicos = [
  { id: 1, nombre: 'Laura Gómez', especialidad: 'Redes' },
  { id: 2, nombre: 'Carlos Pérez', especialidad: 'Hardware' }
];
let siguienteId = 3;

function obtenerTodos() {
  return tecnicos;
}

function obtenerPorId(id) {
  return tecnicos.find(t => t.id === id);
}

function crear(datos) {
  const nuevo = { id: siguienteId++, ...datos };
  tecnicos.push(nuevo);
  return nuevo;
}

module.exports = { obtenerTodos, obtenerPorId, crear };
