import Confirm from "./Confirm";
import Disabled from "./Disabled";

export default function Bottom(props) {
	const { foods, drinks, desserts } = props;

	return (
		<div className="bottom">
			{foods.length >= 1 && drinks.length >= 1 && desserts.length >= 1 ? (
				<Confirm foods={foods} drinks={drinks} desserts={desserts} />
			) : (
				<Disabled />
			)}
		</div>
	);
}