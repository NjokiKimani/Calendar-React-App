/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      gridTemplateColumns:{
        "1/5": "1fr 5fr"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

