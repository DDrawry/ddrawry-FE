/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cookieRun: ["cookieRun"],
      },
      colors: {
        Charcoal: "#36454F",
        PrimaryStroke: "#94AFCA",
        Primary: "#A7C7E7",
        Gray: "#767676",
        LimeStroke: "#B4D28F",
        Lime: "#E4FDC5",
        black: "#000000",
        Red: "#F46666",
        LemonStroke: "#E0D35F",
        Highlight: "#E7C7E7",
        Lemon: "#FFFACD",
        ButtonDisabled: "#E6E6E6",
        ButtonDisabledStroke: "#E1E1E1",
      },
      fontSize: {
        huge: "36px",
        regular: "28px",
        small: "18px",
      },
      boxShadow: {
        custom: "8px 8px 16px 0 rgba(0, 0, 0, 0.04)",
      },
      animation: {
        blink: "blink .5s step-end infinite alternate",
      },
      keyframes: {
        blink: {
          "50%": { backgroundColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
