/* eslint-disable react/prop-types */
import "./index.css";

export default function Box(props) {
	// receiving props from the App component
	const styles = {
		backgroundColor: props.on ? "#222222" : "transparent",
	};

	return (
		<div
			style={styles}
			className="box"
			// calling the toggle function from the App component
			onClick={props.handleClick}
		></div>
	);
}
