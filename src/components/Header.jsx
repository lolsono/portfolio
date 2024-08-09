import NavBar from "./NavBar.jsx";

function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button>Développeur Front-End Junior</button>
          <h1 className="white">Passionné par le code.</h1>

          <p className="gray">
            J'aime apprendre à coder et découvrir de nouvelles technologies !
          </p>

          <a className="green" href="mailto:felix.ottavi14@gmail.com">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
