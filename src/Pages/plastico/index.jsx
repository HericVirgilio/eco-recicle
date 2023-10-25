import "./style.css"
import Heather from "../../components/heather";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
const Plastico = () => {
    return(
        <div className="Capsula">
            <Heather/>
            <Banner/>
            <h1 className="tituloPagePlastico">Locais recomendados</h1>
            <div className="Container">
                <div className="boxMapa">
                    <iframe className="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30853.19609431881!2d-40.90785686523437!3d-14.844916099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463d130df5e795%3A0x6a71f14913aa31f9!2sTigre%20Reciclagem!5e0!3m2!1spt-BR!2sbr!4v1698244557105!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p>Fone: (77)3423-1123</p>
                <p>WhatsApp: (77)98814-4626</p>
            </div>

            <div className="ContainerDuvidas">
                <h5 className="tituloDuvidas">Dúvidas</h5>
                <div className="MateriasisBox">
                    Quais Materiais eles compram? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ArrowHero">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                <div className="PrincipiosReciclagem">
                    Principios da reciclagem
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ArrowHero">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Plastico;