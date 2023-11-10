import { Link } from 'react-router-dom'
import '../Styles/messageInput.css'
import { useEffect, useState } from 'react';

export default function MessageInput({tipo}){
    
    const [binary, setBinary] = useState("");
    const [valido, setValido] = useState(false);

    useEffect(() => {
        let expReg = new RegExp("[^01]");
        setValido(!expReg.test(binary))
        
    },[binary]);

    const getBinary = (event) =>{
        setBinary(event.target.value);
    }
    
    return(
        <section>
            <form onSubmit={getBinary}>
                <label id='principal-label'>Ingresa el binario!
                    <input type="text" name="cadena" id="message-input" autoComplete='off' onChange={getBinary} pattern='[0-1]+' required/><div className="input-border"></div>
                </label>
                {
                    (!valido) ? (tipo == "Emisor") ? <button>Codificar Hamming</button>
                    : <button>Decodificar Hamming</button>
                    :(tipo == "Emisor") ? <Link to={`/${binary}`}><button>Codificar Hamming</button></Link>
                                    : <Link to={`/receptor/${binary}`}><button>Decodificar Hamming</button></Link>
                }
                
            </form>
        </section>
    )
}