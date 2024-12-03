import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Styles/index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-600">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}

export default App;
