import "../Componentes/Buscador.css"

const Buscador = ({characters, setCharacters, char}) => {
  
  const handleInput = (e) => {
      const charFilter = char.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setCharacters(charFilter)
 }

  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Search"
        className="buscador-input"
        onChange={handleInput}
      />
    </div>
  );
}

export default Buscador;