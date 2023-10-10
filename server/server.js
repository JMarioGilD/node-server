const express = require('express');
const app = express();

// Arreglo para almacenar las tareas
const tasks = [
  {
    id: 1,
    description: 'Tarea 1',
    completed: false
  },
  {
    id: 2,
    description: 'Tarea 2',
    completed: true
  },
  {
    id: 3,
    description: 'Tarea 3',
    completed: false
  }
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
