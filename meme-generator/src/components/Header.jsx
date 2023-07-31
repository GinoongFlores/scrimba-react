import "../index.css";
const Header = () => {
	return (
		<>
			<header>
				<div className="meme-side">
					<img
						src="/img/troll-face.png"
						alt="troll face"
						className="troll-face"
					/>
					<h2>Meme Generator</h2>
				</div>
				<p>React Course - Project 3 </p>
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
