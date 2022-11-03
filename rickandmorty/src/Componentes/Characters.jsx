import "../Componentes/Characters.css";
import Buscador from "../Componentes/Buscador";
import { Link } from "react-router-dom"

const Characters = ({characters, setCharacters, char, setChar}) => { 
    return (
        <>
       <h1>characters</h1>
       <Buscador characters={characters} setCharacters={setCharacters} char={char} setChar={setChar} />
       <div className='container' >
            {characters.map((character) => {
            return (
            
            <Link to={`/characters/${character.id}`} className="subcontainer" key={parseInt(character.id)}>
                <h4>{character.name}</h4>
                <img src={character.image} alt="" />
                <p>status: {character.status}</p>
                <p>species: {character.species}</p>
                <p>gender: {character.gender}</p>
                <p>location: {character.location.name}</p>
                <p className='comentarios'>Comments: 0</p>
            </Link>
            )
        })}        
        </div>
        </>
    )

}

export default Characters;