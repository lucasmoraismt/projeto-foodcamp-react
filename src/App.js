import Top from "./Top";
import Menu from "./Menu/Menu";

export default function App() {
	return (
		<div>
			<Top />

			<Menu />

			<div className="banner hidden">
				<div className="banner-content">
					<p>Confirme seu pedido</p>

					<ul>
						<li>
							<span id="food-name"></span> <span id="food-price"></span>
						</li>
						<li>
							<span id="drink-name"></span> <span id="drink-price"></span>
						</li>
						<li>
							<span id="dessert-name"></span> <span id="dessert-price"></span>
						</li>
						<li>
							<span>TOTAL</span> <span id="total-value"></span>
						</li>
					</ul>

					<button className="whats-button">
						<span>Tudo certo, pode pedir!</span>
					</button>

					<button className="cancel-button" onclick="closeBanner()">
						<span>Cancelar</span>
					</button>
				</div>
			</div>

			<div className="bottom">
				<button className="confirm" onclick="openBanner()" disabled>
					<p>Selecione os 3 itens</p>
					<p>para fechar o pedido</p>
				</button>
			</div>
		</div>
	);
}
