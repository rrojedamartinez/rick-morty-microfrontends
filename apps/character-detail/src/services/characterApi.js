const API_URL = "https://rickandmortyapi.com/api";

async function request(url, signal) {
  const response = await fetch(url, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Error al consultar la API: ${response.status}`);
  }

  return response.json();
}

export async function getCharacterDetail(characterId, signal) {
  const character = await request(
    `${API_URL}/character/${characterId}`,
    signal,
  );

  const episodeIds = character.episode.map((episodeUrl) => {
    return episodeUrl.split("/").pop();
  });

  const episodeData = await request(
    `${API_URL}/episode/${episodeIds.join(",")}`,
    signal,
  );

  const episodes = Array.isArray(episodeData) ? episodeData : [episodeData];

  return {
    character,
    episodes,
  };
}
