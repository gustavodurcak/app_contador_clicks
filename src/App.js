import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from "react";


function App() {

    const [numClicks, setNumClicks] = useState(0);


    const manejarClick = () => {
        setNumClicks(numClicks + 1);
    }

    const reiniciarContador = () => {
        setNumClicks(0);
    } 

    return (
        <div className="App">
             <div className='freecodecamp-logo-contenedor'>
                 <h1>Mi Contador de Clicks</h1>
             </div>
             <div className='contenedor-principal'>
             <Contador numClicks={numClicks}/>
                 <Boton 
                    texto="Click"
                    esBotondeClick={true}
                    manejarClick={manejarClick}
                 />
                 <Boton 
                    texto="Reiniciar"
                    esBotondeClick={false}
                    manejarClick={reiniciarContador}
                 />
             </div>      
        </div>
    );
}

export default App;
