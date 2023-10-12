import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./utils/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--bg-color)",
        "secondary-color": "var(--bg-secondary-color)",
        "txt-primary-color": "var(--text-color)",
        "table-row-color": "var(--table-row-color)",
        "table-row-hover-color": "var(--table-row-hover-color)",
      },
    },
  },
};
export default config;
