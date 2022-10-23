module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563EB",
          secondary: "#452473",
          accent: "#16162E",
          neutral: "#0B1B28",
          halkabeguni: "#F8F3FF",
          "placehold": "#0B1B28",
        },
      },
    ],
  },
}
