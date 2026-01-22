import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            'xs': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
        },
        extend: {
            colors: {
                // Dark Theme Color Palette
                'rose': '#8B7BB5',
                'olive': '#788008',
                'violet': '#8B7BB5',
                'crimson': '#6E0B36',
                'midnight': '#0a0a0f',
                // Semantic Colors for UI Components
                'primary': '#8B7BB5', // Accent violet
                'primary-foreground': '#0a0a0f',
                // Legacy gold mapped to accent
                'gold': '#8B7BB5',
                'gold-light': '#A99BD4',
                // Backgrounds
                'bg-primary': '#0a0a0f',
                'bg-secondary': '#111118',
                'bg-card': 'rgba(255, 255, 255, 0.03)',
                // GIC HeroSection Colors
                'gic-dark': '#0a0a0f',
                'gic-violet': '#A99BD4',
                'gic-lavender': '#C4B5E0',
            },
            fontFamily: {
                'display': ['"Playfair Display"', 'serif'],
                'sans': ['"Outfit"', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            },
            spacing: {
                'safe-top': 'env(safe-area-inset-top)',
                'safe-bottom': 'env(safe-area-inset-bottom)',
                'safe-left': 'env(safe-area-inset-left)',
                'safe-right': 'env(safe-area-inset-right)',
            }
        },
    },
    darkMode: "class",
    plugins: [heroui()],
}
