import "../index.css";
import memesData from "../memesData";

// console.log(memesData);

const Meme = () => {
	// console.log(memesData.data.memes.url);

	function buttonClick() {
		const randomeMemeImg =
			memesData.data.memes[
				Math.floor(Math.random() * memesData.data.memes.length)
			].url;
		console.log(randomeMemeImg);
	}

	return (
		<main>
			<form className="form">
				<input type="text" placeholder="Top Text" className="form--input" />
				<input type="text" placeholder="Bottom Text" className="form--input" />
				<button type="button" onClick={buttonClick} className="form--button">
					Get a new meme image 🖼
				</button>
				<img src="/img/memeimg.png" alt="image meme" className="meme-img" />
			</form>
		</main>
	);
};

export default Meme;
