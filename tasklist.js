const readline = require('readline');

// Arreglo para almacenar las tareas
const tasks = [];

// Crear la interfaz de lectura y escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para agregar una tarea
function addTask() {
  rl.question('Indicador de la tarea: ', (indicator) => {
    rl.question('Descripción de la tarea: ', (description) => {
      // Validar que ni el indicador ni la descripción estén en blanco
      if (indicator.trim() === '' || description.trim() === '') {
        console.log('Indicador y descripción no pueden estar en blanco.\n');
      } else {
        const task = {
          indicator,
          description,
          completed: false
        };
        tasks.push(task);
        console.log('Tarea creada con éxito.\n');
      }
      showMenu();
    });
  });
}

// Función para eliminar una tarea
function deleteTask() {
  rl.question('Número de tarea a eliminar: ', (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      const taskToDelete = tasks[index];

      // Solicitar confirmación antes de eliminar
      rl.question(`¿Estás seguro de que deseas eliminar la tarea "${taskToDelete.indicator}: ${taskToDelete.description}"? (Si/No): `, (confirmation) => {
        if (confirmation.toLowerCase() === 'si' || confirmation.toLowerCase() === 'si') {
          tasks.splice(index, 1);
          console.log('Tarea eliminada con éxito.\n');
        } else {
          console.log('Eliminación cancelada.\n');
        }
        showMenu();
      });
    } else {
      console.log('¡Número de tarea inválido!\n');
      showMenu();
    }
  });
}

// Función para marcar una tarea como completada
function completeTask() {
  rl.question('Número de tarea completada: ', (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Tarea marcada como completada.\n');
    } else {
      console.log('¡Número de tarea inválido!\n');
    }
    showMenu();
  });
}

// Función para mostrar la lista de tareas
function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${index + 1}. [${status}] ${task.indicator}: ${task.description}`);
  });
  console.log();
  showMenu();
}

// Función para mostrar el menú principal
function showMenu() {
  console.log('Opciones:');
  console.log('1. Agregar nueva tarea');
  console.log('2. Ver lista de tareas');
  console.log('3. Marcar tarea como completada');
  console.log('4. Eliminar tarea');
  console.log('5. Salir');

  rl.question('Ingrese el número de la opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        showTasks();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        deleteTask();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('¡Opción inválida!\n');
        showMenu();
        break;
    }
  });
}

console.log('Bienvenido a la lista de tareas.');

// Iniciar la aplicación mostrando el menú
showMenu();

