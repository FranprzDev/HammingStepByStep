import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/cuadro.css";
import { generarCuadro } from "../Logic/cuadro";

export default function Cuadro({type, binary, p}){

    let columns = (type == "emisor") ? binary.length + p : binary.length;
    let rows = (type == "emisor") ? 5 + p : 4 + p;
    const [cuadro, setCuadro] = useState(generarCuadro(type, binary, rows, columns));
    const [selectedRow, setSelectedRow] = useState(3);
    const [selectedColumn, setSelectedColumns] = useState(0);
    const [terminado, setTerminado] = useState(false);

    useEffect(()=>{
        if(selectedRow == rows){
            setTerminado(true);
        }
    }, [selectedRow])

    function siguientePaso(){
        let newCuadro = cuadro;
        newCuadro[selectedRow][selectedColumn].show = true;
        setCuadro(newCuadro);
        let counter = 0;
        do{
            counter++;
            if(selectedColumn + counter >= columns) break;
        }while(newCuadro[selectedRow][selectedColumn + counter].value == "");
        
        if(selectedColumn + counter >= columns){
            setSelectedColumns(0);
            setSelectedRow(selectedRow + 1);
        }else{
            setSelectedColumns(selectedColumn + counter);
        }
    }

    function terminarCodificacion(){
        let newCuadro = cuadro;
        newCuadro.forEach(row => {
            row.forEach(element => {
                element.show = true;
            })
        })
        setCuadro(newCuadro);
        setSelectedRow(rows);
    }
    
    return(
        <section id="cuadro-section">
            <h1>Cadena: {binary}</h1>
            <div id="cuadro">
                {
                    cuadro.map((row, i) => (
                        <div key={i} className={(selectedRow == i) ? "selected":""} style={{gridTemplateColumns:`repeat(${columns}, ${columns.toString(2).length * 25}px)`}}>
                            {row.map((element,j) => (<span key={j} className={`cell ${(element.value != "")?"filled":""}`} style={element.styles}>
                                                        {(element.value != "") ?
                                                            <span className={`number ${(!element.show) ? "hidden" : ""}`} style={element.animation}>
                                                                { (element.show) ? element.value : ""}
                                                            </span>
                                                            : null
                                                        }
                                                    </span> ))}
                        </div>
                    ))
                }
            </div>
            {
                (!terminado) 
                ?
                <div className="buttons-div">
                    <button onClick={siguientePaso}>Siguiente paso</button>
                    <button onClick={terminarCodificacion}>Terminar codificación</button>
                </div>
                :
                <div className="buttons-div">
                    <Link to={(type == "emisor") ? "/" : "/receptor"}><button onClick={terminarCodificacion}>Volver al menú</button></Link>
                </div>
            }
            
        </section>
    )
}