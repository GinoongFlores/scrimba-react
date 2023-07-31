// import React from 'react'
import { useState } from "react";
import "./index.css";

export default function FormSignUp() {
	const [dataForm, setDataForm] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		newsLetter: true,
	});
	/**
	 * Challenge: Connect the form to local state
	 *
	 * 1. Create a state object to store the 4 values we need to save.
	 * 2. Create a single handleChange function that can
	 *    manage the state of all the inputs and set it up
	 *    correctly
	 * 3. When the user clicks "Sign up", check if the
	 *    password & confirmation match each other. If
	 *    so, log "Successfully signed up" to the console.
	 *    If not, log "passwords to not match" to the console.
	 * 4. Also when submitting the form, if the person checked
	 *    the "newsletter" checkbox, log "Thanks for signing
	 *    up for our newsletter!" to the console.
	 */

	function handleChange(event) {
		const { name, type, value, checked } = event.target;
		// implicit return
		setDataForm((prevDataForm) => ({
			...prevDataForm,
			[name]: type === "checkbox" ? checked : value,
		}));
	}

	console.log(dataForm);

	function handleSubmit(event) {
		event.preventDefault();

		if (dataForm.password !== dataForm.confirmPassword) {
			console.log("passwords do not match");
			// add a return statement to prevent the newsletter message from showing up when the passwords do not match.
			return;
		} else if (
			dataForm.password.length < 1 &&
			dataForm.confirmPassword.length < 1
		) {
			console.log("Please fill out all fields");
		} else {
			console.log("Successfully signed up");
		}

		// dataForm.password !== dataForm.confirmPassword
		// 	? console.log("passwords do not match")
		// 	: dataForm.password.length < 1 && dataForm.confirmPassword.length < 1
		// 	? console.log("Please fill out all fields")
		// 	: console.log("Successfully signed up");

		if (dataForm.newsLetter) {
			console.log("Thanks for signing up for our newsletter!");
		}

		// dataForm.newsLetter &&
		// 	console.log("Thanks for signing up for our newsletter!");
	}

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					value={dataForm.email}
					placeholder="Email address"
					className="form--input"
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					value={dataForm.password}
					placeholder="Password"
					className="form--input"
					onChange={handleChange}
				/>
				<input
					type="password"
					name="confirmPassword"
					value={dataForm.confirmPassword}
					placeholder="Confirm password"
					className="form--input"
					onChange={handleChange}
				/>

				<div className="form--marketing">
					<input
						id="okayToEmail"
						type="checkbox"
						name="newsLetter"
						checked={dataForm.newsLetter}
						onChange={handleChange}
					/>
					<label htmlFor="okayToEmail">I want to join the newsletter</label>
				</div>
				<button className="form--submit">Sign up</button>
			</form>
		</div>
	);
}
