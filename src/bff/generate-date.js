export const generateDate = () =>
	new Date(Math.random() * 1000000000000000 + 1999999999999)
		.toISOString()
		.substring(3, 13)
		.replace('T', ' ')
