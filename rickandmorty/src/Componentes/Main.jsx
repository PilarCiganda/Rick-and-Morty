import { Link } from "react-router-dom";
import "../Componentes/Main.css"

const Main = () => {
    return (
    <>
        <Link to="/characters" className="characters">
        <div className="logo"></div>
        </Link>
    </>
    )
    
}

export default Main;