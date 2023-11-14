import './style.css'
import React from 'react'
import Heather from '../../components/heather'
import Footer from '../../components/footer'
import CoresRecilagem from "../../assets/images/coresRe.webp"

import banner from "../../assets/images/banner.jpg"
const PagPrincipiosDaReciclagem = () => {
    return (
        <div className='paginaUltima'>
            <Heather />
            <img className='bannerUltima' src={banner} alt="" />
            <div className='Containerultima'>
                <h1 className='Reciclagem'>Reciclagem</h1>
                <h3 className='ReciclagemSub'>A reciclagem é uma ação de suma importância para o desenvolvimento econômico e ambiental. Ela é resultado da transformação de resíduos sólidos descartáveis diversos.</h3>
                <ul>
                    <li>A reciclagem é um processo de transformação de resíduos sólidos descartáveis em novos insumos e produtos.</li>
                    <li>O processo de reciclagem é bastante antigo e foi ampliado mediante a grande produção de lixo no mundo.</li>
                    <li>A função da reciclagem é transformar um material descartável em um novo tipo de insumo e/ou produto.</li>
                    <li>A reciclagem é classificada conforme a forma de transformação em mecânica, energética e química.</li>
                    <li>As cores da reciclagem são uma forma de facilitar a identificação de espaços para a deposição correta de determinados tipos de lixo.</li>
                    <li>A reciclagem é importante para a preservação do meio ambiente e para o desenvolvimento econômico das comunidades.</li>
                </ul>
                <h2>Cores da reciclagem</h2>
                <p>Os tipos de materiais recicláveis são comumente classificados por meio de cores. Essa forma é facilmente visualizada em lixeiras dispostas em espaços públicos e privados, logo é uma maneira de facilitar a separação dos resíduos sólidos.
                O conjunto de cores indicativas para reciclagem vem sendo constantemente ampliado em razão de novos materiais passíveis de transformação. A figura abaixo apresenta as cores mais utilizadas na reciclagem junto do seu significado:</p>
                <div className='EncapsulaCores'>
                    <img  className='CoresRecilagem' src={CoresRecilagem} alt="" />
                    <ul className='tabela'>
                        <li>Amarelo: Metais</li>
                        <li>Azul: Papeis e papelões</li>
                        <li>Vermelho: Plásticos</li>
                        <li>Verd: Vidro</li>
                        <li>Preto: Madeiras</li>
                        <li>Laranja: Pilhas e baterias</li>
                        <li>Marrom: Lixo orgânico</li>
                        <li>Roxo: Lixo radioativo</li>
                        <li>Branco: Lixo Hospitalar</li>
                        <li>Cinza: Resíduos sólidos que não são recicláveis</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PagPrincipiosDaReciclagem