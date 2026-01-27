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
                'secondary': '#A99BD4', // Lavender (lighter purple)
                'secondary-foreground': '#ffffff',
                'tertiary': '#06B6D4', // Cool cyan
                'tertiary-foreground': '#0a0a0f',
                // Legacy gold mapped to lavender purple
                'gold': '#A99BD4',
                'gold-light': '#C4B5E0',
                // Backgrounds
                'bg-primary': '#0a0a0f',
                'bg-secondary': '#111118',
                'bg-card': 'rgba(255, 255, 255, 0.03)',
                // GIC HeroSection Colors
                'gic-dark': '#0a0a0f',
                'gic-violet': '#8B7BB5',
                'gic-lavender': '#C4B5E0',
                'gic-purple': '#A99BD4',
                'gic-cyan': '#06B6D4',
            },
            fontFamily: {
                'display': ['"Fraunces"', '"Playfair Display"', '"Cormorant Garamond"', 'serif'],
                'sans': ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
                'elegant': ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
                'mono': ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            },
            spacing: {
                'safe-top': 'env(safe-area-inset-top)',
                'safe-bottom': 'env(safe-area-inset-bottom)',
                'safe-left': 'env(safe-area-inset-left)',
                'safe-right': 'env(safe-area-inset-right)',
                'micro': '0.125rem',
                'xxs': '0.25rem',
            },
            borderRadius: {
                'xs': '2px',
                'pill': '9999px',
            },
            boxShadow: {
                'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
                'colored': '0 8px 24px rgba(139, 123, 181, 0.3), 0 4px 12px rgba(169, 155, 212, 0.2)',
                'colored-lg': '0 16px 48px rgba(139, 123, 181, 0.4), 0 8px 24px rgba(169, 155, 212, 0.3)',
                'glow': '0 0 20px rgba(139, 123, 181, 0.4), 0 0 40px rgba(169, 155, 212, 0.2)',
                'glow-lg': '0 0 40px rgba(139, 123, 181, 0.5), 0 0 80px rgba(169, 155, 212, 0.3)',
            },
            transitionTimingFunction: {
                'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
        },
    },
    darkMode: "class",
    plugins: [heroui()],
}
