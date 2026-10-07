# Diseño – Mesa de Ayuda Técnica (Caso 3)

## 1. Modelo de datos

### Entidad: Ticket
| Campo | Tipo | Obligatorio | Observación |
|---|---|---|---|
| id | número entero | Sí (autogenerado) | Clave primaria |
| titulo | texto | Sí | Resumen breve de la falla |
| descripcion | texto | Sí | Detalle de la incidencia |
| prioridad | texto | Sí | "baja", "media" o "alta" |
| estado | texto | Sí | "abierto" (por defecto), "en atención" o "cerrado" |
| tecnico_id | número entero | No | Id del técnico asignado (null si no tiene) |
| fecha_creacion | fecha/hora | Sí (automático) | Se genera al crear el ticket |

### Entidad: Técnico
| Campo | Tipo | Obligatorio | Observación |
|---|---|---|---|
| id | número entero | Sí (autogenerado) | Clave primaria |
| nombre | texto | Sí | Nombre completo |
| especialidad | texto | Sí | Ej.: Redes, Hardware, Base de Datos |

## 2. Rutas de la API

| Método | Ruta | Qué hace |
|---|---|---|
| GET | /api/tickets | Lista tickets. Filtros: `?estado=` y `?prioridad=` |
| GET | /api/tickets/:id | Consulta un ticket por id |
| POST | /api/tickets | Crea un ticket nuevo |
| PUT | /api/tickets/:id | Edita datos, cambia estado/prioridad, asigna técnico o cierra |
| DELETE | /api/tickets/:id | Elimina un ticket |
| GET | /api/tecnicos | Lista los técnicos |
| POST | /api/tecnicos | Registra un técnico nuevo |

## 3. Estructura de carpetas
```
/mesa-de-ayuda
  /src
    /routes        → define las rutas
    /controllers   → lógica de cada acción y validaciones
    /data          → datos en memoria (arreglos)
  index.js         → arranca el servidor Express
  package.json
  requisitos.md
  diseño.md
  pruebas.md
  README.md
```
