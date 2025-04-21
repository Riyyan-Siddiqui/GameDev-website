import Header from "./components/Header/Header";
import Section_2 from "./components/Section_2/Section_2";
import Section_3 from "./components/Section_3/Section_3";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="section_1"></div>
      <Section_2 />
      <Section_3 />
      <div className="section_4"></div>
      <Footer />
    </div>
  );
};

export default App;
