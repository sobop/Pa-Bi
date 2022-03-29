import Header from "./components/Header";
import Banner from "./components/Banner";
import Prototypes from "./components/Prototypes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Banner />
        <Prototypes />
        <Footer />
      </div>
    </>
  );
}

export default App;
