import React from "react";

export default function Option(props) {
	const [img, title, description, price, selected, setSelected] = props;

	function select() {
		setSelected([...selected, { title: title, price: price, amount: counter }]);
	}

	return (
		<li onClick={select} className={}>
			<img src={`media/${img}.png`} />
			<p>{title}</p>
			<span>{description}</span>
			<span>R$ {price}</span>
		</li>
	);
}
