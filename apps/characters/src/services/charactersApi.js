const API_URL = "https://rickandmortyapi.com/api/character";

export async function getCharacters(filters, signal) {
  const params = new URLSearchParams();

  params.set("page", filters.page);

  if (filters.name) {
    params.set("name", filters.name);
  }

  if (filters.status) {
    params.set("status", filters.status);
  }

  if (filters.species) {
    params.set("species", filters.species);
  }

  const response = await fetch(`${API_URL}?${params.toString()}`, { signal });

  if (response.status === 404) {
    return {
      info: {
        count: 0,
        pages: 0,
      },
      results: [],
    };
  }

  if (!response.ok) {
    throw new Error(`Error al consultar personajes: ${response.status}`);
  }

  return response.json();
}
