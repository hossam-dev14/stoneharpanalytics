import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        bertioga: ["var(--font-bertiogas)", ...fontFamily.sans],
        bbTorsosPro: ["var(--font-bbTorsosPro)", ...fontFamily.sans],
        retrochips: ["Retrochips", "sans-serif", ...fontFamily.sans],
        // salmond: ["Salmond", ...fontFamily.sans],
      },

      colors: {
        /* Primary Brand Colors */
        primary: {
          light: "#0B3865", // Slightly lighter shade of primary
          DEFAULT: "#000232", // Main primary color
          dark: "#000121", // Darker shade if needed
        },

        /* Secondary Colors */
        secondary: {
          light: "#d16227", // Light for highlights
          DEFAULT: "#A64E1F", // Secondary main accent
          dark: "#853E19", // Darker version of secondary
        },

        /* Accent Colors */
        accent: {
          light: "#547493", // Light blue for complementary highlights
          DEFAULT: "#0B3865", // Warm contrasting color
          dark: "#082747", // Deeper accent for shadows
        },

        /* Neutral (Gray Scale) */
        neutral: {
          light: "#FFFEFF", // Lightest neutral for backgrounds
          DEFAULT: "#EDEDED", // Neutral soft gray
          dark: "#B3B3B3", // Dark neutral
        },

        /* Feedback Colors */
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
      },
      backgroundImage: {
        // "hero-contact": "url('/img/contact-bg.png')",
        // "hero-home": "url('/img/home-bg.png')",
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "50": "50", // For modals
        "100": "100", // For overlays
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
      },

      // added some screens sizes
      screens: {
        xs: "480px", // Extra small screen
      },
    },
  },
  plugins: [typographyPlugin],
};

export default config;
