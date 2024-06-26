import iconOnline from "./images/icon-online.svg";
import iconBudgeting from "./images/icon-budgeting.svg";
import iconOnboarding from "./images/icon-onboarding.svg";
import iconApi from "./images/icon-api.svg";

import imageCurrency from "./images/image-currency.jpg";
import imageRestaurant from "./images/image-restaurant.jpg";
import imagePlane from "./images/image-plane.jpg";
import imageConfetti from "./images/image-confetti.jpg";


function Body(){

    return(
        <article>
            <div className="first">
                <div className="left">
                    <h2 className="bigText">Next generation digital banking</h2>
                    <p className="smallText">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className="req">Request Invite</button>
                </div>
                <div className="right">
                    <img src="./src/images/image-mockups.png" alt="image-mockups"/>
                </div>
            </div>

            <div className="bg">
                <div className="second">
                    <h2 className="bigText">Why choose Easybank?</h2>
                    <p className="smallText second_p">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                    <div className="features">
                        <div>
                            <img src={iconOnline}/>
                            <h3>Online Banking</h3>
                            <p className="smallText">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                        </div>
                        <div>
                            <img src={iconBudgeting}/>
                            <h3>Simple Budgeting</h3>
                            <p className="smallText">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                        </div>
                        <div>
                            <img src={iconOnboarding}/>
                            <h3>Fast Onboarding</h3>
                            <p className="smallText">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                        </div>
                        <div>
                            <img src={iconApi}/>
                            <h3>Open API</h3>
                            <p className="smallText">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third">
                <h2 className="bigText">Latest Articles</h2>
                <div className="cards">
                    <div className="card">
                        <img src={imageCurrency}/>
                        <div>
                            <p className="articleAuthor">By Claire Robinson</p>
                            <p className="articleTitle">Receive money in any currency with no fees</p>
                            <p className="smallText2">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={imageRestaurant}/>
                        <div>
                            <p className="articleAuthor">By Wilson Hutton</p>
                            <p className="articleTitle">Treat yourself without worrying about money</p>
                            <p className="smallText2">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={imagePlane}/>
                        <div>
                            <p className="articleAuthor">By Ayonimofe Atoyebi</p>
                            <p className="articleTitle">Take your Easybank card wherever you go</p>
                            <p className="smallText2">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you…</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={imageConfetti}/>
                        <div>
                            <p className="articleAuthor">By Claire Robinson</p>
                            <p className="articleTitle">Our invite-only Beta accounts are now live!</p>
                            <p className="smallText2">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site…</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Body












































