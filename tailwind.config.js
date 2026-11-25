/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'PingFang SC', 'Microsoft YaHei', 'sans-serif']
      },
      colors: {
        ink: '#080b16',
        panel: '#11182b',
        line: 'rgba(148, 163, 184, 0.18)'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(74, 108, 247, 0.24)'
      }
    }
  },
  plugins: []
}
