import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
<header>
<a href="/#" className="logo">PLATAFORMA</a>
    <nav ref={navRef} className="nav-container">
            <a href="/#">Soluções</a>
            <a href="/#">Indústrias</a>
            <a href="/#">Materiais</a>
            <a href="/#">Sobre</a>
            <button className="demonstracao" style={{ backgroundColor: '#5767aa' }}>Log in</button>
            <button className="demonstracao" style={{ backgroundColor: '#24c48e' }}>Demonstração</button>
        <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
    </button>
</header>
	);
}

export default Navbar;