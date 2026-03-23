export async function fetchIBGECities() {
	try {
		const response = await fetch(
			"https://servicodados.ibge.gov.br/api/v1/localidades/municipios",
		);

		if (!response.ok) {
			throw new Error("Failed to fetch IBGE cities");
		}

		const data = await response.json();

		const cities = data.map((city) => {
			const ufObj = city.microrregiao?.mesorregiao?.UF || city["regiao-imediata"]?.["regiao-intermediaria"]?.UF;
			return {
				id_ibge: city.id,
				nome_oficial: city.nome,
				uf: ufObj?.sigla || "",
				regiao: ufObj?.regiao?.nome || "",
			};
		});

		return cities;

	} catch (error) {
		console.error(error);
		return null;
	}

}


