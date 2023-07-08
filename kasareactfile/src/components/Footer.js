
import logoKasa from "../assets/images/LOGO-blanc.png"
import   './Footer.scss';
function Footer(){
    return (
    <footer>
        <div> 
        <figure>
            <img src={logoKasa} alt="" ></img>
        </figure>
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
    );
} 
export default Footer;