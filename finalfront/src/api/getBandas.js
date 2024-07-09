const API = "http://localhost:3030/bandas";

export const getBandas = () => fetch(`${API}`);


export const getBandaById = async (id) => {
  const response = await fetch(`${API}/${id}`);
  if (!response.ok) {
    throw new Error('La banda no se encuentra');
  }
  return response.json();
};



export const addBanda = async (newBanda) => {
  const response = await fetch(`${API}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBanda),
  });
  return response.json();
};

export const updateBandasById = async (id, banda) => {
  const response = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(banda),
  });
  return response.json();
};

export const deleteBanda = async (id) => {
  const response = await fetch(`${API}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
