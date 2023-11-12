import { Route, Routes } from "react-router-dom";
import "./App.css";
import EndOfGame from "./components/EndOfGame/EndOfGame";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Rules from "./components/Rules/Rules";
import Register from "./components/Register/Register";
import NF from "./components/NF/NF";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <NavBar />
            <Main />
            <Rules />
            <EndOfGame />
            <Footer />
          </>
        }
      />
      <Route path="/signup" element={<Register ></Register>} />
      <Route path="/signin" element={<Register ></Register>} />
      <Route
        path="/*"
        element={
          <>
            <NF />
          </>
        }
      />
    </Routes>
  );
}

export default App;
