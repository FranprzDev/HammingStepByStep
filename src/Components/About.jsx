import Hamming from "../Resources/Hamming.jpg"
import Uno from "../Resources/01.png"
import Dos from "../Resources/02.png"
import Tres from "../Resources/03.png"
import Cuatro from "../Resources/04.png"
import Cinco from "../Resources/05.png"
import Seis from "../Resources/06.png"
import "../Styles/about.css"

export default function About(){
    return(
        <section id="about">
            <h1>¿Quién fue Hamming?</h1>
            <div>
               <img src={Hamming} alt="Foto de Richard Hamming cuando era joven" id="Hamming"/>
               <p>
                    Richard Wesley Hamming fue un matemático estadounidense que trabajó en temas relacionados con la informática y las telecomunicaciones. 
                    Sus principales contribuciones a la ciencia han sido el código Hamming, la ventana Hamming y la distancia de Hamming.
                    Hamming nació en Chicago, Illinois, el 11 de febrero de 1915.
                    Se licenció por la Universidad de Chicago en 1937. En 1939 realizaría un master en la Universidad de Nebraska y finalmente se doctoró por la Universidad Urbana-Champaign de Illinois en 1942. Durante la Segunda Guerra Mundial, fue profesor en la Universidad de Louisville, trabajo que abandonaría para integrarse en 1945 en el proyecto Manhattan. Allí desarrolló su trabajo programando una de las primeras calculadoras numéricas electrónicas, para determinar la solución a algunas ecuaciones proporcionadas por los físicos del proyecto. El objetivo del programa era descubrir si la detonación de una bomba atómica podría incendiar la atmósfera. El resultado del cálculo era que la ignición no ocurriría, así que los Estados Unidos utilizaron la bomba, primero como prueba en Nuevo México y poco más tarde dos veces contra Japón.
                    Entre los años 1946-1976, trabajó en los laboratorios Bell, en donde colaboró con Claude E. Shannon. El 23 de julio de 1976 se trasladó a la Naval Postgraduate School, en donde trabajó como profesor adjunto hasta 1997, llegando a ser Professor Emeritus.
                    Fue fundador y presidente de la Association for Computing Machinery.
                    Murió en Monterey, California el 7 de enero de 1998. <a href="https://es.wikipedia.org/wiki/Richard_Hamming" target="blank">Vía Wikipedia</a>
                </p> 
            </div>
            <h1>¿Qué es el código de Hamming?</h1>
            <p>
                El código de Hamming es un código detector y corrector de errores. En los datos codificados en Hamming se pueden detectar errores en un bit 
                y corregirlos, sin embargo no se distingue entre errores de dos bits y de un bit (para lo que se usa Hamming extendido). Esto representa una 
                mejora respecto a los códigos con bit de paridad, que pueden detectar errores en solo un bit, pero no pueden corregirlo.
                <br></br>
                Los códigos de Hamming están basados en la adición de pbits a un código de distancia Hamming unidad y de nbits, obteniéndose un nuevo código 
                de n + p bits. El número p de bits añadidos ha de ser suficiente para permitir la detección y la ausencia de error en las n + p posiciones.
                Dado que con p bits se obtienen 2^p combinaciones, se debe cumplir la relación:
                <br />
                <br />
                <h3 style={{textAlign: "center"}}>2<span className="exponential">p</span> ≥ n + p + 1</h3>
                <br />
                La posición de estos bits de paridad en la cadena de bits, están en relación al valor 20, 21, 22, 23y así sucesivamente, o sea posiciones 
                1, 2, 4, 8 ….
                <br />
                Esto lo podemos observar en el cuadro, donde en las posiciones mencionadas siempre deberemos colocar los bits de paridad "p" mientras que
                en los bits "n" colocamos los valores de la cadena que deseamos enviar.
                <img src={Uno} alt="Una imágen de un cuadro de hamming vacío" />
                <br />
                En el caso del emisor los bits de paridad permanecen vacíos en la primera fila, los mismos serán calculados en las filas posteriores y añadidos
                a la cadena que vamos a transmitir.
                <br />
                Cada línea del cuadro servirá para calcular un bit de paridad. Para ello seleccionaremos bits específicos de la cadena original. Estos bits serán 
                elegidos según la posición en binario de cada uno. En el caso de la primera fila de paridad, como se ve en la foto debajo, serán seleccionados todos
                aquellos bits de la cadena original que estén en un posición donde el dígito menos significativo de la misma sea un 1. Se bajaran de la primera fila
                todos los bits de la cadena original en esas posiciones y finalmente se calculará el bit de paridad para esa fila.
                <img src={Dos} alt="Una imágen de un cuadro de hamming completando la primera fila de paridad" />
                <br />
                Para la segunda fila de paridad se usarán las posiciones donde el segundo bit menos significativo sea 1, para la tercera aquellas donde el tercer
                bit menos significativo sea 1 y así sucesivamente.
                <br />
                Finalmente para la última fila (con border más gruesos en las fotos) se bajarán los bits de la cadena original y los bits de paridad en cada posición.
                Obteniendo finalmente la cadena codificada y lista para enviar.
                <img src={Tres} alt="Una imágen de un cuadro de hamming completado" />
                <br />
                Desde el lado del receptor haremos algo parecido, con la gran diferencia que ya contamos con los bits de paridad. Por esa razón la primera fila de la
                tabla esta vez estará completa.
                <img src={Cuatro} alt="Una imágen de un cuadro del lado del receptor con la primera fila completa" />
                <br />
                Para completar las filas de paridad utilizaremos el mismo criterio de las posiciones que usamos en el emisor, sin embargo ahora no deberemos calcular
                los bits de paridad, si no que los bajaremos de la primera fila.
                <br />
                Pero... ¿Qué son esos nuevos espacios extraños en el cuadro? Esos nuevos espacios son los que nos permitirán definir si hubo un error en la transmición
                o no. Para rellenarlos haremos paridad con cada fila, si la cantidad de unos en la fila es par colocaremos un cero, si es impar un 1.
                <br />
                Estos recuadros (leídos desde abajo hacia arriba) formaran un número binario que nos indicará la posición del error en caso de haberlo. Si el número formado
                es cero entonces la transmición se dió sin errores!
                En esta foto vemos un cuadro del receptor en donde la transmisión no tuvo errores.
                <img src={Cinco} alt="Una imágen de un cuadro del lado del receptor que no tuvo errores" />
                <br />
                En esta otra foto se muestra un cuadro del receptor en donde la transmición sufrió un error en el bit de la posición 1000 (8 en decimal).
                <img src={Seis} alt="Una imágen de un cuadro del lado del receptor que tuvo un error en la posición 8" />
                <br />
            </p>
            <h1>Sobre este proyecto</h1>
            <p>
                Esta página es un codificador de Hamming automático y paso a paso. Fue desarrollado por el alumno Luciano Nicolás Pulido para la cátedra de 
                Comunicaciones de la Universidad Tecnológica Nacional - Facultad Regional Tucumán.
                <br />
                El objetivo del proyecto es brindar una herramienta de enseñanza y utilidad tanto para profesores como futuros alumnos de la cátedra. Brindando 
                una experiencia interactiva para poder comprender mejor la realización de esta codificación. Cuenta con ambos lados, tanto emisor como receptor.
                <br />
                A continuación se muestra como utilizar el codificador.
            </p>
            <h1>¿Cómo se usa el codificador?</h1>
            <p>
                La utilización es muy sencilla. Al ingresar por primera vez nos encontraremos con una página que nos pedirá que ingresemos una cadena en binario
                para que esta sea codificada.
                <img src={Siete} alt="Una imágen de la página principal del proyecto" />
                Una vez introducida una cadena pulsaremos el botón que dice "Codificar Hamming" justo debajo. Lo que comenzará el proceso de codifiación de nuestra
                cadena. Se nos mostrará una nueva vista la cual nos ayudará a calcular la cantidad de bits de paridad que necesitará nuestra cadena para ser 
                codificada.
                <img src={Ocho} alt="Una imágen de la página donde se calcula p" />
                Una vez finalizado el cálculo pulsaremos "Ir al cuadro" para ver una nueva vista con el cuadro correspondiente para la codificación.
                <img src={Nueve} alt="Una imágen de la página con el cuadro del emisor" />
                Una vez completado el cuadro deberemos elegir entre dos opciones:
                <ul>
                    <li>"Volver al menú" nos regresará directamente a la página principal para ingresar otra cadena.</li>
                    <li>"Pasar al receptor" nos permitirá simular que hemos enviado la cadena codificada y podremos ver como el receptor
                        detecta si hay o no errores en la cadena recibida.
                    </li>
                </ul>
                En este caso nos centraremos en la segunda opción. Por lo que pulsariamos "Pasar al receptor". Una vez realizado esto se nos mostrará una 
                nueva vista. En ella se nos mostrará el resultado del cuadro anterior y se nos permitirá hacer click sobre los números para representar "un
                fallo en la transmición". Si el número está en color rojo significa que es diferente a la cadena original, si está en negro es igual que el de 
                la cadena original.
                <img src={Diez} alt="Una imágen de la página que permite simular errores" />
                <br />
                Nos encontraremos nuevamente con un cuadro, aunque esta vez es del receptor. Las funcionalidades son similares al del otro cuadro. 
                Una vez completado el cuadro se nos indicará si se detectó un error, y en caso de haberlo cual sería la posición del mismo.
                <img src={Once} alt="Una imágen del cuadro del receptor" />
                <img src={Doce} alt="Una imágen del cuadro del receptor completo" />
                Finalmente pulsaremos el botón que dice "Volver al menú" para volver a la página principal e introducir una nueva cadena.
            </p>
        </section>
    )
}