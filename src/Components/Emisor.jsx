import { useParams } from "react-router-dom";
import CalculoP from "./Emisor/CalculoP";
import { useState } from "react";
import CuadroEmisor from "./Emisor/CuadroEmisor";

export default function Emisor(){
    
    const {binary} = useParams();

    const [p, setP] = useState(-1);

    function fijarP(valor){
        setP(valor);
    }

    return(
        <>
        {
            (p<0) 
            ? <CalculoP binary={binary} fijarP={fijarP}></CalculoP>
            : <CuadroEmisor binary={binary} p={p}></CuadroEmisor>
        }
        </>
    )
}