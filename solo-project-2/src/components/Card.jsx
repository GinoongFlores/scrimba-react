import "../index.css";

const Card = (props) => {
	// console.log(props);
	return (
		<>
			<div className="card">
				<div className="img-div">
					<img
						src={`/img/${props.item.imgCountry}`}
						alt={`${props.item.altCountry}`}
						className="img-country"
					/>
				</div>
				<div className="card--details">
					<div className="card--country-view">
						<p>
							<img src="/img/location.svg" alt="location" />
							<span className="country">{props.item.country}</span>{" "}
						</p>
						<p>
							<a className="maps" href={`${props.item.googleMapsUrl}`}>
								View on Google Maps
							</a>
						</p>
					</div>
					<h2 className="landmark">{props.item.landmark}</h2>
					<p className="dates">
						<span className="bold">
							{props.item.startDate} - {props.item.endDate}
						</span>
					</p>
					<p>{props.item.description}</p>
				</div>
			</div>
		</>
	);
};

export default Card;
