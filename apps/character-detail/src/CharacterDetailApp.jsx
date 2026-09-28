import useCharacterDetail from "./hooks/useCharacterDetail";

export default function CharacterDetailApp({ characterId }) {
  const { character, episodes, loading, error } =
    useCharacterDetail(characterId);

  if (loading) {
    return (
      <div className="text-center py-5" role="status">
        <div className="spinner-border" />

        <p className="mt-2">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!character) {
    return null;
  }

  return (
    <main>
      <div className="card mb-4 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={character.image}
              className="img-fluid w-100"
              alt={character.name}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{character.name}</h1>

              <p>
                <strong>Estado:</strong> {character.status}
              </p>

              <p>
                <strong>Especie:</strong> {character.species}
              </p>

              <p>
                <strong>Género:</strong> {character.gender}
              </p>

              <p>
                <strong>Origen:</strong> {character.origin.name}
              </p>

              <p>
                <strong>Ubicación:</strong> {character.location.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="h4">Episodios</h2>

      <div className="list-group">
        {episodes.map((episode) => (
          <div className="list-group-item" key={episode.id}>
            <strong>{episode.episode}</strong>
            {" - "}
            {episode.name}
          </div>
        ))}
      </div>
    </main>
  );
}
