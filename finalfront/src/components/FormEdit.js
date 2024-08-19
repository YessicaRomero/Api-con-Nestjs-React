import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


function FormEditBanda({ show, handleClose, banda, updateBanda }) {
  const [editbanda, setEditBanda] = useState(banda);

    useEffect(() => {
      setEditBanda(banda)
    }, [banda] );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBanda((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBanda(editbanda.id, editbanda);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Banda</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={editbanda?.nombre || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGenero">
            <Form.Label>Género</Form.Label>
            <Form.Control
              type="text"
              name="genero"
              value={editbanda?.genero || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formAnoDeCreacion">
            <Form.Label>Año de Creación</Form.Label>
            <Form.Control
              type="text"
              name="año_de_creacion"
              value={editbanda.año_de_creacion || ''}
              onChange={handleChange}
            />
          </Form.Group>
          
        
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormEditBanda;
