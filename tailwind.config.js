/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg' : "url('/src/assets/bg.jpg')",
        'bg1' : "url('/src/assets/bg2.png')",
        'bg2' : "url('/src/assets/bg3.jpg')",
        'bg3' : "url('/src/assets/bg4.png')",
        'project': "url('/src/assets/project1.png')"
      }
    },
  },
  plugins: [],
}

