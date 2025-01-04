/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
      textColor: {
        "button-primary-text": "var(--button-primary-text)",
        "button-secondary-text": "var(--button-secondary-text)",
        "button-tertiary-text": "var(--button-tertiary-text)",
      },
      borderColor: {
        "button-primary-border": "var(--button-primary-border)",
        "button-secondary-border": "var(--button-secondary-border)",
        "button-tertiary-border": "var(--button-tertiary-border)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      zIndex: {
        low: "var(--z-index-low)",
        medium: "var(--z-index-medium)",
        high: "var(--z-index-high)",
      },
    },
  },
  plugins: [],
};
