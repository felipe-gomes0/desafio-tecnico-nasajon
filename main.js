import { fetchIBGECities } from "./src/features/getCitiesIBGE.js";

async function main() {
	const ibgeCities = await fetchIBGECities();
	console.log(ibgeCities);
}

main();