import  "./Header.scss";
import logoKasa from "../assets/images/logoKasa.png"
import {NavLink} from "react-router-dom";
function Header(){
    return (
    <header >
        <div>
            <NavLink to="/">
              <img className="logoKasa" src={logoKasa} alt="logo kasa" />
            </NavLink>  
        </div>
        <nav>
            <NavLink to="/">
                <p >Accueil</p>
            </NavLink>
            <NavLink to="/Apropos">
                <p>A Propos</p>
            </NavLink>
        </nav>

    </header>
    );
}
export default Header ;