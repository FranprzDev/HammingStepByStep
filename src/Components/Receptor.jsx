import { useParams } from "react-router-dom";
import { useState } from "react";
import MarcarError from "./Receptor/MarcarError";
import Cuadro from "./Cuadro";

export default function Receptor(){
    
    const {binary} = useParams();

    const [p, setP] = useState(fijarP());
    const [errorsMarked, setErrorsMarked] = useState(false);

    function fijarP(){
        let i = 0;
        let auxP = 0;
        while(binary.length > Math.pow(2, i)){
            auxP = i;
            i++
        }
        auxP = auxP+2;
        return auxP;
    }

    return(
        <>
        {
            (errorsMarked) 
            ? <MarcarError binary={binary} finishMark={setErrorsMarked}></MarcarError>
            : <Cuadro binary={binary} p={p} type={"receptor"}></Cuadro>
        }
        </>
    )
}