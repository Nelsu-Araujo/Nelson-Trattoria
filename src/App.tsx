import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="trattoria-container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

export default App;
