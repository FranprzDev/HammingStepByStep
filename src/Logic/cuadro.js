function generarCuadro(tipo, binary, rows, columns){
        
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
            firstRow.unshift({value: `p${contadorP}`, show: true, styles: estilosCuadro("first")});
            if(tipo == "emisor")
                fourth.unshift({value: "", show:true});
            else
                fourth.unshift({value: binChars.pop(), show:false});
        }else{
            contadorN++;
            firstRow.unshift({value: `n${contadorN}`, show: true, styles: estilosCuadro("first")});
            fourth.unshift({value: binChars.pop(), show:false});
        }
        contador++;
    }
    cuadro.push(firstRow);

    let second = [];
    let third = [];
    let binLength = columns.toString(2).length;
    for(let i = columns; i > 0; i--){
        second.push({value: i, show: true, styles: estilosCuadro("second")});
        third.push({value: toBinaty(i, binLength), show: true, styles: estilosCuadro("third")});
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
        if(tipo == "emisor") newRow[columns - Math.pow(2,i)] = bitParidad(newRow);
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
        element.styles = estilosCuadro("result");
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

function toBinaty(num, l){
    let cadena = (num).toString(2);
    while(cadena.length < l){
        cadena = "0" + cadena;
    }
    return cadena;
}

function estilosCuadro(estilo){
    switch(estilo){
        case "first":
            return {backgroundColor:"var(--primary-color)", color:"var(--white)"}
        case "second":
            return {backgroundColor:"var(--secondary-color)", color:"var(--white)"}
        case "third":
            return {backgroundColor:"var(--terciary-color)", color:"var(--white)"}
        case "result":
            return {border: "3px solid var(--black)"}
    }
}

export {generarCuadro}