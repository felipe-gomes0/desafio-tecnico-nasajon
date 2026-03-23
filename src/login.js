import { config } from "dotenv";
config();

if (!process.env.SUPABASE_EMAIL || !process.env.SUPABASE_PASSWORD || !process.env.SUPABASE_API_KEY) {
	console.error("Missing environment variables");
}

async function login() {
	const response = await fetch(
		"https://mynxlubykylncinttggu.supabase.co/auth/v1/signup",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"apikey": process.env.SUPABASE_API_KEY,
			},
			body: JSON.stringify({
				email: process.env.SUPABASE_EMAIL,
				password: process.env.SUPABASE_PASSWORD,
				data: {
					nome: "Felipe de Souza Gomes",
				},
			}),
		},
	);

	return response.json();
}


