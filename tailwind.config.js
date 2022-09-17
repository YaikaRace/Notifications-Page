/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./public/index.html"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "white",
			red: "hsl(1, 90%, 64%)",
			blue: "hsl(219, 85%, 26%)",
			"v-l-grayish-blue": "hsl(210, 60%, 98%)",
			"l-grayish-blue-1": "hsl(211, 68%, 94%)",
			"l-grayish-blue-2": "hsl(205, 33%, 90%)",
			"grayish-blue": "hsl(219, 14%, 63%)",
			"d-grayish-blue": "hsl(219, 12%, 42%)",
			"v-d-blue": "hsl(224, 21%, 14%)",
		},
		extend: {
			fontFamily: {
				body: ["'Plus Jakarta Sans'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
