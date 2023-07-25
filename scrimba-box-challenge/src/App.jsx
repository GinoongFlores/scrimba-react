import { useState } from "react";
import "./index.css";
import Box from "./Box";
import boxes from "./boxes";

function App() {
	const [squares, setSquare] = useState(boxes);

	function toggle(id) {}

	const squareElements = squares.map((square) => (
		<Box key={square.id} id={square.id} on={square.on} handleClick={toggle} />
	));

	return <>{squareElements}</>;
}

export default App;
