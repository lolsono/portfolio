import NavBar from "./NavBar.jsx";

function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button>Front-End Developer</button>
          <h1 className="white">Talk is cheap.</h1>
          <h1 className="white">Show me the code!</h1>
          <p className="gray">
            I design and code beautiful simple things, and I love what I do.
          </p>
          <a className="green" href="mailto:contact@blaiti.com">
            Let&#39;s chat!
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
