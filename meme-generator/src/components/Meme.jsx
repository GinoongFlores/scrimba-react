import "../index.css";
import React from "react";
import memesData from "../memesData";

// console.log(memesData);

const Meme = () => {
	const [memeImg, setMemeImg] = React.useState("");

	// Inline way to do it
	// const randomeMemeImg =
	// 	memesData.data.memes[
	// 		Math.floor(Math.random() * memesData.data.memes.length)
	// 	].url;

	// Another way to do it to make it more readable
	const memesArray = memesData.data.memes; // array of memes
	const randomNumber = Math.floor(Math.random() * memesArray.length) + 1; // random number between 1 and 100
	let url = memesArray[randomNumber].url; // url of the meme at the random position

	function getMemeImg() {
		// we can decide not to use a callback function here because we will not be using the previous state of the `memeImg` state which is the empty string.
		setMemeImg(url);

		console.log(memeImg);
	}

	return (
		<main>
			<form className="form">
				<input type="text" placeholder="Top Text" className="form--input" />
				<input type="text" placeholder="Bottom Text" className="form--input" />
				<button type="button" onClick={getMemeImg} className="form--button">
					Get a new meme image 🖼
				</button>
				<img src={memeImg} alt="image meme" className="meme-img" />
			</form>
		</main>
	);
};

export default Meme;
