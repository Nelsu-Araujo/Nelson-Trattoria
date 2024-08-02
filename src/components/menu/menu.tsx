import "./menu.scss";
import pizzaData from "../../data/pizza-data.json";
import Pizza from "../pizza/pizza";

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="trattoria-menu">
      <h2>The Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. Treat yourself with 6 fantastic and
            classic Italian pizzas. All from our stone oven, all organic, all
            delicious
          </p>

          <ul className="trattoria-pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
};

export default Menu;
