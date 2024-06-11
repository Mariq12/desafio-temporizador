import { useState, useEffect } from "react";
import "./Temporizador.css";

const Temporizador = () => {
    const [contador, establecerContador] = useState(0);
    const [corriendo, establecerCorriendo] = useState(false);

    useEffect(() => {
        if (!corriendo) return;

        const temporizador = setInterval(() => {
            establecerContador((contadorPrevio) => contadorPrevio + 1);
        }, 1000);

        return () => clearInterval(temporizador);
    }, [corriendo]);

    const iniciarContador = () => {
        establecerCorriendo(true);
    };

    const detenerContador = () => {
        establecerCorriendo(false);
    };

    const continuarContador = () => {
        establecerCorriendo(true);
    };

    const reiniciarContador = () => {
        establecerCorriendo(false);
        establecerContador(0);
    };

    return (
        <main className="main-container">
            <header>
                <h1>Desafío Temporizador</h1>
            </header>
            <div className="contador-container">
                <h2>Contador: {contador}</h2>
                <div className="botones-container">
                    <button onClick={iniciarContador}>Iniciar</button>
                    <button onClick={detenerContador}>Detener</button>
                    <button onClick={continuarContador}>Continuar</button>
                    <button onClick={reiniciarContador}>Reiniciar</button>
                </div>
            </div>
        </main>
    );
};

export default Temporizador;
