import React from 'react';
import './formAdd.css';
import { useState } from 'react';


export function FormAddBanda ({ onSubmit }) {
    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('');
    const [año_de_creacion, setAñoCreacion] = useState('');
    const [images, setImages] = useState('');

    

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newBanda = { nombre, genero, año_de_creacion,images };
      await onSubmit(newBanda);
    };
    return (
      <form onSubmit={handleSubmit} class="form">
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className='input-group mb-3' />
        </label>
        <label>
          Genero:
          <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} className='input-group mb-3' />
        </label>
        <label>
          Año de Creacion:
          <input type="text" value={año_de_creacion} onChange={(e) => setAñoCreacion(e.target.value)} className='input-group mb-3' />
        </label>
        <label>
          Imagen:
          <input type="text" value={images} onChange={(e) => setImages(e.target.value)} className='input-group mb-3' />
        </label>
        <button type="onSubmit">Crear Banda</button>
      </form>
    );
  };
  export default FormAddBanda;