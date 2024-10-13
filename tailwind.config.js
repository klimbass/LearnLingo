/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "custom-ss": ["14px", { lineHeight: "1.3", fontWeight: "400" }],

        "custom-xl": ["28px", { lineHeight: "1.15", fontWeight: "500" }],
      },
      backgroundImage: {
        "hero-pattern-red":
          "url('/src/images/68e4226188648a055ee1b42bed644f46-sticker 1.png')",
        "hero-pattern-mac": "url('/src/images/Mac.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      backgroundPosition: {
        "center-20": "center 20%",
      },
      colors: {
        textPrimary: "#121417",
        textSecondary: "#8A8A89",
        accentPrimary: "#9FBAAE",
        accentSecondary: "#CBDED3",
        greyBackground: "#F8F8F8",
        laptopGradientStart: "#314B6E",
        laptopGradientFinish: "#1F385A",
      },
      padding: {
        22: "5.5rem",
        63: "63px",
        97: "97px",
        103: "103px",
      },
      borderRadius: {
        bigRadius: "30px",
      },
      width: {
        177: "177px",
        362: "362px",
      },
      height: {
        177: "177px",
        362: "362px",
      },
      maxWidth: {
        720: "720px",
        470: "470px",
        568: "568px",
        177: "177px",
        362: "362px",
      },
    },
    plugins: [],
  },
};
