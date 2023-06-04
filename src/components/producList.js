import React, { useState, useEffect, useContext } from 'react';
import './ProductList.css'; // Import file CSS
import { ProductContext } from './ProductContext';

function ProductList() {
  const { products, setProducts } = useContext(ProductContext);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const [formError, setFormError] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  useEffect(() => { 
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, [setProducts]);
 
  const addProduct = () => {
    if (newProductName && newProductPrice && newProductImage) {
      const newProduct = {
        id: Date.now(),
        name: newProductName,
        price: parseInt(newProductPrice),
        image: URL.createObjectURL(newProductImage),
      };
      setProducts([...products, newProduct]);
      setNewProductName('');
      setNewProductPrice('');
      setNewProductImage(null);
      setFormError(false);
      setAddSuccess(true);
      setTimeout(() => {
        setAddSuccess(false); // Menghilangkan pesan sukses setelah 3 detik (3000 ms)
      }, 2000);
    } else {
      setFormError(true);
    }
  };

  const deleteProduct = (productId) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus produk ini?');
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    }
  };

  const editProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      setEditProductId(productId);
      setNewProductName(product.name);
      setNewProductPrice(product.price.toString());
    }
  };

  const updateProduct = () => {
    const updatedProducts = products.map((product) => {
      if (product.id === editProductId) {
        return {
          ...product,
          name: newProductName,
          price: parseInt(newProductPrice),
        };
      }
      return product;
    });
    setProducts(updatedProducts);
    setNewProductName('');
    setNewProductPrice('');
    setEditProductId(null);
    setFormError(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProductImage(file);
  };

  return (
    <div className="product-list">
      <h2 className="product-list__title">Daftar Makanan</h2>
      {addSuccess && <p className="success-message">Data telah ditambahkan!</p>} {/* Menampilkan pesan sukses */}
      <table className="product-list__table">
        <thead>
          <tr>
            <th>GAMBAR</th>
            <th>NAMA MAKANAN</th>
            <th>HARGA</th>
            <th>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product-list__name">
              <td>
                <img src={product.image} alt={product.name} className="product-list__image" />
              </td>
              <td>{product.name}</td>
              <td>Rp. {product.price.toLocaleString()}</td>
              <td>
                <button className="btn" onClick={() => deleteProduct(product.id)}>
                  Hapus
                </button>
                <button className="btn1" onClick={() => editProduct(product.id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="product-list__form">
        <input
          type="text"
          placeholder="Nama Makanan"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Harga"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {formError && <p className="error-message">Harap Dilengkapi Dulu Ya Kakak!!!</p>}
        {editProductId ? (
          <button className="tambah" onClick={updateProduct}>Update</button>
        ) : (
          <button className="tambah" onClick={addProduct}>Tambah</button>
        )}
      </div>
    </div>
  );
}

export default ProductList;
