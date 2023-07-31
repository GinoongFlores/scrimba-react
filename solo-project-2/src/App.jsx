import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CountryData from "./CountryData";
import "./index.css";

function App() {
	const countryCard = CountryData.map((country) => {
		return <Card key={country.id} {...country} />;
	});
	return (
		<>
			<div>
				<Navbar />

				<div className="card-wrapper">
					<h2>Using Map</h2>
					{countryCard}
				</div>
			</div>
		</>
	);
}

export default App;
