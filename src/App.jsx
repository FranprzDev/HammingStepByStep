import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Styles/index.css";
import { Outlet } from "react-router-dom";
import Background from "../src/assets/svg/Background.svg";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative">
        {/* <div className="absolute inset-0 z-0">
          <img src={Background} alt="Background Pattern" className="w-full h-full object-cover" />
        </div> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
