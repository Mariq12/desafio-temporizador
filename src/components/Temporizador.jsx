import { useState, useEffect } from "react";
import "./Temporizador.css";

const Temporizador = () => {
    const [contador, establecerContador] = useState(0);
    const [corriendo, establecerCorriendo] = useState(true);
    const [mostrandoIniciar, establecerMostrandoIniciar] = useState(false);
    const [habilitarContinuar, establecerHabilitarContinuar] = useState(false);

    useEffect(() => {
        if (!corriendo) return;

        const temporizador = setInterval(() => {
            establecerContador((contadorPrevio) => contadorPrevio + 1);
        }, 1000);

        return () => clearInterval(temporizador);
    }, [corriendo]);

    const iniciarContador = () => {
        establecerCorriendo(true);
        establecerMostrandoIniciar(false);
    };

    const detenerContador = () => {
        establecerCorriendo(false);
        establecerHabilitarContinuar(true);
    };

    const continuarContador = () => {
        establecerCorriendo(true);
        establecerHabilitarContinuar(false);
    };

    const reiniciarContador = () => {
        establecerCorriendo(false);
        establecerContador(0);
        establecerMostrandoIniciar(true);
        establecerHabilitarContinuar(false);
    };

    return (
        <main className="main-container">
            <header>
                <h1>Desafío Temporizador</h1>
            </header>
            <div className="contador-container">
                <h2>Contador: {contador}</h2>
                <div className="botones-container">
                    {mostrandoIniciar && (
                        <button onClick={iniciarContador}>Iniciar</button>
                    )}
                    {!mostrandoIniciar && (
                        <>
                            <button onClick={detenerContador}>Detener</button>
                            <button 
                                onClick={continuarContador} 
                                style={{backgroundColor: habilitarContinuar ? '#ff0000' : '#ACACAC'}}
                                disabled={!habilitarContinuar}
                            >
                                Continuar
                            </button>
                        </>
                    )}
                    <button onClick={reiniciarContador}>Reiniciar</button>
                </div>
            </div>
        </main>
    );
};

export default Temporizador;

