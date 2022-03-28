import Header from "../../components/Header";
import CoffeLogo from "../../assets/rocket-coffee.png";
import "./style.css";
import TextContainer from "../../components/TextContainer";

function Home() {
  return (
    <div className="container-home-page">
      <Header />
      <TextContainer />
      <img className="coffe-logo" src={CoffeLogo} />
    </div>
  );
}

export default Home;
