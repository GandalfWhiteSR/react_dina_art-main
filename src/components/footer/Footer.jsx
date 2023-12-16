import "./footer.scss";

export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer>
            <p>{getCurrentYear()} DINA ART.</p>
        </footer>
    );
}