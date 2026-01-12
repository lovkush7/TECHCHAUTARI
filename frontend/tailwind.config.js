import daisyui from "daisyui";
// import {daisyui} from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mydark: {
          primary: "#2563eb",   // 🔵 blue-600
          "primary-content": "#ffffff",
          secondary: "#0ea5e9",
          neutral: "#1f2937",
          "base-100": "#0f172a",
        },
      },
    ],
  },
};
