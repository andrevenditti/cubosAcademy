import "./App.css";
import profileImg from "./assets/foto_perfil 1.png";

export default function App() {
  return (
    <div className="container">
      <header>
        <h2>Andrév</h2>
        <ul className="menu">
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </header>
      <section>
        <div className="left">
          <img src={profileImg} alt="profile image" />
          <strong>André Venditti</strong>
          <span>
            <br />
            Eu sou André Venditti, desenvolvedor front-end e voluntário no
            projeto mães e mulheres jardineiras
          </span>
        </div>
        <div className="right">asdasd</div>
      </section>
      <footer>
        <ul className="menu">
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </footer>
    </div>
  );
}
