import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Styles/index.css";
import { Outlet } from "react-router-dom";
import Background from "../src/assets/svg/Background.svg";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-900 flex-grow relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
