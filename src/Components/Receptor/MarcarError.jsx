import { useState } from "react"
import "../../Styles/marcarError.css"

export default function MarcarError({binary, finishMark, setReceiveBinary}){
    
    const binaryChars = binary.split("");
    const [finalBinary, setFinalBinary] = useState(binary);
    
    function setError(event){
        let position = parseInt(event.target.name);
        let char = finalBinary.charAt(parseInt(event.target.name));
        let newBinary = finalBinary.split("");
        newBinary[position] = (char == "1") ? "0" : "1";
        setFinalBinary(newBinary.join(""));
    }

    return (
        <section id="marcar-error">
            <h3>Haz click sobre los números para generar errores</h3>
            <div id="numbers-container">
                {
                    finalBinary.split("").map((element, i) => 
                        <button key={i} name={i} className={`binary-char ${(binaryChars[i] == element) ? "" : "error"}`} onClick={setError}>{element}</button>)
                }
            </div>
            <button onClick={() => {finishMark(true); setReceiveBinary(finalBinary)}}>Ir al cuadro</button>
        </section>
    )
}