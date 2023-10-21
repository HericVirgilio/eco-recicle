import './style.css'
import { lista } from "../../data/listaReciclagem.js"
const ListaReciclagem = () => {
    return(
        <div>
            <div className='Box-Titulo'>
                <h2 className='tituloBoxCard'>Oque você quer recilar?</h2>
            </div>
            <div className='genero-container'>
                {lista.map((lista) => (
                    <div className='container-card'> 
                        <h3 className='tituloCard'>{lista.name}</h3>
                        <div className='card' style={{ backgroundImage: `url(${lista.url})`, filter: 'brightness(70%)' }}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ListaReciclagem