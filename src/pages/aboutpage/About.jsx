import "./about.scss";

export default function About() {
    return (
        <main>
            <div className="info">
                {/* <!-- <h3>DINA FOMENKO</h3> --> */}
                <div className="photo">
                    <img className="dina inverted" src={process.env.PUBLIC_URL + "/img/dina.jpg"} alt="" />
                    <div className="social">
                        <a href="https://www.facebook.com/dinacanvasart"><img className="s_logo" src="/img/social/facebook.png"
                            alt="fb" /></a>
                        <a href=""><img className="s_logo" src="/img/social/instagram.png" alt="ins" /></a>
                        <a href=""><img className="s_logo" src="/img/social/gmail.png" alt="gmail" /></a>
                    </div>
                </div>
                <div>
                    <p>My name is <strong>Dina Fomenko</strong>.<br />
                        I have a degree in graphic design at Latvian University.<br />
                        At free time I love to hang out with my friends. <br />
                        Also I never stop making progress of my artistic skills.<br />
                        Always find something new what shows my personality.<br />
                        My clients love my job. They say that my paintings are in perfect harmony with their aura.<br />
                        Something magical and fascinating.<br />
                        Maybe I’ll draw your soul as well as others saying... </p>
                </div>
            </div>
        </main>
    );
}