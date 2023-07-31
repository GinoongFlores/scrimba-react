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
		email: "",
		comments: "",
		isFriendly: true, // for checkbox. Checkboxes are boolean values.
		employment: "", // for radio buttons
		favColor: "", // for select
	});
	// the single source of truth in react forms is when need to have a value attribute on the input field. And the value attribute is set to the state objects value. So we React can control the state of the input field.

	console.log(formData.favColor);

	// we can pass an event object to the handleChange function to listen to the event.
	// And listen to the every keystroke in the input field.
	function handleChange(event) {
		/* the event is a DOM property that has a target and value property. 
		The target property is the input field and the value property is the value of the input field. */

		const { name, value, type, checked } = event.target; // destructuring the event.target object

		// console.log(event.target.name); the name property specifies which input field is being changed by adding a name attribute to the input field.
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				// surround the event.target.name with a computed property name to get the value of the name property. And to use the value of the name property as the key (also called a property name) of the object.
				// we also use the name  property to know which input field is being changed.
				[name]: type === "checkbox" ? checked : value,
			};
		});
	}

	function handleSubmit(event) {
		event.preventDefault(); // prevent the page from refreshing when the form is submitted. Also to remove the query string from the url. The query string is the value of every inputs in the form. And rerender the component with the default values and state.
		console.log(formData);
	}

	return (
		<>
			{squareElements}

			<h1>Forms</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="First Name"
					name="firstName"
					onChange={handleChange}
					value={formData.firstName}
				/>
				<input
					type="text"
					placeholder="Last Name"
					name="lastName"
					onChange={handleChange}
					value={formData.lastName}
				/>
				<input
					type="text"
					placeholder="Email"
					name="email"
					onChange={handleChange}
					value={formData.email}
				/>

				{/* textarea */}
				<textarea
					placeholder="comments"
					name="comments"
					onChange={handleChange}
					value={formData.comments}
				/>

				{/* checkbox */}
				{/* the checked property is used for checkbox instead of the value  */}
				<input
					type="checkbox"
					id="isFriendly"
					checked={formData.isFriendly}
					onChange={handleChange}
					name="isFriendly"
				/>
				{/* match the id to the htmlFor */}
				<label htmlFor="isFriendly">Are you friendly?</label>
				<br />
				<br />

				{/* Radio buttons */}
				<fieldset>
					<legend>Current employment status</legend>

					<input
						type="radio"
						id="unemployed"
						name="employment"
						/* 
						Once we change the state, React rerender's the form. We make the `formData.employment` a boolean value by checking if it's equal to the value property and if its checked or not. 
						That's why when one is checked the others is unchecked. 
						*/
						value={"unemployed"}
						checked={formData.employment === "unemployed"}
						onChange={handleChange}
					/>
					<label htmlFor="unemployed">Unemployed</label>
					<br />

					<input
						type="radio"
						id="part-time"
						name="employment"
						value={"part-time"}
						checked={formData.employment === "part-time"}
						onChange={handleChange}
					/>
					<label htmlFor="part-time">Part-time</label>
					<br />

					<input
						type="radio"
						id="full-time"
						name="employment"
						value={"full-time"}
						checked={formData.employment === "full-time"}
						onChange={handleChange}
					/>
					<label htmlFor="full-time">Full-time</label>
					<br />
				</fieldset>

				{/* select box */}
				<label htmlFor="favColor">What is your favorite color?</label>
				<br />
				<select
					id="favColor"
					value={formData.favColor}
					onChange={handleChange}
					name="favColor"
				>
					{/* add a choose option to cover the empty string */}
					<option value="">--Choose--</option>
					<option value="red">Red</option>
					<option value="orange">Orange</option>
					<option value="yellow">Yellow</option>
					<option value="green">Green</option>
					<option value="blue">Blue</option>
					<option value="indigo">Indigo</option>
					<option value="violet">Violet</option>
				</select>

				<button>Submit</button>
			</form>
		</>
	);
}

export default App;
