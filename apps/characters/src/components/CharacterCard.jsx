const statusClasses = {
  Alive: "text-bg-success",
  Dead: "text-bg-danger",
  unknown: "text-bg-secondary",
};

export default function CharacterCard({ character, onSelect }) {
  const statusClass = statusClasses[character.status] || "text-bg-secondary";
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />

      <div className="card-body">
        <h2 className="h5">{character.name}</h2>

        <span className={`badge ${statusClass}`}>{character.status}</span>

        <p className="mt-3 mb-1">
          <strong>Especie:</strong> {character.species}
        </p>

        <p className="mb-3">
          <strong>Género:</strong> {character.gender}
        </p>

        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => onSelect(character.id)}
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
}
