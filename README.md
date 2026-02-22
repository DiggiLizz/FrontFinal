🐺 Proyecto Sekhmet: Evolución Celular (React.js)
-------------------------------------------------

¡Bienvenidos a la fase final de Sekhmet! En esta etapa, el proyecto ha dejado de ser un conjunto de órganos aislados para convertirse en un organismo pluricelular reactivo. Hemos migrado toda la estructura de JavaScript puro a React.js, aplicando ingeniería de componentes.

* 📋 El ADN de React (Glosario Veterinario)

Para entender la arquitectura de esta semana, usaremos estas analogías:

- Componentes (Las Células): Cada parte de la web (Navbar, MediaCard, ProductCard) es una célula independiente. Si una célula se daña o cambia, el resto del organismo sigue funcionando.

- Props (Señales Hormonales): Es la información que viaja del "cerebro" (App.js) a los órganos. Por ejemplo, la tienda le envía el ADN del producto a la ProductCard para que sepa qué precio y foto mostrar.

- State / useState (Homeostasis): Es la memoria interna. El carrito "sabe" cuántos elementos tiene y el Modo Neón "recuerda" si debe estar encendido o apagado sin que la página se recargue.

- Hooks / useEffect (Sistema Nervioso): Funciones que reaccionan a estímulos. Usamos un reflejo nervioso para detectar cuando presionas la tecla "V" y activar el Modo Neón en todo el cuerpo del sitio.

* 🛠️ Innovaciones Técnicas (Semana 7)

1. Arquitectura Modular y Reutilización
Hemos aplicado el principio de Polimorfismo Genético. El componente MediaCard es una estructura única capaz de adoptar dos formas distintas:
 - Forma Anime: Muestra reseñas de series.
 - Forma Videojuegos: Muestra reseñas de juegos.
Esto reduce el código y facilita el mantenimiento (Criterio 3 de la rúbrica).

2. Gestión del Carrito e Identidad Única
Implementación de un sistema de Marcaje Individual. Al agregar un producto, se le asigna un instanceId (como un microchip). Esto permite:
 - Eliminar una unidad específica sin borrar todas las del mismo tipo.
 - Calcular el Gasto Metabólico (Total) automáticamente usando el método .reduce().

3. Renderizado Condicional (Instinto de Supervivencia)

La página ahora tiene "conciencia" de su estado:
 - Carrito Vacío: Si no hay nutrientes (productos), muestra un mensaje motivador.
 - Notificación Flotante: sistema de alerta que "persigue" al usuario mediante position: sticky, asegurando que el feedback sea visible incluso si se elige el último producto de la lista.

--------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Funcionalidades Especiales

* Modo Neón Global: Al presionar la tecla 'V', el estado se propaga por todos los componentes, activando un cambio estético sincronizado en títulos, bordes y sombras.

* Navegación Fluida: Tres sistemas de visualización (Anime, Videojuegos, Tienda) controlados por un solo estado maestro, permitiendo una transición sin recargas de página.