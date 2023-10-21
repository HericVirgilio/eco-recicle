import './style.css'
import logo from '../../assets/images/logo.png'
import instaLogo from '../../assets/images/insta-logo-black.png'
const Heather = () => {
    return(
        <div className="box">
          <div className='boxLogo'>
            <img src={logo} alt="logo" className='logo'/>
            <h1 className='titulo'>EcoRecicle</h1>
            <img src={instaLogo} alt="instaLogo" className='instagramlogo'/>
          </div>
        </div>
    )
}
export default Heather;
