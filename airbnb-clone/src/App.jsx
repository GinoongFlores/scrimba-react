import "./style.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

// we can console.log the data (array of objects) to see what it looks like
// console.log(data);

function App() {
	// the item variable is an instance of the data array of objects and we are mapping over it to get the values that we need from each object.
	const cardData = data.map((item) => {
		return (
			<Card
				key={item.id}
				// here we are passing the entire item object as a prop to the Card component and then we call the values that we need by Ex. (props.item.id)
				item={item}
			/>
		);
	});
	return (
		<>
			<Navbar />
			<Hero />
			<section className="cards-lists">{cardData}</section>
		</>
	);
}

export default App;
