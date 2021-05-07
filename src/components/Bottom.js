export default function Bottom(props) {
	const {foods, drinks, desserts} = props;
	console.log(props);

	function Confirm() {
		return (
			<button className="confirm selected" >
				<p>Fechar o pedido</p>
			</button>
		);
	}
	function Disabled() {
		return (
			<button className="confirm" disabled>
				<p>Selecione os 3 itens</p>
				<p>para fechar o pedido</p>
			</button>
		);
	}

	return (
		<div className="bottom">
			{foods.length >= 1 && drinks.length >= 1 && desserts.length >= 1 ? (
				<Confirm />
			) : (
				<Disabled />
			)}
		</div>
	);
}
