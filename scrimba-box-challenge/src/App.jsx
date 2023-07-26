import { useState } from "react";
import "./index.css";
import Box from "./Box";
import boxes from "./boxes";

function App() {
	const [squares, setSquare] = useState(boxes);

	function toggle(id) {
		// let's make a declarative way to update the state
		setSquare((prevSquare) => {
			// return and map over the array of objects to go inside the array and get the objects. 
			// The map method will return a new array of objects  with the same length of the original array without modifying the original array of objects.
			return prevSquare.map((square) => {
				//Once inside the object, we want to check if the object's id matches the id passed in as an argument to the function.

				// If it matches, we want to return a new object of squares by spreading them and overwriting the `on` property with the opposite value of what it was before. 
				// And if it doesn't match, return the previous square.
				return square.id === id ? { ...square, on: !square.on } : square;
			});
		});
	}

	const squareElements = squares.map((square) => (
		<Box
			// passing props to the Box component from the App component
			key={square.id}
			on={square.on}
			// this is called closure where each of the box has the function toggle function with it's own id.
			handleClick={() => toggle(square.id)}
		/>
	));

	return <>{squareElements}</>;
}

export default App;
