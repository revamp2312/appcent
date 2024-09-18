/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1200px',
      // => @media (min-width: 1024px) { ... }

    
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "primary-btn-bg":"linear-gradient(95deg, #EC622B 0%, #F39D43 100%)",
          "infocentric-bg":"linear-gradient(140deg, #15C 0%, #6E8CFC 100%)",
          "blink-logo-bg":" linear-gradient(90deg, #6D3DD3 0%, #A021C0 100%)",
          "Service-CapabilityMeshBg":"url(/Services/capabilityBg.png)",
          "testimonialBg":"linear-gradient(109deg, #FFFCF9 0%, rgba(255, 255, 255, 0.60) 100.01%)",
          "card-Border":"linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1",
           'gradient-95': 'linear-gradient(95deg, var(--tw-gradient-stops))'
      },
      boxShadow:{
        "ctaBannerBoxShadow":"0px 4px 50px 0px rgba(42, 42, 42, 0.08)",
       "contactFormBoxShadow": "0px 2px 40px 0px rgba(55, 55, 55, 0.08)",
       "awardCardBoxShadow":"0px 4px 20px 0px rgba(82, 82, 82, 0.08)",
       "accordionBoxShadow":"0px 4px 60px 0px rgba(236, 98, 43, 0.12)",
       "keyPointBoxShadow":"2.932px 2.932px 29.32px 0px rgba(236, 98, 43, 0.12)",
       "ServiceSmallCTA":" 0px 4px 50px 0px rgba(42, 42, 42, 0.08)",
       "serviceDropdown":"4px 4px 20px 0px rgba(0, 0, 0, 0.20)"
      },
      textColor:{
        "keyPointIconColor":"linear-gradient(95deg, #EC622B 0%, #F39D43 100%)",
      },
      colors:{
          "primary-btn-bg-color":"linear-gradient(95deg, #EC622B 100%, #FFB60D 100%)"
      },
      backgroundColor:{

      }
    },
  },
  plugins: [],
};
