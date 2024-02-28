import { useState } from 'react';
import './App.css';
import { Card } from './Components/Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [digimon, setDigimon] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeDigimon = (e) => setDigimon(e.target.value);

  const espacioEnBlanco = (texto) => {
    let regex = /^\S/;
    return regex.test(texto);
  };

  const isValidNombre = (name) => {
    const valid = name.trim().length > 2 ? true : false;
    return valid;
  };
  const isValidDigimon = (digimon) => {
    const valid = digimon.trim().length > 5 ? true : false;
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isValidNombre(nombre) &&
      espacioEnBlanco(nombre) &&
      isValidDigimon(digimon)
    ) {
      setMostrarCard(true);
      setMensaje(false);
    } else {
      setMostrarCard(false);
      setMensaje(true);
    }
  };
  return (
    <>
      <div>
        <h1>Primer Parcial FrontEnd3</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>Nombre</label>
          <input type='text' value={nombre} onChange={onChangeNombre}></input>
          <label htmlFor=''>Digimon</label>
          <input type='text' value={digimon} onChange={onChangeDigimon}></input>
          <button type='sumbit'>Enviar</button>
        </form>
        {mensaje && (
          <p style={{ color: 'red' }}>
            Por favor chequea que la información sea correcta
          </p>
        )}
        {mostrarCard && <Card nombre={nombre} digimon={digimon} />}
      </div>
    </>
  );
}

export default App;
