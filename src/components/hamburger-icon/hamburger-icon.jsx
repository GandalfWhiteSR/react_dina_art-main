import "./hamburger-icon.scss";

const HamburgerIcon = ({ menu, handleHamburger }) => {
    return (
        <div>
            <div className="hamburger" onClick={handleHamburger}>
                <div className={`line1 lines ${menu ? "X" : ""}`}></div>
                <div className={`line2 lines ${menu ? "X" : ""}`}></div>
                <div className={`line3 lines ${menu ? "X" : ""}`}></div>
            </div>
        </div>
    );
};

export default HamburgerIcon;