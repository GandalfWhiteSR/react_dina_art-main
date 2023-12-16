import { useState, useEffect } from "react";
import "./arrow.scss";

const Arrow = () => {
    const [showArrow, setArrow] = useState(true);

    useEffect(() => {
        const hiddingArrow = () => {
            if (window.scrollY > 0) {
                setArrow(false);
            } else if (window.scrollY === 0) {
                setArrow(true);
            }
        };

        window.addEventListener("scroll", hiddingArrow);
    }, [showArrow]);

    return (
        <div id="arrow" className={`${showArrow ? "show" : "hide"}`}><ion-icon name="chevron-down-circle-outline"></ion-icon></div>
    );
};

export default Arrow;