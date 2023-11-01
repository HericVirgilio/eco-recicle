import "./style.css"
import Heather from "../../components/heather";
import Footer from "../../components/footer";

const bateria = () => {
    return (
        <div className="Capsula">
            <Heather />

            <div className="boxMapa">
                <div className="boxGrid">
                    <iframe className="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30853.19609431881!2d-40.90785686523437!3d-14.844916099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463d130df5e795%3A0x6a71f14913aa31f9!2sTigre%20Reciclagem!5e0!3m2!1spt-BR!2sbr!4v1698244557105!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            <div className="boxTexto">
                <h1>Principios da Reciclagem</h1>
                <p className="texto_auxiliar">Antes de Descartar, Compreenda a Sustentabilidade: Descubra Como Contribuir para um Mundo Mais Verde! Explore Nosso Site para as Melhores Dicas sobre uma Vida Eco-Friendly. Juntos, Podemos Fazer a Diferença! 🌱♻️</p>
            </div>
            <div className="Opcoes">
                <div className="Itens">
                    <div className="Item"><h1>Reduzir</h1> <p className="paragrafo">A primeira etapa é reduzir a quantidade de resíduos que geramos. Isso envolve consumir de forma consciente, comprando apenas o necessário, evitando desperdícios e optando por produtos com menos embalagens. Reduzir também inclui escolher produtos duráveis em vez de descartáveis, o que ajuda a diminuir a produção de resíduos a longo prazo.</p></div>
                    <div className="Item"><h1>Reutilizar</h1><p className="paragrafo"> Reutilizar implica dar uma segunda vida aos itens. Em vez de descartar algo após o primeiro uso, considere se ele pode ser reutilizado. Isso pode incluir doar roupas e brinquedos, consertar objetos quebrados em vez de substituí-los, ou reabastecer recipientes vazios em vez de comprar novos. Reutilizar ajuda a reduzir a demanda por novos produtos e a quantidade de resíduos enviados para aterros sanitários.</p></div>
                    <div className="Item"><h1>Reciclar</h1><p className="paragrafo">Reciclar envolve processar materiais descartados para produzir novos produtos. Isso inclui separar materiais recicláveis, como papel, vidro, plástico e metal, para que possam ser enviados para instalações de reciclagem. Reciclar economiza recursos naturais, reduz a poluição e economiza energia em comparação com a produção de novos materiais a partir de matérias-primas virgens.</p></div>
                    <div className="Item"><h1>Conscientização Ambiental</h1><p className="paragrafo">

                        A conscientização ambiental é fundamental para sensibilizar as pessoas sobre a importância de preservar o meio ambiente. Envolve informar sobre questões como mudanças climáticas e poluição, promovendo a compreensão das interconexões entre a humanidade e o ecossistema. Capacita indivíduos a tomar decisões responsáveis, reduzindo consumo e apoiando práticas sustentáveis para um futuro mais saudável para o planeta.</p></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default bateria;
