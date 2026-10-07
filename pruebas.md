# Pruebas – Mesa de Ayuda Técnica

> Llenar las columnas "Resultado obtenido" y "¿Pasó?" al probar cada caso.
> Quien probó: _______  (debe ser distinto de quien programó la ruta)

| # | Endpoint | Caso | Entrada | Resultado esperado | Resultado obtenido | ¿Pasó? |
|---|---|---|---|---|---|---|
| 1 | POST /api/tickets | Camino feliz | `{"titulo":"No hay internet","descripcion":"Sala 3 sin red","prioridad":"alta"}` | 201 y ticket con estado "abierto" | | |
| 2 | POST /api/tickets | Falta prioridad | `{"titulo":"X","descripcion":"Y"}` | 400 con mensaje de error | | |
| 3 | POST /api/tickets | Prioridad inválida | `{"titulo":"X","descripcion":"Y","prioridad":"urgente"}` | 400 | | |
| 4 | GET /api/tickets | Listar | – | 200 y arreglo JSON | | |
| 5 | GET /api/tickets?estado=abierto | Filtro por estado | – | Solo tickets abiertos | | |
| 6 | GET /api/tickets?prioridad=alta | Filtro por prioridad | – | Solo prioridad alta | | |
| 7 | GET /api/tickets/1 | Camino feliz | – | 200 y el ticket | | |
| 8 | GET /api/tickets/999 | Id inexistente | – | 404 | | |
| 9 | PUT /api/tickets/1 | Asignar técnico | `{"tecnico_id":1}` | 200 con tecnico_id = 1 | | |
| 10 | PUT /api/tickets/1 | Técnico inexistente | `{"tecnico_id":99}` | 400 | | |
| 11 | PUT /api/tickets/1 | Cambiar estado | `{"estado":"en atención"}` | 200 | | |
| 12 | PUT /api/tickets/1 | Estado inválido | `{"estado":"pendiente"}` | 400 | | |
| 13 | PUT /api/tickets/1 | Cerrar ticket | `{"estado":"cerrado"}` | 200 y estado "cerrado" | | |
| 14 | PUT /api/tickets/999 | Id inexistente | `{"estado":"cerrado"}` | 404 | | |
| 15 | DELETE /api/tickets/1 | Camino feliz | – | 204 | | |
| 16 | DELETE /api/tickets/999 | Id inexistente | – | 404 | | |
| 17 | GET /api/tecnicos | Listar | – | 200 y arreglo JSON | | |
| 18 | POST /api/tecnicos | Camino feliz | `{"nombre":"Ana Ruiz","especialidad":"Base de Datos"}` | 201 | | |
| 19 | POST /api/tecnicos | Falta especialidad | `{"nombre":"Ana Ruiz"}` | 400 | | |

## Pruebas contra la URL pública de Render
Repetir al menos 3 de las pruebas anteriores con la URL de Render y anotar aquí que dieron el mismo resultado:

- Prueba # ___ : 
- Prueba # ___ : 
- Prueba # ___ : 
