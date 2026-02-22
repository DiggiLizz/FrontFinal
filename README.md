🐺 Proyecto Sekhmet: Bitácora de Desarrollo Frontend
¡Bienvenidos! Este repositorio es la evolución de mi aprendizaje. Aquí he integrado mi experiencia en clínica veterinaria con la ingeniería, construyendo un sitio que no solo es visual, sino funcional y reactivo.

📋 Glosario Técnico de Sekhmet Para entender este proyecto, primero debemos conocer sus componentes:

Modelo de Cajas (The Box Model) Es la regla de oro del diseño web. Todo en una página es, en el fondo, una caja.
En Veterinaria: Imagina un paciente en una camilla.

Content: Es el paciente.
Padding (Relleno): Es la manta que envuelve al paciente (espacio interno).
Border (Borde): Son los barandales de la camilla.
Margin (Margen): Es la distancia de seguridad entre esa camilla y la siguiente.
Semántica (El Nombre Correcto) Es usar etiquetas que describen su contenido, no solo su apariencia. En Veterinaria: Es como llamar a cada instrumento por su nombre técnico (bisturí, pinza, fórceps) en lugar de decir "la cosa de metal". Usar

en lugar de un
genérico ayuda a que Google y los lectores de pantalla entiendan tu página.
Asincronía (La Sala de Espera) Es cuando una tarea se ejecuta en segundo plano sin detener el resto del programa.

En Veterinaria: Es como mandar una muestra de sangre al laboratorio. No te quedas mirando el tubo hasta que llegue el resultado; sigues atendiendo otros pacientes (la página sigue funcionando) y cuando el resultado llega (el fetch termina), actúas en consecuencia.

Responsividad / Media Queries (Adaptación Biológica) Es la capacidad de la página para cambiar su forma según el dispositivo.
En Veterinaria: Es como la pupila de un gato; se adapta a la luz ambiental para seguir funcionando. En código, las Media Queries detectan el tamaño de la pantalla y cambian el diseño (de 3 columnas en PC a 1 columna en móvil) para que siempre sea legible.

Atributos (Las Constantes del Paciente) Son propiedades adicionales que les das a las etiquetas HTML (como src, href, id).
En Veterinaria: Son los datos fijos en la ficha: Peso: 5kg, Color: Atigrado. En tu código, el atributo src en una imagen le dice al navegador exactamente de dónde sacar la "foto del paciente".

Framework (El Protocolo Médico) Es un conjunto de reglas y herramientas ya establecidas que te facilitan el trabajo (como Bootstrap).
En Veterinaria: Es como seguir un protocolo de reanimación ya probado. No inventas los pasos cada vez; sigues una guía estándar que sabes que funciona para ahorrar tiempo y evitar errores.

🛠️ Evolución del Sistema (Semanas 1 a 5)

🦴 Semana 1: La Anatomía Básica (HTML) Creamos el esqueleto usando HTML Semántico. Usamos etiquetas con nombre propio como header, nav, section, para que el navegador sepa exactamente qué órgano está procesando.

🎨 Semana 2: La Estética y el Pelaje (CSS) Aplicamos el Modelo de Cajas para controlar márgenes (margin) y rellenos (padding), asegurando que cada órgano tenga su espacio vital. Usamos un degradado de azul a morado para darle una identidad visual única.

📱 Semana 3: Adaptabilidad y Fisiología (Responsive Design) Buscamos la homeostasis del sitio. Mediante Flexbox y CSS Grid, logramos que la página mantenga su equilibrio y orden sin importar si se ve en un celular pequeño o en un monitor de PC.

🏥 Semana 4: El Hospital Modular (Bootstrap 5) Integramos tecnología de punta para mejorar la navegación:

Navbar: Una barra de navegación colapsable (adaptable).

Carousel: Un carrusel dinámico que cambia imágenes automáticamente cada 3 segundos.

Cards: Tarjetas organizadas para las reseñas de anime y juegos.

🧠 Semana 5: El Sistema Nervioso (DOM & Fetch API) Le dimos vida al sitio mediante JavaScript:

Eventos: Programamos reflejos ante el click, el mouseover (brillo en el logo) y el submit (envío de formularios sin recargar la página).

Fetch API: El sistema ahora puede "ir al laboratorio" (archivo novedades.json) a buscar datos de forma asíncrona. Esto permite actualizar noticias sin tocar el código fuente.

