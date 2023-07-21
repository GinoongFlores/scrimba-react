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

	return (
		<main>
			<form className="form">
				<input type="text" placeholder="Top Text" className="form--input" />
				<input type="text" placeholder="Bottom Text" className="form--input" />
				<button type="button" onClick={getMemeImg} className="form--button">
					Get a new meme image 🖼
				</button>
				<img src={meme.randomImage} alt="image meme" className="meme-img" />
			</form>
		</main>
	);
};

export default Meme;
