
function Footer(){

    return(
        <div className="bg2">
            <footer>
                <div className="logoSocials">
                    <img src="./src/images/logo.svg" alt="Logo" className="footerLogo"/>
                    <ul className="socialIcons">
                        <li><img className="footerIcon" src="./src/images/icon-facebook.svg" alt="facebook" /></li>
                        <li><img className="footerIcon" src="./src/images/icon-youtube.svg" alt="youtube" /></li>
                        <li><img className="footerIcon" src="./src/images/icon-twitter.svg" alt="twitter" /></li>
                        <li><img className="footerIcon" src="./src/images/icon-pinterest.svg" alt="pinterest" /></li>
                        <li><img className="footerIcon" src="./src/images/icon-instagram.svg" alt="instagram" /></li>
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









































