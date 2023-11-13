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
            <h1></h1>
          </div>
        </div>
    )
}
export default Heather;
