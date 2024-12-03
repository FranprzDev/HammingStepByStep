import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <section className="flex flex-col items-center justify-center bg-gray-900 p-4 min-w-full min-h-full">
            <h1 className="font-bold text-5xl mb-4 text-violet-600">Calculo de P</h1>
            <h2 className="text-white text-3xl mb-4">{binary}</h2>
            <h3 className="text-white mb-2 text-4xl">
                2
                <span className="text-purple-500 text-4xl">
                    <motion.span animate={{ scale: 1.5 }} className="font-bold align-super text-xl">p</motion.span>
                </span> 
                ≥ n + p + 1
            </h3>
            <motion.h1 
                className="text-white text-4xl mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                key={p}
            >
                2
                <span className="text-purple-500 text-4xl">
                    <motion.span animate={{ scale: 1.5 }} className="font-bold align-super text-xl mx-1">{p}</motion.span>
                </span> 
                ≥ {n} + 
                <span className="text-purple-500">
                    <motion.span animate={{ scale: 1.5 }} className="font-bold text-4xl"> {p} </motion.span>
                </span> 
                + 1
            </motion.h1>
            <motion.h1 
            className="text-white text-3xl mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            key={`${leftResult}-${rightResult}`}
        >
            <span className={`text-3xl mb-6 ${leftResult >= rightResult ? "text-green-500" : "text-red-500"}`}>{leftResult}</span> ≥ {rightResult}
        </motion.h1>
            {
                (reachP(p)) 
                ?   
                <div className="flex flex-wrap gap-4">
                    <button 
                        className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
                        onClick={sumarUno}>
                        Sumar 1
                    </button>
                    <button 
                        className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
                        onClick={llegarP}>
                        Llegar a p
                    </button>
                </div> 
                : 
                <button 
                    className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded"
                    onClick={()=> fijarP(p)}>
                    Ir a la Tabla
                </button>
            }
        </section>
    )
}