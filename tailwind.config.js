module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        colorBg: "#040c18",
        colorFooter: "#031b34",
        colorBlog: "#042c54",
        inputBg: "#052D56",
        buttonBg: "#ff4820"
      },
      colors: {
        colorText: "#81afdd",
        colorSubText: "#ff8a71",
        inputText: "#3D6184",
        colorText2: "#71E5FF"
      },
      screens: {
        tablet: { max: "1058px" },
        mid: { max: "768px" },
        small: { max: "550px" }
      }
    }
  },
  plugins: []
};
