import { Link } from 'react-router-dom'
import '../Styles/messageInput.css'
import { useEffect, useState, useRef } from 'react';

export default function MessageInput(){
    
    const binaryInput = useRef(null);

    const [binary, setBinary] = useState("");
    const [valido, setValido] = useState(false);

    useEffect(() => {
        let expReg = new RegExp("[^01]");
        let validLength = (binary.length > 0) ? true : false;
        setValido(!expReg.test(binary) && validLength)
    },[binary]);

    const getBinary = (event) =>{
        setBinary(event.target.value);
    }
    
    return(
        <section>
            <form onSubmit={getBinary}>
                <label id='principal-label'>Ingresa el binario!
                    <input ref={binaryInput} type="text" name="cadena" id="message-input" autoComplete='off' onChange={getBinary} pattern='[0-1]+' minLength={1} required/><div className="input-border"></div>
                </label>
                {
                    (!valido) ? <button>Codificar Hamming</button>
                    : <Link to={`/${binary}`}><button>Codificar Hamming</button></Link>
                }
            </form>
        </section>
    )
}