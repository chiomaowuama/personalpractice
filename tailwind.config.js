/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        "projectbg": "#f7fbfb",
        "turneddark": "#45125d"
        // "productsred": "#840303 ",
        // "navbg":"#5e48db",
  
      },
    },
  },
  plugins: [],
}

