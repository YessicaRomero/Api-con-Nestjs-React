import {
  addBanda,
  deleteBanda,
  getBandas,
  updateBandasById,
} from "./api/getBandas";
import { React, useEffect, useState } from "react";
import "./App.css";
import CardsBandas from "./components/cards";
import FormEditBanda from "./components/FormEdit";
import FormAddBanda from "./components/FormAdd";

function App() {
  const [bandas, setBandas] = useState([]);
  const [editingBanda, setEditingBanda] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    getBandas()
      .then((res) => res.json())
      .then((datos) => setBandas(datos));
  }, []);

  const handleUpdateBanda = async (id, updateBanda) => {
    await updateBandasById(id, updateBanda);
    const res = await getBandas();
    const data = await res.json();
    setBandas(data);
  };
  const handleAddBanda = async (newBanda) => {
    await addBanda(newBanda);
    const res = await getBandas();
    const data = await res.json();
    setBandas(data);
    setShowAddForm(false);
  };
  const handleDeleteBanda = async (id) => {
    await deleteBanda(id);
    const res = await getBandas();
    const data = await res.json();
    setBandas(data);
  };

  return (
    <div className="container">
      <h1>Bandas de musica</h1>

      <div className="tarjeta">
        {bandas?.map((banda) => (
          <CardsBandas
            banda={banda}
            key={banda.id}
            onEdit={() => setEditingBanda(banda)}
            onDelete={() => handleDeleteBanda(banda.id)}
          />
        ))}
        {editingBanda && (
          <FormEditBanda
            show={!!editingBanda}
            handleClose={() => setEditingBanda(null)}
            banda={editingBanda}
            updateBanda={handleUpdateBanda}
          />
        )}
        <div className="addBanda">
          <h3>Tambien podes agregar tu banda Favorita</h3>
          <button
            type="button"
            className="bi bi-file-music-fill"
            onClick={() => setShowAddForm(true)}
          >
            Agrega una banda 𝄞
          </button>
          {showAddForm && <FormAddBanda onSubmit={handleAddBanda} />}
        </div>
      </div>
    </div>
  );
}

export default App;
