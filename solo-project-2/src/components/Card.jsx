import "../index.css";

const Card = (props) => {
	// console.log(props);
	return (
		<>
			<div className="card">
				<img
					src={`src/assets/img/${props.imgCountry}`}
					alt={`${props.altCountry}`}
					className="img-country"
				/>
				<div className="card--details">
					<div className="card--country-view">
						<p>
							<img src="src/assets/location.svg" alt="location" />
							<span className="country">{props.country}</span>{" "}
						</p>
						<p>
							<a className="maps" href={`${props.googleMapsUrl}`}>
								View on Google Maps
							</a>
						</p>
					</div>
					<h2 className="landmark">{props.landmark}</h2>

					<p className="dates">
						<span className="bold">
							{props.startDate} - {props.endDate}
						</span>
					</p>
					<p>{props.description}</p>
				</div>
			</div>
		</>
	);
};

export default Card;
