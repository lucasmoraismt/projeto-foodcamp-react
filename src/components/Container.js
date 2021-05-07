import React from "react";
import Dish from "./Dish";
import Bottom from "./Bottom";

export default function Menu() {
	const titles = [
		"Primeiro, seu prato",
		"Agora, sua bebida",
		"Por fim, a sobremesa",
	];
	const foods = [
		{
			img: "frango-curry",
			title: "Bowl Frango Curry",
			description: "Yakimeshi e frango com molho curry.",
			price: "22,90",
		},
		{
			img: "sanduiche-frango",
			title: "Frango Defumado",
			description: "Cubos de frango com cream cheese.",
			price: "20,90",
		},
		{
			img: "pizza",
			title: "PROMO Pizza",
			description: "Uma salgada + uma doce.",
			price: "45,90",
		},
		{
			img: "kalzone",
			title: "Calzone de Bife",
			description: "Cubos de bife com muzzarella.",
			price: "15,90",
		},
	];
	const drinks = [
		{
			img: "refrigerante",
			title: "Refrigerante",
			description: "Lata 350ml.",
			price: "4,50",
		},
		{
			img: "cha",
			title: "Cha Ice Tea",
			description: "Garrafa 300ml.",
			price: "4,90",
		},
		{
			img: "suco",
			title: "Suco Natural",
			description: "Garrafa 500ml.",
			price: "5,50",
		},
		{
			img: "agua-coco",
			title: "Água de Coco",
			description: "Copo 300ml.",
			price: "3,90",
		},
	];
	const desserts = [
		{
			img: "rolinho",
			title: "Romeu e Julieta",
			description: "Rolinho recheado: queijo e goiabada.",
			price: "6,90",
		},
		{
			img: "brownie",
			title: "Brownie de Twix",
			description: "Chocolate, doce de leite, twix e morango.",
			price: "9,80",
		},
		{
			img: "pudim",
			title: "Pudim",
			description: "Delicioso pudim de leite.",
			price: "7,90",
		},
		{
			img: "donuts",
			title: "Donut Sortido",
			description: "Vários sabores incríveis.",
			price: "8,90",
		},
	];
	const [selectedFood, setSelectedFood] = React.useState([]);
	const [selectedDrink, setSelectedDrink] = React.useState([]);
	const [selectedDessert, setSelectedDessert] = React.useState([]);

	return (
		<>
			<div className="menu">
				<div className="options">
					<div>
						<p>Primeiro, seu prato</p>
						<ul>
							{foods.map((f) => (
								<Dish
									img={f.img}
									title={f.title}
									description={f.description}
									price={f.price}
									selected={selectedFood}
									setSelected={setSelectedFood}
								/>
							))}
							<li></li>
						</ul>
					</div>

					<div>
						<p>Agora, sua bebida</p>
						<ul>
							{drinks.map((d) => (
								<Dish
									img={d.img}
									title={d.title}
									description={d.description}
									price={d.price}
									selected={selectedDrink}
									setSelected={setSelectedDrink}
								/>
							))}
							<li></li>
						</ul>
					</div>

					<div>
						<p>Por fim, a sobremesa</p>
						<ul>
							{desserts.map((d) => (
								<Dish
									img={d.img}
									title={d.title}
									description={d.description}
									price={d.price}
									selected={selectedDessert}
									setSelected={setSelectedDessert}
								/>
							))}
							<li></li>
						</ul>
					</div>
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
