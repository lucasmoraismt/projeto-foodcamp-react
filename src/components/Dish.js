import React from "react";

export default function Option(props) {
	const { img, title, description, price, selected, setSelected, number, setNumber } = props;

	const [boolean, setBoolean] = React.useState(false);
	const [counter, setCounter] = React.useState('');
	const [amount, setAmount] = React.useState(1);

	function Counter() {
		return (
			<div className='counter'>
				<span onClick={() => changeCounter('-')} className='minus'>-</span>
				<span className='amount'>{amount}</span>
				<span onClick={() => changeCounter('+')} className='plus'>+</span>
			</div>
		);
	}

	function changeCounter(operator) {
		if(operator === '-') {
			if(counter === 1) {
				setBoolean(false);
				setCounter('');
				setSelected(selected.filter((t) => (t.title !== title)))
			} else {
				setAmount(amount - 1);
			}
		} else if(operator === '+') {
			setAmount(amount + 1);
		}
	}

	function select() {
		if (!boolean) {
			setBoolean(true);
			setCounter(Counter)
			setSelected([
				...selected,
				{
					title: title,
					price: price,
					amount: amount
				},
			]);
		} else if (boolean) {
			setBoolean(false);
			setCounter('');
			setSelected(selected.filter((t) => (t.title !== title)))
		}
	}

	return (
		<li onClick={select} className={boolean ? "selected" : ""}>
			<img src={`media/${img}.png`} alt={description} />
			<p>{title}</p>
			<span>{description}</span>
			<span className="price">R$ {price}</span>
			{counter}
		</li>
	);
}
