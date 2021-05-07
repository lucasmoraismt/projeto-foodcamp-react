import React from "react";
import Option from "./Option";
import Bottom from "./Bottom";
import data from "../../data/info";

export default function Menu() {
	const [p, foods, drinks, desserts] = data;
	const [selectedFood, setSelectedFood] = React.useState([]);
	const [selectedDrink, setSelectedDrink] = React.useState([]);
	const [selectedDessert, setSelectedDessert] = React.useState([]);

	return (
		<>
			<div className="menu">
				<div className="options">
					<Option
						array={foods}
						p={p[0]}
						selected={selectedFood}
						setSelected={setSelectedFood}
					/>

					<Option
						array={drinks}
						p={p[1]}
						selected={selectedDrink}
						setSelected={setSelectedDrink}
					/>

					<Option
						array={desserts}
						p={p[2]}
						selected={selectedDessert}
						setSelected={setSelectedDessert}
					/>
				</div>
			</div>
			<Bottom
				foods={selectedFood}
				drinks={selectedDrink}
				desserts={selectedDessert}
			/>
		</>
	);
}
