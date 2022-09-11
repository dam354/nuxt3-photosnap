module.exports = {
  content: {
    files: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue", "./plugins/**/*.{js,ts}"],
  },
  theme: {
    extend: {
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      colors: {
        "pure-black": "#000",
        "light-gray": "#dfdfdf",
        "pure-white": "#fff",
        orange: "#FFC593",
        pink: "#BC7198",
        blue: "#5A77FF",
      },
      minHeight: {
        "project-card": "12rem",
      },
      maxWidth: {
        xxs: "16rem",
      },
      screens: {
        iphone: "414px",
        "3xl": "1680px",
      },
    },
  },
};
