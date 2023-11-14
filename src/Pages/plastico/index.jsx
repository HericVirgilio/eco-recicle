import "./style.css"
import Heather from "../../components/heather";
import Footer from "../../components/footer";
const Plastico = () => {
    return (
        <div className="Capsula">
            <Heather />

            <div className="boxMapa">        
                    <div>
                        <iframe className="Mapa45" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30853.19609431881!2d-40.90785686523437!3d-14.844916099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463d130df5e795%3A0x6a71f14913aa31f9!2sTigre%20Reciclagem!5e0!3m2!1spt-BR!2sbr!4v1698244557105!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                <div className="boxInformacoes">
                        <h1>Tigre Reciclagem</h1>
                        <p>Na Tigre Reciclagem, transformamos a maneira como você vê o plástico. Não descarte, recicle! Estamos dedicados a preservar nosso planeta!</p>
                        <p>
                            📞 Entre em Contato:
                            Ligue para nós: (77)3423-1123
                            Envie uma mensagem no WhatsApp: (77)98814-4626
                        </p>
                    </div>
            </div>
            <Footer />
        </div>
    )
}
export default Plastico;
