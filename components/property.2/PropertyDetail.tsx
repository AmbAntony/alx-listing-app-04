import React from "react";
import { PropertyProps } from "../../interfaces";

interface PropertyDetailProps {
	property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
	return (
		<div className="property-detail-card">
			<img src={property.image} alt={property.name} className="property-image" />
			<h2>{property.name}</h2>
			<p>
				{property.address.city}, {property.address.state}, {property.address.country}
			</p>
			<div>
				<strong>Rating:</strong> {property.rating} / 5
			</div>
			<div>
				<strong>Category:</strong> {property.category.join(", ")}
			</div>
			<div>
				<strong>Price:</strong> ${property.price}
				{property.discount && (
					<span className="discount"> &nbsp;({property.discount} off)</span>
				)}
			</div>
			<div>
				<strong>Offers:</strong>
				<ul>
					<li>Bed: {property.offers.bed}</li>
					<li>Shower: {property.offers.shower}</li>
					<li>Occupants: {property.offers.occupants}</li>
				</ul>
			</div>
		</div>
	);
};

export default PropertyDetail;
