¿Qué sucedio al usar async y await?
Cuando use 'async' y 'await' en mi código, logre que el flujo de ejecución se pueda entender más facil en términos de asincronía. Aquí hay un resumen de lo que sucede al usar 'async' y 'await':

1. 'async' en la función showMenu(): Al declarar la función showMenu() como 'async', puedo usar la palabra clave 'await' dentro de la función. Esto permite que la función espere a que las promesas se resuelvan antes de continuar con la ejecución del código. Esto hace que el código sea más legible, ya que parece que está siguiendo un flujo de ejecución sincrónico a pesar de estar trabajando con operaciones asincrónicas.

2. 'await' para obtener la opción del usuario: Al usar 'await' con la función getInput(), puedes esperar a que el usuario agregue una opción antes de continuar con el flujo del programa. Esto evita que la ejecución del código avance antes de que el usuario haya proporcionado una entrada.
   
3. Manejo de las funciones asíncronas: Para las operaciones asíncronas como ingresar una tarea, marcar una tarea como completada o eliminar una tarea, utilizas 'try...catch' para manejo de las promesas y permite mostrar mensajes adecuados en función del resultado de la operación.

¿Qué sucedio al usar el método then()?
Al utilizar el método 'then()' en las funciones 'deleteTask()' y 'completeTask()' en mi código, lo que sucede es lo siguiente:

1. Cuando llamamos a 'completeTask()' o 'deleteTask()', estas funciones devuelven una promesa que presenta la operación de completar una tarea o eliminar una tarea, respectivmente.
   
2. Uso '.then()' para adjuntar funciones de callback que se ejecutarán cuando estas promesas se resulevan exitosamente. Esto significa que cuando la tarea se complete con éxito, la función proporcionada a '.then()' se ejecutará y podemos usar esa oportunidad para mostrar un mensaje apropiado en la consola.

3. También utilizo '.catch()' para manejar cualquier error que pueda suceder durante la ejecución de la promesa. Esto nos permite mostrar mensajes de error en caso de que algo salga mal durante la eliminación o la marcación de una tarea como completada.

4. Una vez que se completa la operación o se maneja el error, llamamos 'showMenu()' nuevamente para mostrar el menú principal y permitir que el usuario realice otra acción.

¿Qué diferencias encontraste entre async, await y el método then()?
ASYNC/AWAIT
La sintaxis es más legible y similar a la programación síncrona, lo que facilita la lectura y el mantenimiento del código. Con respecto a las palabras clave se debe marcar una función como 'async' para poder usar 'await' en ella. El 'await' se usa para esperar que una promesa se reuelva antes de continuar con la ejecución. Para el manejo de errores se puede usar 'try/catch' muy parecido a la programación síncrona, lo que facilita el manejo de excepciones. Tiene un flujo de control más lineal, lo que lo hace más sencilo de seguir.

Método '.then()'
Tiene una sintaxis basada en callbacks para manejar el resultado de una promesa. Se puede encadenar múltiples '.then()' para ejecutar operaciones en serie, sin embargo, esto puede llevar a una anidación profunda de callbacks (callback hell) en situaciones complejas. Para el manejo de errores usualmente se utiliza '.catch()' al final de una cadena de '.then()'. Esto puede hacer que el manejo de errorres sea más complicado en comparación con 'async/await' y 'try/catch'. A medida que se encadenan más '.then()', la legibilidad del código puede reducir, lo que a veces se denomina "callback hell".