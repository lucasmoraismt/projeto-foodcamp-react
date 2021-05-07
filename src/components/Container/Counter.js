export default function Counter(props) {
	const {
		amount,
		setAmount,
		setBoolean,
		selected,
		setSelected,
		title,
		price,
	} = props;

	function changeCounter(operator) {
		if (operator === "-") {
			if (amount === 1) {
				setBoolean(false);
				setSelected(selected.filter((t) => t.title !== title));
			} else {
				setAmount(amount - 1);
				let switchArray = selected.filter((t) => t.title !== title);
				setSelected([
					...switchArray,
					{
						title: title,
						price: price,
						amount: amount - 1,
					},
				]);
				console.log(switchArray);
			}
		} else if (operator === "+") {
			setAmount(amount + 1);
			let switchArray = selected.filter((t) => t.title !== title);
			setSelected([
				...switchArray,
				{
					title: title,
					price: price,
					amount: amount + 1,
				},
			]);
			console.log(switchArray);
		}
	}

	return (
		<div className="counter">
			<span
				onClick={(evt) => {
					evt.stopPropagation();
					changeCounter("-");
				}}
				className="minus"
			>
				-
			</span>
			<span className="amount">{amount}</span>
			<span
				onClick={(evt) => {
					evt.stopPropagation();
					changeCounter("+");
				}}
				className="plus"
			>
				+
			</span>
		</div>
	);
}