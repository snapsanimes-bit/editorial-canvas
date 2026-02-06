import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			cream: 'hsl(var(--cream))',
  			charcoal: 'hsl(var(--charcoal))',
  			gold: 'hsl(var(--gold))',
  			'gold-muted': 'hsl(var(--gold-muted))',
  			'warm-gray': 'hsl(var(--warm-gray))'
  		},
  		fontFamily: {
  			display: [
  				'Clash Display',
  				'Satoshi',
  				'sans-serif'
  			],
  			body: [
  				'Inter',
  				'sans-serif'
  			],
  			accent: [
  				'Playfair Display',
  				'serif'
  			],
  			sans: [
  				'Inter',
  				'ui-sans-serif',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Helvetica Neue',
  				'Arial',
  				'Noto Sans',
  				'sans-serif'
  			],
  			serif: [
  				'Lora',
  				'ui-serif',
  				'Georgia',
  				'Cambria',
  				'Times New Roman',
  				'Times',
  				'serif'
  			],
  			mono: [
  				'Space Mono',
  				'ui-monospace',
  				'SFMono-Regular',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'Liberation Mono',
  				'Courier New',
  				'monospace'
  			]
  		},
  		fontSize: {
  			hero: [
  				'clamp(3rem, 10vw, 8rem)',
  				{
  					lineHeight: '0.95',
  					letterSpacing: '-0.03em'
  				}
  			],
  			display: [
  				'clamp(2.5rem, 6vw, 5rem)',
  				{
  					lineHeight: '1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			section: [
  				'clamp(2rem, 4vw, 3.5rem)',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'2xl': '1rem',
  			'3xl': '1.5rem'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'30': '7.5rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'slide-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(50px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'blur-in': {
  				'0%': {
  					opacity: '0',
  					filter: 'blur(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					filter: 'blur(0)'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'spin-slow': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'pulse-glow': {
  				'0%, 100%': {
  					opacity: '0.4'
  				},
  				'50%': {
  					opacity: '0.8'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'blur-in': 'blur-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			marquee: 'marquee 30s linear infinite',
  			'spin-slow': 'spin-slow 20s linear infinite',
  			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
  			float: 'float 6s ease-in-out infinite'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-spotlight': 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(38 90% 55% / 0.15) 0%, transparent 60%)'
  		},
  		boxShadow: {
  			glow: '0 0 40px -10px hsl(38 90% 55% / 0.3)',
  			'glow-lg': '0 0 60px -15px hsl(38 90% 55% / 0.4)',
  			editorial: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
  		transitionTimingFunction: {
  			'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
  			'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
  			'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
