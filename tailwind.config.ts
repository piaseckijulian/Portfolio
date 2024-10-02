import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { screens: { xs: "420px" } } },
  plugins: [],
}

export default config
