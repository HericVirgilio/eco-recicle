import './style.css'
import imgBanner from '../../assets/images/imgBanner.png'
const Banner = () => {
    return(
        <div className='banner'>
            <div className='boxBanner'>
                <p className='textoBanner'><h2 className='tituloBanner'>EcoRecicle: Juntos Pelo Nosso Planeta!</h2> Bem-vindo ao EcoRecicle, sua fonte confiável em Vitória da Conquista para práticas de reciclagem conscientes. Explore nossos recursos para encontrar pontos de coleta próximos, aprenda dicas úteis sobre reciclagem e descubra maneiras inovadoras de descartar seu lixo de forma sustentável. Ao se juntar a nós, você faz parte de uma comunidade comprometida em preservar nosso planeta para as gerações futuras. Faça sua parte e embarque nessa jornada eco-friendly conosco!</p>
                <img src={imgBanner} alt="imagem banner" className='imgBanner'/>
            </div>
        </div>
    )
}
export default Banner