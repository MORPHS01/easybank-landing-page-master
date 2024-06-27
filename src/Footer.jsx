import logo from "./images/logo.svg";
import iconFacebook from "./images/icon-facebook.svg";
import iconYoutube from "./images/icon-youtube.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconPinterest from "./images/icon-pinterest.svg";
import iconInstagram from "./images/icon-instagram.svg";

function Footer(){

    return(
        <div className="bg2">
            <footer>
                <div className="logoSocials">
                    <img src={logo} alt="Logo" className="footerLogo"/>
                    <ul className="socialIcons">
                        <li><img className="footerIcon" src={iconFacebook} alt="facebook" /></li>
                        <li><img className="footerIcon" src={iconYoutube} alt="youtube" /></li>
                        <li><img className="footerIcon" src={iconTwitter} alt="twitter" /></li>
                        <li><img className="footerIcon" src={iconPinterest} alt="pinterest" /></li>
                        <li><img className="footerIcon" src={iconInstagram} alt="instagram" /></li>
                    </ul>
                </div>
                <ul className="footerNav">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                <ul className="footerNav">
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
                <div className="footerLeft">
                    <button className="req">Request Invite</button>
                    <p className="smallText">© Easybank. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer









































