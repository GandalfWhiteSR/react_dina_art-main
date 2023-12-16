import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.scss";

import HamburgerIcon from "../hamburger-icon/hamburger-icon";
import DarkModeButton from "../dark-mode-button/dark-mode-button";

const Navbar = ({ cartItems }) => {
    const [isNight, setDarkMode] = useState(false);
    const [menu, showMenu] = useState(false);

    const [itemInCart, setItemInCart] = useState(false);

    useEffect(() => {
        cartItems.length > 0 ? setItemInCart(true) : setItemInCart(false);
    }, [cartItems]);

    const handleChange = () => {
        isNight ? setDarkMode(false) : setDarkMode(true);
    };

    const handleHamburger = () => {
        if (menu === false && window.innerWidth < 992) showMenu(true);
        else if (menu === true && window.innerWidth < 992) showMenu(false);
    };

    useEffect(() => {
        isNight ?
            document.documentElement.classList.add("dark-mode") :
            document.documentElement.classList.remove("dark-mode");
    }, [isNight]);

    useEffect(() => {
        let t = new Date().getHours().valueOf();
        if (t >= 6 && t <= 19) {
            document.documentElement.classList.remove("dark-mode");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark-mode");
            setDarkMode(true);
        }
    }, []);

    return (
        <header>
            <img src={process.env.PUBLIC_URL + "/img/logo.jpg"} alt="Dina's logo" />
            <HamburgerIcon menu={menu} handleHamburger={handleHamburger} />
            <div className={`hiddenMenu ${menu ? "show" : ""}`}>
                <ul>
                    <DarkModeButton handleHamburger={handleHamburger} handleChange={handleChange} isNight={isNight} />
                    <Link to="/" onClick={handleHamburger}><li>HOME</li></Link>
                    <Link to="/shop" onClick={handleHamburger}><li>SHOP</li></Link>
                    <Link to="/about" onClick={handleHamburger}><li>ABOUT</li></Link>
                    <Link to="/cart" onClick={handleHamburger}>
                        <ion-icon name="cart"></ion-icon>
                        <div className={`red-circle ${itemInCart ? "show" : ""}`} />
                    </Link>
                </ul>
            </div>
            <div className="bg-line" />
        </header>
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Navbar);