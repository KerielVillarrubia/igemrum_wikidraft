Si clonaste este repo antes de la migración a React, vas a necesitar instalar las dependencias la primera vez que hagas pull de estos cambios:

```bash
git pull
npm install
npm run dev
```

Solo necesitas correr `npm install` una vez después del pull (y otra vez cuando `package.json` cambie).

### Comandos disponibles

| Comando           | Qué hace                                            |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo local              |
| `npm run build`   | Construye el sitio de producción en `./dist/`       |
| `npm run preview` | Previsualiza el build de producción localmente      |
| `npm run astro`   | Corre comandos del CLI de Astro (ej. `astro add`)   |

### Estructura del proyecto

```
src/
├── components/
│   ├── layout/         # Compartidos entre páginas (Header, Footer)
│   └── home/           # Secciones del home (Hero, ImpactStats, etc.)
├── layouts/
│   └── Layout.astro    # Estructura HTML, fuentes, config de Tailwind, scripts globales
├── pages/
│   └── index.astro     # Página principal
├── scripts/
│   └── app.js          # Animaciones del cursor y reveals al hacer scroll
└── styles/
    └── styles.css      # CSS personalizado (cursor, reveals, hover de chem-box)
```

### Añadir una nueva dependencia

Si instalas un paquete nuevo, haz commit del `package.json` **y** del `package-lock.json` actualizados juntos para que el equipo se mantenga sincronizado:

```bash
npm install 
git add package.json package-lock.json
git commit -m "Añadir "
```

Después de hacer pull de esos cambios, el resto del equipo corre `npm install` otra vez para obtener el paquete localmente.

### Solución de problemas

- **`command not found: npm`** → Instala Node.js desde [nodejs.org](https://nodejs.org/).
- **Errores raros de dependencias después de `git pull`** → Borra `node_modules/` y `package-lock.json`, luego corre `npm install` de nuevo.
- **El puerto 4321 ya está en uso** → Corre `npm run dev -- --port 3000` para usar otro puerto.