import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    tipoInmueble: '',
    tipoNegocio: '',
    precio: '',
    baños: '',
    garages: '',
    alcobas: '',
    area: '',
    descripcion: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://sheet.best/api/sheets/853997e0-1b7b-42cb-b0aa-66c4c2160640', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('El inmueble ha sido registrado con éxito.');
        setFormData({
          nombre: '',
          direccion: '',
          tipoInmueble: '',
          tipoNegocio: '',
          precio: '',
          baños: '',
          garages: '',
          alcobas: '',
          area: '',
          descripcion: '',
        });
      } else {
        throw new Error('Error al enviar los datos.');
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage('Hubo un problema al registrar el inmueble.');
    }
  };

  return (
    <div className="App">
      <h2>Formulario de Inscripción de Inmuebles</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Inmueble:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Dirección:</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Tipo de Inmueble:</label>
          <select name="tipoInmueble" value={formData.tipoInmueble} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Local">Local</option>
            <option value="Oficina">Oficina</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de Negocio:</label>
          <select name="tipoNegocio" value={formData.tipoNegocio} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="Venta">Venta</option>
            <option value="Arriendo">Arriendo</option>
          </select>
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input type="number" name="precio" value={formData.precio} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Baños:</label>
          <input type="number" name="baños" value={formData.baños} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Garages:</label>
          <input type="number" name="garages" value={formData.garages} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Alcobas:</label>
          <input type="number" name="alcobas" value={formData.alcobas} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Área (m²):</label>
          <input type="number" name="area" value={formData.area} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Registrar Inmueble</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default App;
