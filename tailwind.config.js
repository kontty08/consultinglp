module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#111827', // 黒系
          600: '#0f172a',
          700: '#1f2937',
          800: '#18181b',
          900: '#0a0a0a',
        },
        secondary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#008B8B', // secondary teal
          600: '#007474',
          700: '#005d5d',
          800: '#004646',
          900: '#002f2f',
        },
        accent: {
          50: '#f5e6f5',
          100: '#ebcceb',
          200: '#d699d6',
          300: '#c266c2',
          400: '#ad33ad',
          500: '#800080', // accent purple
          600: '#6b006b',
          700: '#560056',
          800: '#410041',
          900: '#2b002b',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}