import { useParams } from "react-router-dom"
import "../Componentes/Card.css"

const Card = ({characters}) => {
    const { id } = useParams()
    const oneChar = characters.filter((character) => character.id === parseInt(id))
    console.log(characters)
    
    return(
        <>
        {oneChar.map((char, index) => {
             return (
                    <div key={index}>
                        <h4>{char.name}</h4>
                        <img src={char.image} alt="" />
                        <p>Status: {char.status}</p>
                        <p>Species: {char.species}</p>
                        <p>Gender: {char.gender}</p>
                        <p>Location: {char.location.name}</p>
                        <p className="episodes">Episodes:</p>
                        <div className="episode">{char.episode}</div>
                        <textarea rows="10" cols="50" name="comment" defaultValue="Enter your comment"></textarea>
                    </div>
                    )
        })}
        </>
    )
}

export default Card;