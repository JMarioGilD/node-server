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
  return new Promise((resolve, reject) => {
    rl.question('Número de tarea a eliminar: ', (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        const taskToDelete = tasks[index];

        rl.question(`¿Estás seguro de que deseas eliminar la tarea "${taskToDelete.indicator}: ${taskToDelete.description}"? (Si/No): `, (confirmation) => {
          if (confirmation.toLowerCase() === 'si') {
            tasks.splice(index, 1);
            resolve('Tarea eliminada con éxito.');
          } else {
            reject('Eliminación cancelada.');
          }
        });
      } else {
        reject('¡Número de tarea inválido!');
      }
    });
  });
}

// Función para marcar una tarea como completada
function completeTask() {
  return new Promise((resolve, reject) => {
    rl.question('Número de tarea completada: ', (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        resolve('Tarea marcada como completada.');
      } else {
        reject('¡Número de tarea inválido!');
      }
    });
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

// Función para obtener entrada del usuario
function getInput(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Función para mostrar el menú principal
async function showMenu() {
  console.log('Opciones:');
  console.log('1. Agregar nueva tarea');
  console.log('2. Ver lista de tareas');
  console.log('3. Marcar tarea como completada');
  console.log('4. Eliminar tarea');
  console.log('5. Salir');

  const option = await getInput('Ingrese el número de la opción: ');

  switch (option) {
    case '1':
      try {
        const message = await addTask();
        console.log(message);
      } catch (error) {
        console.log(error);
      }
      break;
    case '2':
      showTasks();
      break;
    case '3':
      completeTask()
        .then((message) => {
          console.log(message);
          showMenu();
        })
        .catch((error) => {
          console.log(error);
          showMenu();
        });
      break;
    case '4':
      deleteTask()
        .then((message) => {
          console.log(message);
          showMenu();
        })
        .catch((error) => {
          console.log(error);
          showMenu();
        });
      break;
    case '5':
      rl.close();
      break;
    default:
      console.log('¡Opción inválida!\n');
      await showMenu();
      break;
  }
}

console.log('Bienvenido a la lista de tareas.');

// Iniciar la aplicación mostrando el menú
showMenu();

