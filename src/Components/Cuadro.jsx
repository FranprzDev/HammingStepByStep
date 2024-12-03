import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  generarCuadro,
  obtenerErrorReceptor,
  obtenerResultadoEmisor,
} from "../Logic/cuadro";
import { Tooltip, TooltipProvider } from "../Components/ui/tooltip";

export default function Cuadro({ type, binary, p, original }) {
  let columns = type == "emisor" ? binary.length + p : binary.length;
  let rows = type == "emisor" ? 5 + p : 4 + p;
  const [cuadro, setCuadro] = useState(cargarCuadro());
  const [selectedRow, setSelectedRow] = useState(3);
  const [selectedColumn, setSelectedColumns] = useState(0);
  const [terminado, setTerminado] = useState(false);

  function cargarCuadro() {
    let c = generarCuadro(type, binary, rows, columns);
    if (type != "emisor") columns++;
    return c;
  }

  useEffect(() => {
    if (selectedRow >= rows) {
      setTerminado(true);
    }
  }, [selectedRow]);

  function siguientePaso() {
    let newCuadro = [...cuadro];
    newCuadro[selectedRow][selectedColumn].show = true;
    setCuadro(newCuadro);
    let counter = 0;
    do {
      counter++;
      if (selectedColumn + counter >= columns) break;
    } while (
      newCuadro[selectedRow][selectedColumn + counter] != undefined &&
      newCuadro[selectedRow][selectedColumn + counter].value == ""
    );

    if (
      selectedColumn + counter >= columns ||
      !newCuadro[selectedRow][selectedColumn + counter]
    ) {
      setSelectedColumns(0);
      setSelectedRow(selectedRow + 1);
    } else {
      setSelectedColumns(selectedColumn + counter);
    }
  }

  function terminarCodificacion() {
    let newCuadro = [...cuadro];
    newCuadro.forEach((row) => {
      row.forEach((element) => {
        element.show = true;
      });
    });
    setCuadro(newCuadro);
    setSelectedRow(rows);
  }

  return (
    <div className="flex items-center justify-center bg-gray-900 min-w-5xl min-h-full">
      <section className="flex flex-col items-center justify-center mt-5 mb-10 max-w-5xl text-white w-full">
        {type == "emisor" ? (
          <h1 className="text-4xl text-violet-500 my-[50px]">
            Cadena: {binary}
          </h1>
        ) : (
          <h1>
            {binary.split("").map((char, i) => (
              <span
                key={i}
                className={char == original[i] ? "" : "text-red-500"}
              >
                {char}
              </span>
            ))}
          </h1>
        )}
        <div className="w-full overflow-x-auto overflow-y-auto max-h-[70vh] rounded-lg">
          <div
            id="cuadro"
            className={`min-w-fit ${
              type == "emisor" ? "cuadro-emisor" : "cuadro-receptor"
            }`}
          >
            {cuadro.map((row, i) => (
              <div
                key={i}
                className={`grid ${selectedRow == i ? "selected" : ""}`}
                style={{
                  gridTemplateColumns: `repeat(${columns}, minmax(80px, 1fr))`,
                  gap: "10px",
                  borderBottom: i < 3 ? "3px solid #5b21b6" : "1px solid #6d28d9",
                  borderTop: i === 0 ? "3px solid #5b21b6" : "1px solid #6d28d9",
                  borderLeft: "1px solid #6d28d9",
                  borderRight: "1px solid #6d28d9",
                  backgroundColor: "transparent",
                  color: "white"
                }}
                onClick={() => console.log(row)}
              >
                {row.map((element, j) => (
                  <span
                    key={j}
                    className={`cell ${element.value != "" ? "filled" : ""}`}
                    style={{
                      ...element.styles,
                      border: i < 3 ? "1px solid #6d28d9" : "none",
                      // padding: "10px",
                      // borderRadius: "5px",
                      height: "50px",
                      width: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {element.value != "" ? (
                      <TooltipProvider>
                        <Tooltip
                          content={
                            element.isParity
                              ? "Bit de Paridad (Redundancia)"
                              : "Bit de Dato (Importante)"
                          }
                        >
                          <span
                            className={`number ${!element.show ? "hidden" : ""}`}
                            style={element.animation}
                          >
                            {element.show ? element.value : ""}
                          </span>
                        </Tooltip>
                      </TooltipProvider>
                    ) : null}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        {!terminado ? (
          <div className="flex gap-4 justify-center mt-4">
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
              onClick={siguientePaso}
            >
              Siguiente paso
            </button>
            <button
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
              onClick={terminarCodificacion}
            >
              Terminar codificación
            </button>
          </div>
        ) : (
          <>
            {type != "emisor" ? (
              obtenerErrorReceptor(cuadro) == 0 ? (
                <>
                  <h3>No se han detectado errores.</h3>
                </>
              ) : (
                <>
                  <h3>Se han detectado errores!</h3>
                  <h3>Posición en binario: {obtenerErrorReceptor(cuadro)}</h3>
                </>
              )
            ) : null}
            <div className="flex gap-4 justify-center mt-4">
              <Link to={"/"}>
                <button
                  className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
                  onClick={terminarCodificacion}
                >
                  Volver al menú
                </button>
              </Link>
              {type == "emisor" ? (
                <Link to={`/receptor/${obtenerResultadoEmisor(cuadro)}`}>
                  <button
                    className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
                    onClick={terminarCodificacion}
                  >
                    Transmitir
                  </button>
                </Link>
              ) : null}
            </div>
          </>
        )}
      </section>
    </div>
  );
}