🚀 Funcionalidades Especiales Easter Egg: Presiona la tecla "V" para activar el Modo Neón. Es un pequeño truco de ingeniería que cambia la estética de los títulos al instante.

Formulario de Colaboradores: Captura de datos en tiempo real con validación dinámica.

👾 Semana 6: Homestasia Y gestion de recursos Gestión de estado y lógica de recursos
Esta semana la página dejó de ser solo informativa, y paso a ser una aplicación Web funcional que recuerda la interacción con el cliente, lo que se ve refleajado en el modulo eCommerce.

El carrito es un Array dinámico, capaz de cambiar contantemente al agregar, quitar, vaciar o finalizar una compra. Siendo capaz de calcular el total económico acumulado de forma reactiva.

Manipulación avanzada del DOM: los productos ya no son escrito a mano en HTML sino que se usa JS para trasferir los datos, inyectando las tarjetas (cards) al contenedor vacio mediante Template Literals, Esto permite que al agregar productos al JS, la tienda creza automaticamente, sin tener que tocal el HTML, reforzando la única responsabilidad.

Lógica de persistencia: el carrito es capaz de recordar mientras se está en la pagina de ventas los productos ingresados.

Refactorización y limpieza de código: Se separaron funciones, el código de la información de anime, video juegos y ventas, ya no esta dentro de HTML, sino que de JS independientes, con su vinculación correspondiente. Lo que facilita su mantenimiento y escalabilidad futura.

Validaciones y control de errores: se usan estructuras de control (if) y comparadores estrictos (===) para evitar la presencia de errores de referencia nula, y alertas para que el usuario sepa que esta pasado.

⚛️ Semana 7: La Evolución Celular (React.js)
Esta semana, el proyecto Sekhmet sufrió una metamorfosis completa. Dejamos atrás la manipulación manual de órganos (DOM) para adoptar una arquitectura basada en Componentes Funcionales y Hooks. El sitio ya no es una serie de archivos conectados, sino un organismo vivo que se auto-regula.

📋 Glosario Técnico: El ADN de React
Componentes (Las Células): Son las unidades básicas de la interfaz. Cada parte de Sekhmet (Navbar, Sidebar, ProductCard) es ahora una célula independiente que se puede replicar o reparar sin afectar al resto del cuerpo.

Props (Señales Hormonales): Es la información que viaja de un componente "padre" a un "hijo". Por ejemplo, la tienda le entrega los datos de la figura (nombre, precio) a la tarjeta para que esta sepa qué mostrar.

State / useState (La Homeostasis): Es la capacidad del componente de recordar su estado interno. El carrito ahora usa un "sentido" interno para saber cuántos productos tiene y cuánto es el total, actualizándose instantáneamente ante cualquier cambio.

Hooks / useEffect (Los Reflejos): Son funciones que reaccionan a estímulos externos. Usamos useEffect como un sistema nervioso que detecta cuando presionas la tecla "V" (Modo Neón) o cuando el carrito cambia de peso.

🛠️ Innovaciones en la Infraestructura
Arquitectura Modular: Separamos el código en carpetas lógicas (assets, components, data). Ahora el corazón de la app (App.jsx) es un mapa limpio que orquesta a las demás piezas.

Gestión de Carrito:

Selección Inteligente: Al agregar productos, el sistema genera un ID único (instanceId), permitiendo al usuario arrepentirse y eliminar productos específicos de su lista sin afectar a los demás.

Cálculo Reactivo: Implementamos el método .reduce() para que el Total a Pagar se calcule automáticamente cada vez que el carrito sufre una modificación.

Renderizado Condicional: La interfaz ahora tiene "conciencia". Si el carrito está vacío, muestra un mensaje motivador; si tiene productos, despliega automáticamente el resumen de compra y el botón de vaciado.

🚀 Funcionalidades Especiales (Versión React)
Easter Egg 2.0: El Modo Neón ahora es un estado global. Al activarlo, el cambio de colores y sombras se propaga por todos los componentes de forma fluida y controlada por el estado de la App.

Eficiencia de Datos: Pasamos de inyectar HTML manualmente con innerHTML a usar .map(). Esto asegura que los datos del ventas.json se transformen en componentes visuales de forma segura y veloz, evitando errores de referencia.