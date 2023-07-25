import { useState } from "react";
import "./index.css";
import Box from "./Box";
import boxes from "./boxes";

function App() {
	const [squares, setSquare] = useState(boxes);

	function toggle(id) {
		setSquare((prevSquare) => {
			// create a new array
			const newSquare = [];
			// loop over the old array of squares{}
			// this is an imperative way of updating the state rather than declarative.
			for (let i = 0; i < prevSquare.length; i++) {
				// store previous square objects in a variable
				const currentSquare = prevSquare[i];
				console.log(currentSquare);
				// if the current square id is equal to the id passed in the function
				if (currentSquare.id === id) {
					// create a new object with the current square
					const updateSquare = {
						// get all the properties from the current square object except the on property and set it to the opposite of the current on property
						...currentSquare,
						on: !currentSquare.on,
					};
					// push the updateSquare to the newSquare array
					console.log(updateSquare);
					newSquare.push(updateSquare);
				} else {
					// else push the current square to the newSquare array
					newSquare.push(currentSquare);
				}
			}
			// return the newSquare array to let React render our square state array with the updated square.
			return newSquare;
		});
	}

	const squareElements = squares.map((square) => (
		<Box key={square.id} id={square.id} on={square.on} handleClick={toggle} />
	));

	return <>{squareElements}</>;
}

export default App;
