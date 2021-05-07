import React from "react";

export default function Confirm(props) {
	const { foods, drinks, desserts } = props;

	function calcTotal(foods, drinks, desserts) {
		let totalDishes = 0;
		foods.forEach((f) => {
			f.price = f.price.replace(",", ".");
			totalDishes += parseFloat(f.price * f.amount);
		});
		drinks.forEach((d) => {
			d.price = d.price.replace(",", ".");
			totalDishes += parseFloat(d.price * d.amount);
		});
		desserts.forEach((d) => {
			d.price = d.price.replace(",", ".");
			totalDishes += parseFloat(d.price * d.amount);
		});
		return totalDishes.toFixed(2);
	}

	function encode(foods, drinks, desserts) {
		let message = "";
		const foodsText =
			"-Prato: " + foods.map((f) => `${f.title} (${f.amount}),`);
		const drinksText =
			"-Bebida: " + drinks.map((d) => `${d.title} (${d.amount}),`);
		const dessertsText =
			"-Sobremesa: " + desserts.map((d) => `${d.title} (${d.amount}),`);
		message = `
		Olá, gostaria de fazer o pedido:
        ${foodsText}
        ${drinksText}
        ${dessertsText}
        Total: R$ ${calcTotal(foods, drinks, desserts)}`;
		encodeURIComponent(message);
		return "https://wa.me/5511998765432?text=" + message;
	}
	return (
		<a className="confirm selected" href={encode(foods, drinks, desserts)}>
			<button className="confirm selected">
				<p>Fechar o pedido</p>
			</button>
		</a>
	);
}