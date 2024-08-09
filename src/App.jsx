import Routing from "./Routes/Routes.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
}

export default App;
