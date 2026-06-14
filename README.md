# cien razones por las que me enamoré de ti

Una carta digital en blanco y negro. 100 razones, una sola persona.

Hecha con HTML, CSS y un poco de JavaScript — sin frameworks, sin build step, sin dependencias. Abre `index.html` y listo.

Inspirada en la estética de The Neighbourhood, el minimalismo y el silencio.

---

## ✨ Detalles

- Pantalla de bienvenida con efecto máquina de escribir.
- Reveal-on-scroll de cada razón.
- Contador y barra de progreso superior.
- Transiciones suaves, animaciones respetuosas con `prefers-reduced-motion`.
- Pad musical sintetizado en el navegador (WebAudio) — opcional, sin assets externos.
- Responsive, mobile-first.

## 🗂 Estructura

```
.
├── index.html
├── styles.css
└── script.js
```

## 🚀 Uso

Doble clic en `index.html` o sirve la carpeta con cualquier servidor estático.

## ✏️ Editar las razones

Abre `script.js` y edita el array `REASONS`. Cada entrada es un string. El orden en el array es el orden en pantalla.

## 🎚 Música

La música se genera en vivo con `OscillatorNode`. No hay archivos de audio en el repo. Pulsa el botón flotante inferior derecho para activarla.
