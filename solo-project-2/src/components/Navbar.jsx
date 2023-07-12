import "../index.css";
import Globe from "/img/globe.png";

const Navbar = () => {
	return (
		<div className="navbar-bd">
			<img src={Globe} alt="globe icon" />
			<p>my travel journal.</p>
		</div>
	);
};

export default Navbar;
