import React, { useState } from 'react';
import axios from 'axios';

const FormularioInmueble = () => {
  const [formData, setFormData] = useState({
    direccion: '',
    barrio: '',
    antiguedad: '',
    estrato: '',
    descripcion: '',
    alcobas: '',
    banos: '',
    garajes: '',
    pisos: '',
    valorArriendo: false,
    valorVenta: false,
    administracion: false,
    areaM2: '',
    contacto: '',
    inmobiliariaEncargada: false,
  });

  const [mensajeExito, setMensajeExito] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://sheet.best/api/sheets/853997e0-1b7b-42cb-b0aa-66c4c2160640',
        formData
      );
      if (response.status === 200) {
        setMensajeExito('El inmueble se publicó de manera exitosa');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="form-container" style={{ margin: '2rem' }}>
      <h2>Datos del Inmueble</h2>
      <form onSubmit={handleSubmit}>
        {/* Primera columna */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <input
              type="text"
              name="direccion"
              placeholder="Direccion"
              value={formData.direccion}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <input
              type="text"
              name="barrio"
              placeholder="Barrio"
              value={formData.barrio}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <input
              type="text"
              name="antiguedad"
              placeholder="Antigüedad"
              value={formData.antiguedad}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <input
              type="text"
              name="estrato"
              placeholder="Estrato"
              value={formData.estrato}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <textarea
              name="descripcion"
              placeholder="Descripción del inmueble"
              value={formData.descripcion}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5', width: '100%' }}
            ></textarea>
          </div>

          {/* Segunda columna */}
          <div>
            <input
              type="text"
              name="alcobas"
              placeholder="Alcobas"
              value={formData.alcobas}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <input
              type="text"
              name="banos"
              placeholder="Baños"
              value={formData.banos}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <input
              type="text"
              name="garajes"
              placeholder="Garajes"
              value={formData.garajes}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <input
              type="text"
              name="pisos"
              placeholder="Pisos"
              value={formData.pisos}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <div>
              <label>Valor arriendo</label>
              <input
                type="checkbox"
                name="valorArriendo"
                checked={formData.valorArriendo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Valor venta</label>
              <input
                type="checkbox"
                name="valorVenta"
                checked={formData.valorVenta}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Administración</label>
              <input
                type="checkbox"
                name="administracion"
                checked={formData.administracion}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="areaM2"
              placeholder="Área M2"
              value={formData.areaM2}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <input
              type="text"
              name="contacto"
              placeholder="Contacto"
              value={formData.contacto}
              onChange={handleChange}
              style={{ backgroundColor: '#e1f7d5' }}
            />
            <div>
              <label>Desea que la inmobiliaria se encargue</label>
              <input
                type="checkbox"
                name="inmobiliariaEncargada"
                checked={formData.inmobiliariaEncargada}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button type="submit" style={{ backgroundColor: '#c2e699' }}>
          Publicar
        </button>
      </form>

      {mensajeExito && <p>{mensajeExito}</p>}
    </div>
  );
};

export default FormularioInmueble;
