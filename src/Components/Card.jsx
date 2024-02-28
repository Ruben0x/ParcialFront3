import React from 'react';

export const Card = ({ nombre, digimon }) => {
  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <h1>Digimon: {digimon}</h1>
    </div>
  );
};
