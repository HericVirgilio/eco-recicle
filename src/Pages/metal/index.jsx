import "./style.css"
import Heather from "../../components/heather";
import Footer from "../../components/footer";
const eletronicos = () => {
    function Escolha(){
        const select = document.getElementById('opcao');
        const div = document.getElementById('boxGrid')
        const valor = select.value;
        if(valor == 1){
          div.innerHTML = `<div className="boxMapa"><iframe className="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.6667669128383!2d-40.85009382389716!3d-14.843948900273006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b1052bbf4dd%3A0xe050b9e90ef9e579!2ssucata%20sol!5e0!3m2!1spt-BR!2sbr!4v1698867244873!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          
              <div className="boxTextoM">
                  <h1 className="sucata">Sucata Sol</h1>
                  <p>Na Sucata Sol Baterias Eletrônicos Latas de Metal, acreditamos no poder da reciclagem para criar um futuro mais sustentável. Especializados na reciclagem de baterias, eletrônicos e latas de metal, estamos empenhados em transformar resíduos em recursos valiosos. Nossa equipe dedicada utiliza tecnologias avançadas para reciclar baterias, dispositivos eletrônicos e latas de metal de forma segura e eficiente, reduzindo o impacto ambiental. Ao escolher a Sucata Sol, você está contribuindo para a preservação do meio ambiente, enquanto apoia uma economia circular e promove a conscientização sobre a importância da reciclagem. Junte-se a nós nessa jornada verde e faça parte da mudança positiva para o nosso planeta!</p>
                  <p>
                      📞 Entre em Contato:
                      Ligue para nós: (77) 99828-6033
                  </p>
              </div>
        `
        }else if(valor == 2){
            div.innerHTML = `<div className="boxMapa"><iframe className="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.19773888874!2d-40.8647438!3d-14.870217400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b6d82a0c373%3A0xed68b9278cfbe43d!2sFonseca%20Metais!5e0!3m2!1spt-BR!2sbr!4v1698867337358!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            
                <div className="boxTextoM">
                    <h1>Fonseca Metais</h1>
                    <p>Na Fonseca Metais, a sustentabilidade é o nosso negócio! Somos apaixonados por reciclagem e estamos empenhados em transformar resíduos em recursos valiosos. Especializados na reciclagem de metais, oferecemos soluções ambientalmente responsáveis para empresas e indivíduos. Nossa equipe altamente qualificada utiliza tecnologias avançadas para processar metais de maneira eficiente, reduzindo a pegada de carbono e promovendo a economia circular. Ao escolher a Fonseca Metais, você está fazendo uma escolha consciente pelo meio ambiente, contribuindo para a preservação dos recursos naturais e apoiando um futuro mais sustentável. Faça parte dessa missão verde conosco e juntos construiremos um mundo melhor para as gerações futuras!</p>
                    <p>
                        📞 Entre em Contato:
                        Ligue para nós: (77) 3426-1312
                    </p>
                </div>
            `
        }else if(valor == 3){
            div.innerHTML = `<div className="boxMapa"><iframe className="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.6116725130123!2d-40.8823932239623!3d-14.847036885669043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463bbb47d73c51%3A0xefafa91dea8a4939!2sSucata%20Prescom%20Metais!5e0!3m2!1spt-BR!2sbr!4v1698867524102!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <div className="boxTextoM">
                <h1>Sucata Prescom Metais,</h1>
                <p>Na Sucata Prescom Metais, transformamos desperdício em oportunidade, liderando o caminho para um futuro mais verde e sustentável. Somos especialistas na reciclagem de metais, oferecendo soluções inovadoras para o descarte responsável de resíduos metálicos. Nossa abordagem eficiente e tecnologicamente avançada garante que os materiais sejam reciclados de maneira ambientalmente consciente, reduzindo significativamente o impacto no meio ambiente. Ao escolher a Sucata Prescom Metais, você está optando por uma parceria que vai além da reciclagem, é um compromisso com a preservação do nosso planeta. Junte-se a nós nessa jornada e faça parte da mudança para um mundo mais limpo e sustentável!</p>
                <p>
                    📞 Entre em Contato:
                    Ligue para nós: (77) 3425-7084
                </p>
            </div>`
        }
    }
    return (
        <div className="Capsula">
            <Heather />
            <div className="boxMapa">
                <h2>Selecione o centro de reciclagem mais proximo a você</h2>
                <div className="select">
                    <select id="opcao">
                        <option value="1">Sucata sol (Ibirapuera)</option>
                        <option value="2">Fonseca Metais (Bairro Brasil)</option>
                        <option value="3">Sucata Prescom Metais (Avenida Brumado)</option>
                    </select>
                    <button className="botao" type="submit" onClick={Escolha}>submit</button>
                </div>
                <div id="boxGrid" className="boxContainertudo">
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
export default eletronicos;
