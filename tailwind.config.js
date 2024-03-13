/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      PoppinsBold: ["Poppins-Bold", "sans-serif"],
      PoppinsSemi: ["Poppins-semiBold", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'hero-home': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'Maxximun-Gris': '808080',
        'Maxximum-Gris-Claro': 'E6E6E6',
        'Maxximum-Blanco': 'F2F2F3',
        'Maxximum-AzulOscuro': '0A182E',
        'Maxximum-Azul-Reg': '14253E',
        'Maxximum-Azul-Claro': '2B3D58',
        'Maxximum-Negro': '#000',
        'Maxximum-Blanco': '#FFFF'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}