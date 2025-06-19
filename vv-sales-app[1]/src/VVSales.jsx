
import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username === 'admin' && password === 'vv247341') {
      onLogin(true);
    } else {
      alert('Wrong credentials');
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Product = ({ product }) => (
  <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
    <h3>{product.name}</h3>
    <p>{product.desc}</p>
    <p>Price: ₹{product.price}</p>
    <button onClick={() => window.open(`https://wa.me/918126728840?text=Order:%20${product.name}`)}>Order via WhatsApp</button>
  </div>
);

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  return (
    <div style={{ padding: 20 }}>
      <h2>Add Product</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} /><br />
      <input placeholder="Description" onChange={e => setDesc(e.target.value)} /><br />
      <input placeholder="Price" type="number" onChange={e => setPrice(e.target.value)} /><br />
      <button onClick={() => onAdd({ name, desc, price })}>Add</button>
    </div>
  );
};

const VVSales = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);

  const addProduct = (prod) => {
    setProducts([...products, prod]);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>VV Sales - Gangoh</h1>
      {!loggedIn ? (
        <AdminLogin onLogin={setLoggedIn} />
      ) : (
        <AddProduct onAdd={addProduct} />
      )}
      <div style={{ padding: 20 }}>
        {products.map((p, i) => (
          <Product key={i} product={p} />
        ))}
      </div>
    </div>
  );
};

export default VVSales;
