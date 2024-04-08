/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': 'rgb(2, 183, 175)', // Falta un corchete de cierre después de la definición del color
      }, // Falta un corchete de cierre después de la extensión de colores
    }, // Falta un corchete de cierre después de la extensión del tema
  }}