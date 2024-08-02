import "./pizza.scss";

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
  return (
    <>
      <li className={`trattoria-pizza ${soldOut ? "sold-out" : ""}`}>
        <img src={photoName} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{soldOut ? "SOLD OUT" : price}</span>
        </div>
      </li>
    </>
  );
};

export default Pizza;
