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

	// Form
	const [formData, setFormData] = useState({
		// make sure the useState object has the same name as the name attribute of the input field.
		firstName: "",
		lastName: "",
	});
	// we can pass an event object to the handleChange function to listen to the event.
	// And listen to the every keystroke in the input field.
	function handleChange(event) {
		/* the event is a DOM property that has a target and value property. 
		The target property is the input field and the value property is the value of the input field. */
		// console.log(event.target.name); the name property specifies which input field is being changed by adding a name attribute to the input field.
		console.log(formData);
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				// surround the event.target.name with a computed property name to get the value of the name property. And to use the value of the name property as the key (also called a property name) of the object.
				[event.target.name]: event.target.value,
			};
		});
	}

	return (
		<>
			{squareElements}

			<form action="test">
				<input
					type="text"
					placeholder="First Name"
					// value={firstName}
					name="firstName"
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Last Name"
					// value={lastName}
					name="lastName"
					onChange={handleChange}
				/>
			</form>
		</>
	);
}

export default App;
