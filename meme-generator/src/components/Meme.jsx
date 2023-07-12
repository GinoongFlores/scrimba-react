import "../index.css";

const Meme = () => {
	return (
		<div className="meme">
			<form>
				<input type="text" placeholder="Top Text" />
				<input type="text" placeholder="Bottom Text" />
			</form>
			<button type="button">Get a new meme image 🖼</button>
			<img src="/img/memeimg.png" alt="image meme" className="meme-img" />
		</div>
	);
};

export default Meme;
