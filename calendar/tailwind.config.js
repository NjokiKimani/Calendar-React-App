/** @type {import('tailwindcss').Config} */
const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
export default {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`),
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

