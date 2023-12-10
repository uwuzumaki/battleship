import "./Header.css";

const Header = () => {
  const app = document.getElementById("app");

  const header = document.createElement("div");
  header.id = "header";
  app.appendChild(header);

  const title = document.createElement("div");
  title.id = "header-title";
  title.textContent = "Battleship!";
  header.appendChild(title);
};

export default Header;
