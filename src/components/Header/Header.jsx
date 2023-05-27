import './Header.scss'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {

    return (

    <header className="header">
        <div className="header_container">
        <div className="header_logo_container">
            <img className="header_logo_img" src={logo} alt="logo"/>
            <h1 className="header_logo">PlanetPro Digital</h1>
        </div>
            <nav className="header_nav">
                <a className="header_link" href="#">Cursos en PDF</a>
                <a className="header_link" href="#">Plantillas</a>
                <a className="header_link" href="#">Software</a>
                <a className="header_link" href="#">Servicios</a>
            </nav>
            <CartWidget/>
        </div>
    </header>
    )
}

export default Header