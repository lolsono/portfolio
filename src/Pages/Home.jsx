import { Link } from "react-router-dom";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Link className="link-acceuil" to="*">
        visue page 404
      </Link>
      <Footer />
    </>
  );
}

export default Home;
