import "../index.css";
const Header = () => {
	return (
		<>
			<header>
				<img
					src="/img/troll-face.png"
					alt="troll face"
					className="header--image"
				/>
				<h2 className="header--title">Meme Generator</h2>
				<h4 className="header--project">React Course - Project 3 </h4>
			</header>
			<div className="meme">
				<form>
					<input type="text" placeholder="Top Text" />
					<input type="text" placeholder="Bottom Text" />
				</form>
				<button type="button">Get a new meme image 🖼</button>
				<img src="/img/memeimg.png" alt="image meme" className="meme-img" />
			</div>
		</>
	);
};

export default Header;
