import githubImg from "./assets/github-dark.png";
import "./Footer.css";

const Footer = () => {
  const app = document.getElementById("app");

  const footer = document.createElement("div");
  footer.id = "footer";
  app.appendChild(footer);

  const link = document.createElement("a");
  link.id = "github-link";
  link.href = "https://github.com/uwuzumaki/top-weather-app";
  footer.appendChild(link);

  const logo = document.createElement("img");
  logo.id = "github-img";
  logo.alt = "github logo";
  logo.src = githubImg;
  link.appendChild(logo);

  const githubAccount = document.createElement("p");
  githubAccount.innerHTML = "uwuzumaki";
  link.appendChild(githubAccount);
};

export default Footer;
