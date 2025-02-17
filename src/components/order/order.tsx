import "./order.scss";

export type OrderProps = {
  openHour: number;
  closeHour: number;
};

const Order = ({ openHour, closeHour }: OrderProps) => {
  return (
    <div className="trattoria-order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
