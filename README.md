# Uso de async/await vs. el método .then() en JavaScript

## ¿Qué sucede al usar async/await?

Al utilizar `async` y `await` en mi código, logro que el flujo de ejecución sea más comprensible en términos de asincronía. Aquí hay un resumen de lo que sucede:

1. **Declaración 'async' en la función showMenu():** Al declarar la función `showMenu()` como `async`, puedo utilizar la palabra clave `await` dentro de la función. Esto permite que la función espere a que las promesas se resuelvan antes de continuar con la ejecución del código. Esto hace que el código sea más legible, ya que parece que está siguiendo un flujo de ejecución sincrónico a pesar de estar trabajando con operaciones asincrónicas.

2. **'await' para obtener la opción del usuario:** Al usar `await` con la función `getInput()`, puedes esperar a que el usuario agregue una opción antes de continuar con el flujo del programa. Esto evita que la ejecución del código avance antes de que el usuario haya proporcionado una entrada.

3. **Manejo de funciones asíncronas:** Para las operaciones asíncronas, como ingresar una tarea, marcar una tarea como completada o eliminar una tarea, utilizas `try...catch` para manejar las promesas y permite mostrar mensajes adecuados en función del resultado de la operación.

## ¿Qué sucede al usar el método .then()?

Al utilizar el método `.then()` en las funciones `deleteTask()` y `completeTask()` en mi código, esto es lo que ocurre:

1. Cuando llamamos a `completeTask()` o `deleteTask()`, estas funciones devuelven una promesa que representa la operación de completar o eliminar una tarea, respectivamente.

2. Usamos `.then()` para adjuntar funciones de callback que se ejecutarán cuando estas promesas se resuelvan con éxito. Esto significa que cuando la tarea se complete con éxito, la función proporcionada a `.then()` se ejecutará, y podemos usar esa oportunidad para mostrar un mensaje apropiado en la consola.

3. También utilizamos `.catch()` para manejar cualquier error que pueda ocurrir durante la ejecución de la promesa. Esto nos permite mostrar mensajes de error en caso de que algo salga mal durante la eliminación o la marcación de una tarea como completada.

4. Una vez que se completa la operación o se maneja el error, llamamos nuevamente a `showMenu()` para mostrar el menú principal y permitir que el usuario realice otra acción.

## Diferencias entre async/await y el método .then()

- **ASYNC/AWAIT:**
  - Sintaxis más legible y similar a la programación síncrona.
  - Se marca una función como 'async' para usar 'await'.
  - Uso de 'try/catch' para el manejo de errores, similar a la programación síncrona.
  - Flujo de control más lineal y fácil de seguir.

- **MÉTODO .then():**
  - Sintaxis basada en callbacks para manejar el resultado de una promesa.
  - Encadenamiento de múltiples '.then()' para operaciones en serie, pero propenso a la anidación profunda de callbacks (callback hell) en situaciones complejas.
  - Manejo de errores generalmente se hace mediante '.catch()', lo que puede complicar el manejo de errores en comparación con 'async/await' y 'try/catch'.
  - A medida que se encadenan más '.then()', la legibilidad del código puede disminuir, lo que a veces se denomina "callback hell".
