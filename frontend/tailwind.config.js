/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],theme: {
    extend: {
      boxShadow: {
        "drop-1": "var(--drop-1)",
        "shadow-thumbnails": "var(--shadow-thumbnails)",
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}


