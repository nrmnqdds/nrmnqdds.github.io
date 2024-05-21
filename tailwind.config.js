/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sf: ["SFPro", "sans-serif"],
			},
		},
	},
	plugins: [],
};