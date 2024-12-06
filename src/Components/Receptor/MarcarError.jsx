import { useState } from "react";

export default function MarcarError({ binary, finishMark, setReceiveBinary }) {
    const binaryChars = binary.split("");
    const [finalBinary, setFinalBinary] = useState(binary);

    function setError(event) {
        let position = parseInt(event.target.name);
        let char = finalBinary.charAt(position);
        let newBinary = finalBinary.split("");
        newBinary[position] = char === "1" ? "0" : "1";
        setFinalBinary(newBinary.join(""));
    }

    return (
        <section className="flex items-center justify-center bg-gray-900 h-screen w-full overflow-hidden text-white">
            <div className="text-center w-full max-w-7xl px-4 py-8">
                <h3 className="text-2xl font-semibold mb-12">Haz click sobre los números para generar errores</h3>
                <div className="space-y-8">
                    <p className="text-lg">Cadena original: {binary}</p>
                    <div id="numbers-container" className="flex justify-center flex-wrap gap-3">
                        {finalBinary.split("").map((element, i) => (
                            <button
                                key={i}
                                name={i}
                                className={`binary-char ${
                                    binaryChars[i] === element 
                                        ? "bg-violet-500 hover:bg-violet-600" 
                                        : "bg-red-500 hover:bg-red-600"
                                } m-1 p-3 text-xl font-medium transition-all duration-200 rounded-lg`}
                                onClick={setError}
                            >
                                {element}
                            </button>
                        ))}
                    </div>
                    <button
                        className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 mt-8"
                        onClick={() => {
                            finishMark(true);
                            setReceiveBinary(finalBinary);
                        }}
                    >
                        Ir a la Tabla
                    </button>
                </div>
            </div>
        </section>
    );
}