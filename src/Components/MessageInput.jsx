import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MessageInput() {
  const [text, setText] = useState("");
  const [ascii, setAscii] = useState([]);
  const [binarySteps, setBinarySteps] = useState([]);
  const [finalBinary, setFinalBinary] = useState("");
  const [valido, setValido] = useState(false);

  useEffect(() => {
    if (finalBinary) {
      let expReg = new RegExp("[^01]");
      setValido(!expReg.test(finalBinary) && finalBinary.length > 0);
    }
  }, [finalBinary]);

  const handleTextChange = (e) => {
    const input = e.target.value.slice(0, 10);
    setText(input);

    const asciiArray = input.split("").map((char) => char.charCodeAt(0));
    setAscii(asciiArray);

    const binaryArray = asciiArray.map((num) =>
      num.toString(2).padStart(7, "0")
    );
    setBinarySteps(binaryArray);

    setFinalBinary(binaryArray.join(""));
  };

  return (
    <section className="flex items-center justify-center bg-gray-900 min-h-full min-w-full ">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 rounded-lg bg-gray-800 p-8 shadow-lg max-w-5xl w-full my-5"
      >
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xl font-semibold text-violet-300"
        >
          Ingresa texto para convertir para Hamming
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="mt-2 block w-full rounded-md bg-gray-700 px-4 py-2 text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            autoComplete="off"
            maxLength={10}
            required
          />
          <div className="mt-1 h-0.5 w-full bg-violet-500"></div>
        </motion.label>

        {text && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            // Cambiamos overflow-x-auto por estas clases
            className="text-white w-full break-words"
          >
            <motion.div layout className="mb-2">
              <h3 className="text-violet-300">ASCII:</h3>
              <p className="break-words">{ascii.join(", ")}</p>
            </motion.div>
            <motion.div layout className="mb-2">
              <h3 className="text-violet-300">Binario por caracter:</h3>
              {binarySteps.map((bin, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="break-words"
                >
                  {text[i]}: {bin}
                </motion.p>
              ))}
            </motion.div>
            <motion.div layout>
              <h3 className="text-violet-300">Binario final:</h3>
              <p className="break-all">{finalBinary}</p>
            </motion.div>
          </motion.div>
        )}

        {!valido ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 rounded-md bg-violet-600 px-6 py-2 text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Codificar Hamming
          </motion.button>
        ) : (
          <Link to={`/${finalBinary}`} className="w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full rounded-md bg-violet-600 px-6 py-2 text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Codificar Hamming
            </motion.button>
          </Link>
        )}
      </motion.form>
    </section>
  );
}
