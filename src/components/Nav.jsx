import logo from "../images/tinder_logo_white.png";
import colorLogo from "../images/tinder_logo_color.png";

const Nav = ({ minimal }) => {


    return (
        <nav>
            <div className="logo-container">
                <img src={minimal ? colorLogo : logo } alt="logo" className="logo"/>
            </div>
        </nav>
        );
}

export default Nav; 