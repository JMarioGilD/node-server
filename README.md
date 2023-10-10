# Uso de 'async/await' vs Método '.then()' en Node.js

## ¿Qué sucede al usar 'async' y 'await'?

Cuando utilizamos 'async' y 'await' en nuestro código, logramos que el flujo de ejecución sea más fácil de entender en términos de asincronía. A continuación, se resume lo que sucede al usar 'async' y 'await':

1. **'async' en la función showMenu():** Al declarar la función showMenu() como 'async', podemos utilizar la palabra clave 'await' dentro de la función. Esto permite que la función espere a que las promesas se resuelvan antes de continuar con la ejecución del código, lo que hace que el código sea más legible y parezca estar siguiendo un flujo de ejecución sincrónico, a pesar de trabajar con operaciones asincrónicas.

2. **'await' para obtener la opción del usuario:** Al usar 'await' con la función getInput(), podemos esperar a que el usuario agregue una opción antes de continuar con el flujo del programa. Esto evita que la ejecución del código avance antes de que el usuario haya proporcionado una entrada.

3. **Manejo de las funciones asíncronas:** Para las operaciones asíncronas, como ingresar una tarea, marcar una tarea como completada o eliminar una tarea, utilizamos 'try...catch' para manejar las promesas y mostrar mensajes adecuados en función del resultado de la operación.

## ¿Qué sucede al usar el método '.then()'?

Al utilizar el método '.then()' en las funciones 'deleteTask()' y 'completeTask()' en nuestro código, lo siguiente ocurre:

1. Cuando llamamos a 'completeTask()' o 'deleteTask()', estas funciones devuelven una promesa que representa la operación de completar o eliminar una tarea, respectivamente.

2. Utilizamos '.then()' para adjuntar funciones de devolución de llamada que se ejecutarán cuando estas promesas se resuelvan con éxito. Esto significa que cuando la tarea se completa con éxito, la función proporcionada a '.then()' se ejecutará, y podemos usar esta oportunidad para mostrar un mensaje apropiado en la consola.

3. También utilizamos '.catch()' para manejar cualquier error que pueda ocurrir durante la ejecución de la promesa. Esto nos permite mostrar mensajes de error en caso de que algo salga mal durante la eliminación o la marcación de una tarea como completada.

4. Una vez que se completa la operación o se maneja el error, llamamos 'showMenu()' nuevamente para mostrar el menú principal y permitir que el usuario realice otra acción.

## ¿Cuáles son las diferencias entre 'async/await' y el método '.then()'?

### 'async/await'

- Sintaxis más legible y similar a la programación síncrona, lo que facilita la lectura y el mantenimiento del código.
- Se debe marcar una función como 'async' para poder usar 'await' en ella.
- 'await' se utiliza para esperar que una promesa se resuelva antes de continuar con la ejecución.
- Para el manejo de errores, se utiliza 'try/catch', similar a la programación síncrona, lo que facilita el manejo de excepciones.
- Tiene un flujo de control más lineal, lo que lo hace más sencillo de seguir.

### Método '.then()'

- Tiene una sintaxis basada en callbacks para manejar el resultado de una promesa.
- Se pueden encadenar múltiples '.then()' para ejecutar operaciones en serie, pero esto puede llevar a una anidación profunda de callbacks (callback hell) en situaciones complejas.
- Para el manejo de errores, generalmente se utiliza '.catch()' al final de una cadena de '.then', lo que puede hacer que el manejo de errores sea más complicado en comparación con 'async/await' y 'try/catch'.
- A medida que se encadenan más '.then()', la legibilidad del código puede reducirse, lo que a veces se denomina "callback hell".
