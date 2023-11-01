import './style.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Heather = () => {
    return(
        <div className="box">
          <div className='boxLogo'>
            <Link to={"/"}><img src={logo} alt="logo" className='logo'/></Link>
            <Link to={"/"} className='LinkHeather'>
              <h1 className='titulo'>EcoRecicle</h1>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menuHamburguer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
          </div>
        </div>
    )
}
export default Heather;
