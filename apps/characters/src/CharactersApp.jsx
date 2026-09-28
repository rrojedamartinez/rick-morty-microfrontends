import CharacterCard from "./components/CharacterCard";
import CharacterFilters from "./components/CharacterFilters";
import useCharacters from "./hooks/useCharacters";

export default function CharactersApp({
  onSelectCharacter = () => {}
}) {
  const {
    characters,
    filters,
    page,
    pages,
    total,
    loading,
    error,
    updateFilter,
    searchCharacters,
    clearFilters,
    previousPage,
    nextPage
  } = useCharacters();

  return (
    <main>
      <h1 className="mb-4">
        Personajes
      </h1>

      <CharacterFilters
        filters={filters}
        onChange={updateFilter}
        onSubmit={searchCharacters}
        onClear={clearFilters}
      />

      {loading && (
        <div
          className="text-center py-5"
          role="status"
        >
          <div className="spinner-border" />

          <p className="mt-2">
            Cargando...
          </p>
        </div>
      )}

      {error && !loading && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {!loading &&
        !error &&
        characters.length === 0 && (
          <div className="alert alert-info">
            No se encontraron personajes.
          </div>
        )}

      {!loading &&
        !error &&
        characters.length > 0 && (
          <>
            <p>
              Resultados: {total}
            </p>

            <div className="row g-4">
              {characters.map((character) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  key={character.id}
                >
                  <CharacterCard
                    character={character}
                    onSelect={onSelectCharacter}
                  />
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
              <button
                type="button"
                className="btn btn-outline-dark"
                disabled={page === 1}
                onClick={previousPage}
              >
                Anterior
              </button>

              <span>
                Página {page} de {pages}
              </span>

              <button
                type="button"
                className="btn btn-outline-dark"
                disabled={page === pages}
                onClick={nextPage}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
    </main>
  );
}