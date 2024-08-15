/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "primary-btn-bg":"linear-gradient(95deg, #EC622B 0%, #F39D43 100%)",
          "infocentric-bg":"linear-gradient(140deg, #15C 0%, #6E8CFC 100%)"
      },
      boxShadow:{
        "ctaBannerBoxShadow":"0px 4px 50px 0px rgba(42, 42, 42, 0.08)",
       "contactFormBoxShadow": "0px 2px 40px 0px rgba(55, 55, 55, 0.08)",
       "awardCardBoxShadow":"0px 4px 20px 0px rgba(82, 82, 82, 0.08)",
       "accordionBoxShadow":"0px 4px 60px 0px rgba(236, 98, 43, 0.12)"
      },
      textColor:{
        "keyPointIconColor":"linear-gradient(95deg, #EC622B 0%, #F39D43 100%)",
      }
      // colors:{
      //     "primary-btn-bg":"linear-gradient(95deg, #EC622B 0%, #F39D43 100%)"
      // }
    },
  },
  plugins: [],
};
