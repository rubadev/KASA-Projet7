import './Error.css'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="containerError">
        <p className="textGrand">404</p>
        <p className="textMedium">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="redirectText" to="/">Retourner sur la page d'accueil</Link>
      </div>
  )
}

export default Error