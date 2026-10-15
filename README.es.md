# STILL — Galería virtual

Una galería estática con cuatro salas, trece obras, catálogo con búsqueda y filtros, selección personal, enlaces a cada obra y un visor con zoom, arrastre y pellizco. No requiere instalación, backend, API key ni un servicio de vídeo.

## Publicar en GitHub Pages

El ZIP de entrega contiene el sitio listo para publicar. No subas el ZIP como un único archivo: descomprímelo y sube su contenido.

1. Crea o elige un repositorio en GitHub para esta galería.
2. Sube todos los archivos del ZIP a la raíz de la rama `main`. `index.html` debe quedar directamente en la raíz, junto a `assets/`, `gallery.js`, `gallery.css`, `collection.js`, `gallery-math.js` y `.nojekyll`.
3. En el repositorio, abre **Settings → Pages**.
4. Elige **Deploy from a branch**, la rama **main** y la carpeta **/(root)**. Guarda.
5. Cuando GitHub termine, abre la dirección que muestre Pages. No se necesita un dominio propio.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Todas las rutas de recursos son relativas. El sitio funciona en una dirección de proyecto como `https://tu-usuario.github.io/nombre-del-repositorio/`. Los enlaces de navegación usan fragmentos: `#sala/luz` o `#obra/nenufares`; no necesitan reglas especiales de servidor.

`.nojekyll` evita que GitHub intente procesar el sitio con Jekyll. Si tu equipo oculta los archivos que empiezan por un punto, asegúrate de incluirlo al subir el contenido.

## Usar la galería

- Entra y elige una de las cuatro salas en los botones inferiores.
- Arrastra la sala para cambiar la mirada. Los botones Izquierda, Centro y Derecha acercan el encuadre a cada muro.
- Toca un cuadro o la escultura para abrir su ficha.
- En el visor, usa `+` y `−`, la rueda o dos dedos para ampliar. Arrastra la obra ampliada y pulsa el porcentaje para ajustar de nuevo.
- Busca por título o artista y filtra por sala o tipo de obra.
- El corazón guarda una selección en ese navegador. No crea una cuenta y no sincroniza entre dispositivos. Si el almacenamiento está bloqueado, la selección dura la visita.
- Compartir copia o abre un enlace a la obra en el sitio publicado. Descargas y fuentes están en cada ficha.
- Las flechas del teclado cambian de sala u obra; Escape cierra la vista o el modo Solo el arte.

Para una revisión local básica puedes abrir `index.html`: los scripts no utilizan módulos ni llamadas a una API. Las funciones de compartir y almacenamiento dependen de lo que permita el navegador para archivos locales. La publicación en HTTPS ofrece el funcionamiento normal.

## Personalizar

- `collection.js`: salas, títulos, autores, fichas, fuentes y rutas de imágenes.
- `assets/works/`: imágenes grandes y miniaturas.
- `assets/room/gallery.webp`: arquitectura de fondo.
- `gallery.css`: tipografía, disposición y estilos.
- `gallery.js`: navegación, catálogo, selección, gestos y visor.
- `gallery-math.js`: proyección de cuadros, cámara, búsqueda y rutas.

Cada sala presenta tres pinturas. `rooms[].works` contiene sus identificadores en el orden izquierda, centro, derecha. La escultura es la pieza común. Para añadir una obra, incorpora su imagen y miniatura, completa su ficha en `collection.js`, asígnala a la sala y actualiza sus créditos. No hacen falta servicios externos en tiempo de ejecución.

## Imágenes y autoría

Nueve obras históricas de dominio público: metadatos del Art Institute of Chicago y reproducciones de Wikimedia Commons. Se incluyen tres imágenes abstractas originales de STILL, una escultura imaginaria y la arquitectura generada para esta experiencia. Las fichas distinguen las piezas generadas de las obras históricas.

Las atribuciones, enlaces de procedencia y licencias están en `assets/CREDITOS.txt`. Las licencias de las tipografías están en `assets/fonts/`. El proyecto es independiente y no está afiliado a esas instituciones.

## Comprobaciones

Se verificaron recursos locales, rutas bajo una subcarpeta de GitHub Pages, datos de las trece obras, proyecciones de cuadros y controles con pruebas de DOM sin navegador. También se revisaron composiciones de referencia de la sala. La prueba visual e interactiva en un navegador real y en dispositivos físicos no está disponible en el entorno de creación; conviene revisar la publicación en tu teléfono y computadora.
