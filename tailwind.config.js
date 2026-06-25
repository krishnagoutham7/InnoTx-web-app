/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        highlight: 'hsl(var(--highlight))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
        'gradient-accent': 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))',
        'gradient-full': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
        'gradient-dark': 'linear-gradient(135deg, hsl(230 25% 8%), hsl(230 25% 5%))',
      },
      boxShadow: {
        'glow': '0 0 20px hsl(246 65% 59% / 0.3), 0 0 40px hsl(246 65% 59% / 0.2)',
        'glow-sm': '0 0 10px hsl(246 65% 59% / 0.3)',
        'glow-lg': '0 0 30px hsl(246 65% 59% / 0.4), 0 0 60px hsl(246 65% 59% / 0.3)',
        'glow-accent': '0 0 20px hsl(187 94% 43% / 0.3), 0 0 40px hsl(187 94% 43% / 0.2)',
        'glow-purple': '0 0 20px hsl(263 70% 56% / 0.3), 0 0 40px hsl(263 70% 56% / 0.2)',
        '3d': '0 2px 4px hsl(230 25% 2% / 0.3), 0 4px 8px hsl(230 25% 2% / 0.3), 0 8px 16px hsl(230 25% 2% / 0.3), 0 16px 32px hsl(230 25% 2% / 0.2)',
        'floating': '0 20px 25px -5px hsl(230 25% 2% / 0.5), 0 8px 10px -6px hsl(230 25% 2% / 0.5)',
        'floating-hover': '0 25px 50px -12px hsl(230 25% 2% / 0.6), 0 0 40px hsl(246 65% 59% / 0.15)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient': 'gradientShift 15s ease infinite',
        'holographic': 'holographic 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'counter': 'counter 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'border-rotate': 'rotateBorder 4s linear infinite',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'holographic': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(246 65% 59% / 0.3)' },
          '50%': { boxShadow: '0 0 40px hsl(246 65% 59% / 0.5), 0 0 60px hsl(246 65% 59% / 0.3)' },
        },
        'slideUp': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scaleIn': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'counter': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'rotateBorder': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
