import "./style.css"
import { Link } from "react-router-dom";
const BotãoPrincipiosRecilagem = () => {
    return(
        <Link to={"principios-da-reciclagem"} className="CaixaBotao">
            <span className="tectoBotao">Princípios da Reciclagem</span>
        </Link>
    )
}
export default BotãoPrincipiosRecilagem;