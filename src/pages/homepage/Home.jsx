// import { useEffect } from "react";
import "./home.scss";
import Arrow from "../../components/arrow/arrow";

const Home = () => {
    return (
        <main>
            <p>Welcome to Dina's Canvas Art studio.</p>
            <div className="bg-line first"></div>
            <div className="portrets">
                <img className="inverted" src="img/portret_1.jpg" alt="" />
                <img className="inverted" src={"img/portret_3.jpg"} alt="" />
                <img className="inverted" src={process.env.PUBLIC_URL + "img/portret_2.jpg"} alt="" />
            </div>
            <Arrow />
            <p>I make an Abstract art! <br />
            All of them are exclusive, because I use an unique technique and therefore each one is different.<br />
            I use linen canvas with a stretcher. They are look great in offices, as well as in any other interior.</p>
            <div className="bg-line first"></div>
            <div className="squares">
                <img className="inverted" src="img/square_3.jpg" alt="" />
                <img className="inverted" src="img/landscape_1.jpg" alt="" />
                <img className="inverted" src="img/square_5.jpg" alt="" />
            </div>
            <p>You can choose a color pallet what characterizes your mood. <br /> Art is a shape of your enjoyment.</p>
            <div className="bg-line second"></div>
            <div className="circles">
                <img className="inverted" src="img/bubbles/circle_1.jpg" alt="" />
                <img className="inverted" src="img/bubbles/circle_3.jpg" alt="" />
                <img className="inverted" src="img/bubbles/circle_5.jpg" alt="" />
                <img className="inverted" src="img/bubbles/circle_6.jpg" alt="" />
                <img className="inverted" src="img/bubbles/circle_7.jpg" alt="" />
            </div>
        </main>
    );
}

export default Home;