import { useState } from "react";
import "./pizza.scss";
import { fetchCocktail } from "../../cocktail-api-call/cocktail-api-call";

export type PizzaProps = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

const Pizza = ({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}: PizzaProps) => {
  const [cocktail, setCocktail] = useState<any | null>(null);
  const [viewingCocktail, setViewingCocktail] = useState(false);

  const handleClick = async () => {
    if (!cocktail) {
      const cocktailData = await fetchCocktail();
      setCocktail(cocktailData);
    }
    setViewingCocktail(!viewingCocktail);
  };

  return (
    <>
      <li className={`trattoria-pizza ${soldOut ? "sold-out" : ""}`}>
        {viewingCocktail ? (
          <>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <div className="cocktail-info">
              <h3>{cocktail.strDrink}</h3>
              <p>{cocktail.strInstructions}</p>
              <button onClick={handleClick} className="return-button">
                Return to Pizza
              </button>
            </div>
          </>
        ) : (
          <>
            <img src={photoName} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{ingredients}</p>
              <p className="cocktail-link" onClick={handleClick}>
                Cocktail to go with it
              </p>
              <span>{soldOut ? "SOLD OUT" : `€${price}`}</span>
            </div>
          </>
        )}
      </li>
    </>
  );
};

export default Pizza;
