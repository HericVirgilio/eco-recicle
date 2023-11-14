import Heather from "../../components/heather";
import Footer from "../../components/footer";

const bateria = () => {
    return (
        <div className="Capsula">
            <Heather />

            <div className="boxMapa">
                <div className="boxGrid">
                    <iframe className="Mapa45" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30853.19609431881!2d-40.90785686523437!3d-14.844916099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463d130df5e795%3A0x6a71f14913aa31f9!2sTigre%20Reciclagem!5e0!3m2!1spt-BR!2sbr!4v1698244557105!5m2!1spt-BR!2sbr" width="200" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="boxInformacoes">
                        <h1>Baterias Cral</h1>
                        <p>
                            A Baterias Cral é uma empresa especializada na reciclagem de baterias, dedicada a proteger o meio ambiente e promover práticas sustentáveis. Com tecnologia avançada e processos eficientes, a empresa se empenha em coletar, desmontar e reciclar baterias usadas de maneira segura e ambientalmente responsável. Ao adotar métodos eco-friendly, a Baterias Cral contribui para a preservação dos recursos naturais, evitando a contaminação do solo e da água. Além disso, a empresa desempenha um papel educativo vital, conscientizando a comunidade sobre os perigos do descarte inadequado de baterias e incentivando a adoção de práticas ecologicamente corretas.</p>
                        <p>
                            📞 Entre em Contato:
                            Ligue para nós: (77) 3421-9867
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default bateria;
