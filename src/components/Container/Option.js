import Dish from "./Dish";

export default function Option(props) {
	const { array, p, selected, setSelected } = props;
	return (
		<div>
			<p>{p}</p>
			<ul>
				{array.map((f) => (
					<Dish
						key={f.title}
						img={f.img}
						title={f.title}
						description={f.description}
						price={f.price}
						selected={selected}
						setSelected={setSelected}
					/>
				))}
				<li></li>
			</ul>
		</div>
	);
}