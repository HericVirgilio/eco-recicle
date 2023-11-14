import Heather from "../../components/heather";
import Footer from "../../components/footer";
const Papel = () => {
    return (
        <div className="Capsula">
            <Heather />

            <div className="boxMapa">
                <div className="boxGrid">
                    <iframe className="Mapa45" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30853.19609431881!2d-40.90785686523437!3d-14.844916099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463d130df5e795%3A0x6a71f14913aa31f9!2sTigre%20Reciclagem!5e0!3m2!1spt-BR!2sbr!4v1698244557105!5m2!1spt-BR!2sbr" width="200" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="boxInformacoes">
                        <h1>Tigre Reciclagem</h1>
                        <p>Na Tigre Reciclagem, transformamos a maneira como você vê o plástico. Não descarte, recicle! Estamos dedicados a preservar nosso planeta, um plástico de cada vez. Traga seus materiais plásticos até nós e dê uma nova vida a eles. Compramos o plástico dos nossos clientes e, dependendo da quantidade, podemos buscar pessoalmente. Faça parte da mudança, recicle hoje e ajude a construir um futuro mais sustentável para todos nós.</p>
                        <p>
                            📞 Entre em Contato:
                            Ligue para nós: (77)3423-1123
                            Envie uma mensagem no WhatsApp: (77)98814-4626
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}
export default Papel;
