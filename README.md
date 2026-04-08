# Carnaval Box · Landing MVP

Carnaval Box es una **caja de suscripción cultural** inspirada en el Carnaval de Negros y Blancos de Pasto (Nariño, Colombia). Esta landing es un **MVP estático** para validar la propuesta de negocio, capturar leads y mostrar potencial a inversionistas usando GitHub Pages.

El sitio está construido con **HTML, CSS y JavaScript puro**, siguiendo un enfoque mobile‑first y sin dependencias externas.

---

## Estructura del proyecto

Los archivos principales del repositorio son:

- `index.html` · Página de aterrizaje completa.
- `style.css` · Sistema de estilos (colores, tipografía y layout responsive).
- `script.js` · Interacciones básicas (menú móvil, modal de planes, formularios, FAQ).
- `README.md` · Esta documentación.

Puedes alojar estos archivos:

- En la raíz del repositorio (por ejemplo, en un repositorio tipo `<usuario>.github.io`). [web:48]
- O dentro de la carpeta `/docs` de la rama principal si eliges ese directorio como fuente de GitHub Pages. [web:46]

---

## Secciones del sitio

La landing incluye las secciones definidas en el plan de producto:

- **Hero**: imagen de caja conceptual, propuesta de valor y CTA doble.
- **La caja / Manifiesto**: explicación emocional de la marca.
- **Anatomía de la caja**: desglose de los componentes de cada edición.
- **Cómo funciona**: 3 pasos simples del flujo operativo.
- **Planes**: tres opciones (Edición única, Plan Carnaval, Caja regalo) con modal de pre‑registro.
- **Manos maestras**: artesanos, productores e ilustradores.
- **Impacto / Inversionistas**: narrativa de escalabilidad y métricas iniciales.
- **FAQ**: acordeón de preguntas frecuentes.
- **Contacto y bitácora**: newsletter y formulario de alianzas.

---

## Requisitos

- Navegador moderno con soporte para `flexbox` y `grid`.
- Cuenta en GitHub para desplegar el sitio con GitHub Pages.

---

## Uso local

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador (doble clic o “Open with Live Server” si usas VS Code).
3. Edita el contenido, precios o textos en `index.html` y `style.css` según tus necesidades.

---

## Despliegue en GitHub Pages

A continuación se resumen los pasos mostrados en el video **“Cómo Subir tu Página Web GRATIS 2025”** (YouTube, canal _jhampo_), adaptados a la configuración actual de GitHub Pages. [page:1][web:46][web:48][web:54]

> Video de referencia: https://www.youtube.com/watch?v=a06lu1Co8Xk

### 1. Crear tu cuenta y repositorio en GitHub

1. Entra a https://github.com e inicia sesión o crea una cuenta nueva.
2. Haz clic en el botón **“New”** (Nuevo repositorio).
3. Escribe el nombre del repositorio:
   - Si quieres que tu sitio esté en `https://<tu-usuario>.github.io`, el repositorio debe llamarse **`<tu-usuario>.github.io`**.
   - Para proyectos normales puedes usar cualquier nombre de repositorio y luego configurar Pages. [web:50][web:54]
4. Asegúrate de que el repositorio sea **Public**.
5. Haz clic en **Create repository**.

En el video se muestra este mismo flujo: se abre GitHub, se va a “Repositorios”, se crea un repositorio nuevo y se usa el nombre `<usuario>.github.io` para que sea un repositorio especial para GitHub Pages. [page:1]

---

### 2. Subir los archivos del sitio

1. En el nuevo repositorio, ve a la pestaña **“Code”**.
2. Haz clic en **“Upload files”** o arrastra los archivos del proyecto (`index.html`, `style.css`, `script.js`, `README.md`, etc.) al área de subida.
3. Verifica que exista un archivo **`index.html`** en la carpeta raíz (o en `/docs` si luego eliges esa carpeta como fuente). [web:48]
4. En la parte inferior, escribe un mensaje de commit (por ejemplo, “Subir sitio Carnaval Box”).
5. Haz clic en **“Commit changes”**.

En el video se seleccionan los archivos del sitio, se suben al repositorio y se asegura que haya un archivo `index` que será la página principal. [page:1]

---

### 3. Activar GitHub Pages

1. Dentro del mismo repositorio, ve a la pestaña **“Settings”**.
2. En el menú lateral, busca la sección **“Pages”**.
3. En el apartado **“Build and deployment”** o **“GitHub Pages”**:
   - En **Source**, elige la rama: normalmente **`main`**.
   - En **Folder**, elige:
     - `/(root)` si los archivos están en la raíz, o
     - `/docs` si colocas el sitio en una carpeta `docs/` de la rama principal. [web:46][web:53][web:54]
4. Haz clic en **Save** / **Guardar**.

En el video se hace clic en **Settings → Pages**, se selecciona la rama, se guarda la configuración y luego se espera unos minutos hasta que el sitio quede publicado. [page:1]

---

### 4. Esperar la publicación

1. GitHub construirá y publicará tu sitio de forma automática; esto puede tardar unos minutos.
2. Cuando el proceso termine, verás un mensaje en la sección **Pages** con la URL del sitio, algo como:
   - `https://<tu-usuario>.github.io/` para repositorios de usuario, o
   - `https://<tu-usuario>.github.io/<nombre-del-repositorio>/` para repositorios de proyecto. [web:46][web:48]
3. Haz clic en la URL para ver tu landing de Carnaval Box en producción.

El video muestra cómo, tras recargar la pestaña de “Pages” después de un par de minutos, aparece el enlace y la página ya se ve publicada. [page:1]

---

### 5. Actualizar el sitio

Cada vez que quieras actualizar tu sitio:

1. Modifica los archivos en tu máquina local o directamente en GitHub (por ejemplo, editando `index.html`).
2. Sube los cambios (nuevo commit).
3. GitHub Pages volverá a publicar el sitio automáticamente cuando detecte cambios en la rama configurada. [web:46][web:54]

---

## Uso de la carpeta `/docs` (opcional)

GitHub permite que el origen del sitio sea la carpeta `/docs` de la rama principal, en lugar de la raíz del repositorio. Esto es útil si quieres mantener el código fuente separado de otros archivos. [web:46][web:49]

Si decides usar `/docs`:

1. Crea una carpeta llamada `docs/` en tu repositorio.
2. Mueve `index.html`, `style.css`, `script.js` y `README.md` a `docs/`.
3. En **Settings → Pages**, configura:
   - Branch: `main`
   - Folder: `/docs`
4. Guarda los cambios.

---

## Personalización

- Ajusta textos y precios en `index.html`.
- Cambia colores o tipografía en `style.css`.
- Amplía interactividad (por ejemplo, integración con un backend real de formularios) en `script.js`.

Para el MVP, los formularios solo muestran mensajes de confirmación en pantalla y no envían datos a un servidor.

---

## Licencia

Puedes usar este código como punto de partida para tu propio proyecto, ajustando marca, textos y estilos según tu contexto.