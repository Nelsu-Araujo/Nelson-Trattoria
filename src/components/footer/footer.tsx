import Order from "../order/order";
import "./footer.scss";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // Just playing around with the code
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  if (!isOpen)
    return (
      <>
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
        <p className="trattoria-copyright">
          Developed with <img src="../../assets/images/heart.png" alt="heart" />{" "}
          © 2024 | Nelson Barbosa | All Rights Reserved
        </p>
      </>
    );

  return (
    <footer className="trattoria-footer">
      {isOpen ? (
        <>
          <Order closeHour={closeHour} openHour={openHour} />
          <p className="trattoria-copyright">
            Developed with <img src="../assets/images/heart.png" alt="heart" />{" "}
            © 2024 | Nelson Barbosa | All Rights Reserved
          </p>
        </>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
