import { config } from "dotenv";
config();

if (!process.env.SUPABASE_EMAIL || !process.env.SUPABASE_PASSWORD || !process.env.SUPABASE_API_KEY || !process.env.SUPABASE_URL_LOGIN) {
	console.error("Missing environment variables: ");
}

async function login() {
	const response = await fetch(
		process.env.SUPABASE_URL_LOGIN,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"apikey": process.env.SUPABASE_API_KEY,
			},
			body: JSON.stringify({
				email: process.env.SUPABASE_EMAIL,
				password: process.env.SUPABASE_PASSWORD,
			}),
		},
	);

	return response.json();
}


