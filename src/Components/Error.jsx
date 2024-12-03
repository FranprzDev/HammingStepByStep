import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function ErrorView() {
  return (
    <>
      <Header></Header>
      <section className="bg-gray-900 min-w-full min-h-full flex justify-center items-center">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl text-violet-500">Hubo un error catastrófico...</h1>
          <Link to={`/`}>
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
            >
              Volver al Inicio
            </button>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
