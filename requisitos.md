# Requisitos – Mesa de Ayuda Técnica (Caso 3)

## Actores
- **Usuario / Solicitante:** reporta una falla o incidente técnico y registra la solicitud inicial.
- **Técnico de soporte:** revisa, diagnostica, atiende y cierra los tickets asignados.
- **Administrador / Gestionador:** supervisa el flujo de trabajo, asigna o reasigna tickets y gestiona el catálogo de técnicos.

## Requisitos funcionales
- **RF1 (CRUD de tickets).** El sistema debe permitir crear, listar, consultar, actualizar y cerrar tickets de soporte técnico.
- **RF2 (Asignación de técnicos).** El sistema debe permitir asignar un ticket a un técnico del equipo de soporte.
- **RF3 (Estados y prioridades).** El sistema debe permitir modificar la prioridad del ticket (baja, media, alta) y su estado (abierto, en atención, cerrado).
- **RF4 (Filtrado).** El sistema debe permitir filtrar tickets por prioridad o por estado.
- **RF5 (Gestión de técnicos).** El sistema debe permitir consultar y registrar técnicos con su nombre y especialidad.

## Requisitos no funcionales
- **RNF1.** La API REST debe responder exclusivamente en formato JSON.
- **RNF2.** Los campos obligatorios (título, descripción, prioridad) deben validarse antes de guardar, para evitar registros vacíos o inconsistentes.
- **RNF3.** La aplicación debe ser accesible desde cualquier navegador web moderno, sin software adicional.
- **RNF4.** La interfaz (si se desarrolla) debe dar retroalimentación visual inmediata: estados de carga y animaciones suaves.
