import "./dark-mode.button.scss";

const DarkModeButton = ({ isNight, handleHamburger, handleChange }) => {
    return (
        <div id="toggle-btn">
            <input id="myCheck" type="checkbox" onClick={handleHamburger} onChange={handleChange} checked={isNight} />
            <span></span>
        </div>
    );
};

export default DarkModeButton;