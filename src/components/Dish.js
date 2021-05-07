import React from "react";
import Counter from "./Counter";

export default function Option(props) {
	const { img, title, description, price, selected, setSelected } = props;

	const [boolean, setBoolean] = React.useState(false);
	const [amount, setAmount] = React.useState(1);

	function select() {
		if (!boolean) {
			setBoolean(true);
			setSelected([
				...selected,
				{
					title: title,
					price: price,
					amount: amount,
				},
			]);
		} else if (boolean) {
			setBoolean(false);
			setSelected(selected.filter((t) => t.title !== title));
		}
	}
	
	return (
		<li onClick={select} className={boolean ? "selected" : ""}>
			<img src={`media/${img}.png`} alt={description} />
			<p>{title}</p>
			<span>{description}</span>
			<span className="price">R$ {price}</span>
			{boolean && (
				<Counter
					amount={amount}
					setAmount={setAmount}
					setBoolean={setBoolean}
					selected={selected}
					setSelected={setSelected}
					title={title}
				/>
			)}
		</li>
	);
}
