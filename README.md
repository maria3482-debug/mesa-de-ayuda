# Mesa de Ayuda Técnica – API REST

**Asignatura:** Programación Aplicada
**Caso de uso asignado:** Caso 3 – Mesa de ayuda técnica

## Integrantes
1. Salome Correa
2. Karol Hurtado
3. Santiago Hernández
4. Sebastián González
5. Tatiana Trujillo
6. Yeider Rodríguez

## Descripción
API REST hecha con Node.js y Express para registrar y dar seguimiento a solicitudes de soporte técnico (tickets), con prioridad, estado y técnico asignado. Los datos se guardan en memoria, por lo que se reinician cuando el servidor se reinicia.

## Enlaces
- **URL pública (Render):** _pegar aquí_
- **Repositorio (GitHub):** https://github.com/maria3482-debug/mesa-de-ayuda

## Cómo ejecutarlo
```bash
npm install
npm start
```
El servidor queda en el puerto 3000 (o el que defina la variable `PORT`).

## Endpoints

| Método | Ruta | Qué hace |
|---|---|---|
| GET | /api/tickets | Lista tickets. Filtros: `?estado=` y `?prioridad=` |
| GET | /api/tickets/:id | Consulta un ticket por id |
| POST | /api/tickets | Crea un ticket |
| PUT | /api/tickets/:id | Edita, cambia estado/prioridad, asigna técnico o cierra |
| DELETE | /api/tickets/:id | Elimina un ticket |
| GET | /api/tecnicos | Lista técnicos |
| POST | /api/tecnicos | Registra un técnico |

Valores permitidos: prioridad = `baja`, `media`, `alta`; estado = `abierto`, `en atención`, `cerrado`.

## Ejemplos con curl
Cambiar `URL` por la dirección de Render (o `http://localhost:3000`).

```bash
# Listar tickets (con filtros)
curl "URL/api/tickets?estado=abierto&prioridad=alta"

# Consultar un ticket
curl URL/api/tickets/1

# Crear un ticket
curl -X POST URL/api/tickets -H "Content-Type: application/json" \
  -d '{"titulo":"No hay internet","descripcion":"Sala 3 sin red","prioridad":"alta"}'

# Asignar técnico / cambiar estado / cerrar
curl -X PUT URL/api/tickets/1 -H "Content-Type: application/json" \
  -d '{"tecnico_id":1,"estado":"en atención"}'

# Eliminar un ticket
curl -X DELETE URL/api/tickets/1

# Listar técnicos
curl URL/api/tecnicos

# Registrar un técnico
curl -X POST URL/api/tecnicos -H "Content-Type: application/json" \
  -d '{"nombre":"Ana Ruiz","especialidad":"Base de Datos"}'
```

## Metodología
Scrum simplificado en 3 sprints (ver `requisitos.md`, `diseno.md` y `pruebas.md`).
