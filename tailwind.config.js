/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        'body': '#333333',
        'card': '#444444',
        'card-hover': '#555555',
        'card-active': '#666666',
        'card-active-hover': '#777777',

      },
      borderColor: {
        'body': '#333333',
        'card': '#444444',
        'card-hover': '#555555',
        'card-active': '#666666',
        'card-active-hover': '#777777',
      
      },
      textColor: {
        'body': '#FFFFFF',
        'card': '#FFFFFF',
        'card-hover': '#FFFFFF',
        'card-active': '#FFFFFF',
        'card-active-hover': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
