import "./App.css";
import EndOfGame from "./components/EndOfGame/EndOfGame";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Rules from "./components/Rules/Rules";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Rules />
      <EndOfGame />
      <Footer />
    </>
  );
}

export default App;
