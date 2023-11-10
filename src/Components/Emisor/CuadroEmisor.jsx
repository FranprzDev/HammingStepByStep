import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Styles/cuadro.css";

function toBinaty(num, l){
    let cadena = (num).toString(2);
    while(cadena.length < l){
        cadena = "0" + cadena;
    }
    return cadena;
}

export default function CuadroEmisor({binary, p}){

    let columns = binary.length + p;
    let rows = 5 + p;
    const [cuadro, setCuadro] = useState(generarCuadro());
    const [selectedRow, setSelectedRow] = useState(3);
    const [selectedColumn, setSelectedColumns] = useState(0);
    const [terminado, setTerminado] = useState(false);

    useEffect(()=>{
        if(selectedRow == rows){
            setTerminado(true);
        }
    }, [selectedRow])

    function generarCuadro(){
        
        let cuadro = [];
        let binChars = binary.split("");

        let firstRow = [];
        let fourth = [];
        let contadorN = 0;
        let contadorP = 0;
        let contador = 1;

        while(firstRow.length < columns){
            if(Math.log2(contador) % 1 == 0){
                contadorP++;
                firstRow.unshift({value: `p${contadorP}`, show: true, styles: {backgroundColor:"var(--primary-color)", color:"var(--white)"}});
                fourth.unshift({value: "", show:true});
            }else{
                contadorN++;
                firstRow.unshift({value: `n${contadorN}`, show: true, styles: {backgroundColor:"var(--primary-color)", color:"var(--white)"}});
                fourth.unshift({value: binChars.pop(), show:false});
            }
            contador++;
        }
        cuadro.push(firstRow);

        let second = [];
        let third = [];
        let binLength = columns.toString(2).length;
        for(let i = columns; i > 0; i--){
            second.push({value: i, show: true, styles: {backgroundColor:"var(--secondary-color)", color:"var(--white)"}});
            third.push({value: toBinaty(i, binLength), show: true, styles: {backgroundColor:"var(--terciary-color)", color:"var(--white)"}})
        }
        cuadro.push(second);
        cuadro.push(third);
        cuadro.push(fourth);

        for(let i = 0; i < rows-5; i++){
            let newRow = [];
            let intervalo = Math.pow(2,i);
            let currentIntervalo = 0;
            let bajar = true;
            while(newRow.length < intervalo-1){
                newRow.unshift({value:"",show:true});
            }
            for(let j = columns-intervalo; j >= 0; j--){
                if(currentIntervalo < intervalo && bajar){
                    let elemento = {animation: {animationName: "down"}, ...cuadro[3][j]}
                    elemento.show = false;
                    newRow.unshift(elemento);
                    currentIntervalo++; 
                }else if(bajar){
                    currentIntervalo = 1;
                    bajar = false;
                    newRow.unshift({value:"",show:true});
                }else{
                    if(currentIntervalo < intervalo){
                        currentIntervalo++;
                        newRow.unshift({value:"",show:true});
                    }
                    else{
                        bajar = true;
                        let elemento = {animation: {animationName: "down"},...cuadro[3][j]}
                        elemento.show = false;
                        newRow.unshift(elemento);
                        currentIntervalo = 1; 
                    }
                }
            }
            newRow[columns - Math.pow(2,i)] = bitParidad(newRow);
            cuadro.push(newRow);
        }

        let result = [];

        for(let i = 0; i < columns; i++){
            let element = {...cuadro[3][i]};
            if(element.value == ""){
                let index = 4 + Math.log2(columns - i);
                element = {...cuadro[index][i]};
            }
            element.animation = {animationName:"down"};
            element.styles = {border: "3px solid var(--black)"}
            result.push(element);
        }
        cuadro.push(result);

        return cuadro;
    }

    function bitParidad(row){
        let contadorUnos = 0;
        row.forEach(element => {
            if(element.value == "1"){
                contadorUnos++;
            }
        });
        if(contadorUnos % 2 == 0) return {value: "0", show: false, animation:{animationName: "left"}}
        return {value: "1", show: false, animation:{animationName: "left"}}
    }

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
                    <Link to={"/"}><button onClick={terminarCodificacion}>Volver al menú</button></Link>
                </div>
            }
            
        </section>
    )
}