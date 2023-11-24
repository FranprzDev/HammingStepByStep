import { useEffect, useState } from "react";
import "../../Styles/calcularP.css";

export default function CalculoP({binary, fijarP}){
    
    const n = binary.length;

    const [p, setP] = useState(1);

    const [leftResult, setLeftResult] = useState(0);

    const [rightResult, setRightResult] = useState(0);

    useEffect(() => {
        setLeftResult(Math.pow(2,p));
        setRightResult(n+p+1)
    }, [p]);

    function sumarUno(){
        setP(p+1);
    }

    function llegarP(){
        let auxP= p;
        do{
            auxP++;
        }while(reachP(auxP));
        setP(auxP);
    }

    function reachP(param){
        return (Math.pow(2,param)<n+param+1);
    }
    
    return(
        <section id="calcular-p">
            <h2 className="cadena">{binary}</h2>
            <h3>2<span className="exponential">p</span> ≥ n + p + 1</h3>
            <h1 id="main-ecuation">2<span id="exponential-main" className="p">{p}</span>≥ {n} + <span className="p">{p}</span> + 1</h1>
            <h1>{leftResult} ≥ {rightResult}</h1>
            {
                (reachP(p)) 
                ?   
                <div className="buttons-div">
                    <button onClick={sumarUno}>Sumar 1</button>
                    <button onClick={llegarP}>Llegar a p</button>
                </div> 
                : 
                <button onClick={()=> fijarP(p)}>Ir al cuadro</button>
            }
        </section>
    )
}