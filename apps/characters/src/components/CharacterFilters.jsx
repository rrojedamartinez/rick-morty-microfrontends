export default function CharacterFilters({
  filters,
  onChange,
  onSubmit,
  onClear,
}) {
  return (
    <form className="card card-body mb-4" onSubmit={onSubmit}>
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>

          <input
            id="name"
            name="name"
            className="form-control"
            value={filters.name}
            onChange={onChange}
          />
        </div>

        <div className="col-12 col-md-3">
          <label htmlFor="status" className="form-label">
            Estado
          </label>

          <select
            id="status"
            name="status"
            className="form-select"
            value={filters.status}
            onChange={onChange}
          >
            <option value="">Todos</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>

        <div className="col-12 col-md-3">
          <label htmlFor="species" className="form-label">
            Especie
          </label>

          <input
            id="species"
            name="species"
            className="form-control"
            value={filters.species}
            onChange={onChange}
          />
        </div>

        <div className="col-12 col-md-2 d-flex align-items-end">
          <div className="d-flex gap-2 w-100">
            <button type="submit" className="btn btn-dark">
              Buscar
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onClear}
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
