function Search({ filtro, setFiltro }) {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Buscar por título de la obra"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;
  