import { useParams } from "react-router-dom";
import { useState } from "react";
import CuadroEmisor from "./Emisor/CuadroEmisor";

export default function Receptor(){
    
    const {binary} = useParams();

    const [p, setP] = useState(fijarP());

    function fijarP(){
        let auxP= p;
        do{
            auxP++;
        }while(reachP(auxP));
        setP(auxP);
    }

    return(
        <>
        {
            (p<0) 
            ? <CalculoP binary={binary} fijarP={fijarP}></CalculoP>
            : <CuadroEmisor binary={binary} p={p} type={"emisor"}></CuadroEmisor>
        }
        </>
    )
}