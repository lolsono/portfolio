import { Link } from "react-router-dom";
import About from "../components/About.jsx";

function Home() {
  return (
    <div className="dark-bg">
      <About />
      <h2>Partie projets</h2>
      <section className="light-bg project-containner">
        <div className="dark-bg about-card">
          <h3 className="green">première boite</h3>
          <p className="white">description du projet</p>
          <span className="gray">petit lien</span>
        </div>

        <div className="dark-bg about-card">
          <h3 className="green">deuxième boite</h3>
          <p className="white">description du projet</p>
          <span className="gray">petit lien</span>
        </div>

        <div className="dark-bg about-card">
          <h3 className="green">troisième boite</h3>
          <p className="white">description du projet</p>
          <span className="gray">petit lien</span>
        </div>
      </section>

      <section id="contact">
        <h2>Contactez-moi</h2>

        <p>Email: votre-email@example.com</p>
        <p>Téléphone: +123 456 7890</p>
        <a href="https://linkedin.com/in/votre-profil" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/votre-profil" target="_blank">
          GitHub
        </a>
      </section>

      <Link className="link-acceuil" to="*">
        visue page 404
      </Link>
    </div>
  );
}

export default Home;
