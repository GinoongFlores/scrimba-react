import "../index.css";

const Meme = () => {
	return (
		<main>
			<form className="form">
				<input type="text" placeholder="Top Text" className="form--input" />
				<input type="text" placeholder="Bottom Text" className="form--input" />
				<button type="button" className="form--button">
					Get a new meme image 🖼
				</button>
			</form>
			<img src="/img/memeimg.png" alt="image meme" className="meme-img" />
		</main>
	);
};

export default Meme;
