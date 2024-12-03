import RichardHamming from "../assets/images/RichardHamming.png";

export default function About() {
    return (
        <section id="about" className="max-w-5xl mx-auto px-4">
            <h1 className="mt-8">¿Quién fue Hamming?</h1>
            <div className="flex flex-col md:flex-row">
                <img
                    src={RichardHamming}
                    alt="Foto de Richard Hamming cuando era joven"
                    id="Hamming"
                    className="h-60 md:h-80 w-auto mx-auto md:mx-0 md:float-left md:mr-4 mb-4"
                />
                <p className="text-justify">
                    Richard Wesley Hamming (Chicago, 11 de febrero de 1915 - Monterey, 7 de enero de 1998) fue un matemático estadounidense cuyo trabajo tuvo importantes implicaciones para la informática y las telecomunicaciones. Sus contribuciones incluyen el código Hamming (que permite la detección y corrección de errores), la ventana Hamming (utilizada en el procesamiento digital de señales), y la distancia Hamming. Es considerado uno de los pioneros de la era de la computación digital.
                </p>
            </div>
            <h1 className="mt-8">¿Qué es el código de Hamming?</h1>
            <p className="text-justify">
                El código Hamming es un sistema de detección y corrección de errores que fue desarrollado por Richard Hamming en 1950. Este código agrega bits de paridad a los datos para detectar y corregir errores que pueden ocurrir durante la transmisión o almacenamiento de información digital. La innovación clave del código Hamming es su capacidad para corregir automáticamente errores de un solo bit y detectar errores de dos bits, lo que lo hace especialmente útil en sistemas de comunicación y almacenamiento de datos donde la integridad de la información es crucial.
            </p>
        </section>
    );
}
