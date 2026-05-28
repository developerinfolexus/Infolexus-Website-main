/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#040e4b',
                'brand-blue': '#00A3FF',
                'brand-purple': '#7B2CBF',
                'brand-surface': '#0b1652',
                // Mapping typical shadcn/ui-like names or user request names to our palette
                'background': '#040e4b',
                'foreground': '#ffffff',
                'muted-foreground': '#94a3b8', // slate-400
                'border': 'rgba(255,255,255,0.1)',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                display: ['"Outfit"', 'sans-serif'],
            },
            animation: {
                'shimmer': 'shimmer 2s linear infinite',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-up-delay-1': 'fadeUp 0.8s ease-out 0.2s forwards',
                'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.4s forwards',
                'fade-up-delay-3': 'fadeUp 0.8s ease-out 0.6s forwards',
                'fade-up-delay-4': 'fadeUp 0.8s ease-out 0.8s forwards',
                'border-spin': 'border-spin 7s linear infinite',
                "meteor-effect": "meteor 5s linear infinite",
            },
            keyframes: {
                shimmer: {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(100%)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                "border-spin": {
                    "100%": {
                        transform: "rotate(-360deg)",
                    },
                },
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
            }
        },
    },
    plugins: [],
}
