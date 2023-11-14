import Heather from "../../components/heather";
import Footer from "../../components/footer";
const Vidro = () => {
    return (
        <div className="Capsula">
            <Heather />

            <div className="boxMapa">
                <div className="boxGrid">
                <iframe className="Mapa45" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51889.26410770426!2d-40.92098566848147!3d-14.842499121850269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b43c4e314fb%3A0xea079cfd09622573!2sZ%C3%A9%20do%20vidro!5e0!3m2!1spt-BR!2sbr!4v1698860437073!5m2!1spt-BR!2sbr" width="200" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="boxInformacoes">
                        <h1>Zé do vidro</h1>
                        <p>Na Zé do Vidro, transformamos sustentabilidade em ação! Somos apaixonados por preservar o meio ambiente e contribuir para um futuro mais verde. Nossa empresa é dedicada a coletar, reciclar e reutilizar vidros de maneira responsável, reduzindo o impacto ambiental e promovendo a economia circular. </p>
                        <p>
                            📞 Entre em Contato:
                            Ligue para nós: (77) 98843-4849
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Vidro;
