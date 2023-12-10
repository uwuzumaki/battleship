import Footer from "../Footer/Footer";
import GameController from "../GameController/GameController";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NewGame from "../NewGame/NewGame";
import "./styles.css";

const Initialize = () => {
  Header();
  Main();
  NewGame();
  Footer();

  GameController();
};

export default Initialize;
