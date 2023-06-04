import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import './Home.css'; // Import file CSS
import kedai from '../image/cumik.jpg';
import laptopCodeImage from '../image/mieayam1.jpg';
import mobileImage from '../image/bakso1.jpg';
import backendImage from '../image/pentol1.jpg';


function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div className="home-container">
      <h1 className="home-title">Daftar Makanan</h1>
      <table className="home-table">
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product-list__ok">
              <td>
                <img src={product.image} alt={product.name} className="home-image" />
              </td>
              <td>{product.name}</td>
              <td>Rp. {product.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="home">
      <header className="home__header">
        <h1 className="home__title">Welcome to Kedai Cumik</h1>
        <div className="home__image-container">
          <img className="home__image" src={kedai} alt="Web Development" />
        </div>
        <br></br>
        </header>
        <p className="home__subtitle">Menu Kedai Cumik</p>
      <section className="home__content">
        <div className="home__feature">
          <img className="home__image" src={laptopCodeImage} alt="Web Development" />
          <h2 className="home__feature-title">Mie Ayam</h2>
          <p className="home__feature-description">
           Rp. 10.0000
          </p>
        </div>
        <div className="home__feature">
          <img className="home__image" src={mobileImage} alt="Mobile Development" />
          <h2 className="home__feature-title">Bakso</h2>
          <p className="home__feature-description">
           Rp. 10.0000
          </p>
        </div>
        <div className="home__feature">
          <img className="home__image" src={backendImage} alt="Backend Development" />
          <h2 className="home__feature-title">Pentol</h2>
          <p className="home__feature-description">
         Rp. 10.0000
          </p>
        </div>
      </section>
      <footer className="home__footer">
        <p>&copy; Muharom_Alfii</p>
      </footer>
    </div>

    </div>
  );
}

export default Home;
