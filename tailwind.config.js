module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        colorBg: "#040c18",
        colorFooter: "#031b34",
        colorBlog: "#042c54",
        gradientBar: "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
        inputBg: "#052D56",
        buttonBg: "#ff4820"
      },
      colors: {
        colorText: "#81afdd",
        colorSubText: "#ff8a71",
        inputText: "#3D6184"
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
