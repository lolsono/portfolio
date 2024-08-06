import Routing from "./Routes/Routes.jsx";

function App() {
  return (
    <>
      <title>Blaiti - Frontend Developer</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="Skander Blaiti" />
      <meta name="keywords" content="ReactJS, NextJS" />
      <meta
        name="description"
        content="I am a talented Front-End developer with a UI/UX design background."
      />
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#2D2E32" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:site_name" content="Blaiti - Frontend Developer" />
      <meta property="og:locale" content="en_GB" />
      <title data-rh="true">Blaiti - Frontend Developer</title>
      <meta data-rh="true" property="og:type" content="website" />
      <meta
        data-rh="true"
        property="og:title"
        content="Blaiti - Frontend Developer"
      />
      <meta data-rh="true" property="og:image" content="/images/blaiti.png" />
      <main>
        <Routing />
      </main>
    </>
  );
}

export default App;
