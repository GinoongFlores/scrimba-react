import "../index.css";
import memesData from "../memesData";
import { useState } from "react";

// console.log(memesData);

const Meme = () => {
	// const [memeImg, setMemeImg] = useState("http://i.imgflip.com/1bij.jpg");
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemeImages, setAllMemeImages] = useState(memesData);

	// Inline way to do it
	// const randomeMemeImg =
	// 	memesData.data.memes[
	// 		Math.floor(Math.random() * memesData.data.memes.length)
	// 	].url;

	// Another way to do it to make it more readable
	const memesArray = allMemeImages.data.memes; // array of memes
	const randomNumber = Math.floor(Math.random() * memesArray.length); // random number between 1 and 100
	let url = memesArray[randomNumber].url; // url of the meme at the random position

	function getMemeImg() {
		setMeme((prevState) => ({
			...prevState,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	return (
		<main>
			<form className="form">
				<input
					type="text"
					name="topText"
					value={meme.topText}
					placeholder="Top Text"
					className="form--input"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="bottomText"
					value={meme.bottomText}
					placeholder="Bottom Text"
					className="form--input"
					onChange={handleChange}
				/>
				<button type="button" onClick={getMemeImg} className="form--button">
					Get a new meme image 🖼
				</button>
				<div className="meme">
					<img src={meme.randomImage} alt="image meme" className="meme-img" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</form>
		</main>
	);
};

export default Meme;
