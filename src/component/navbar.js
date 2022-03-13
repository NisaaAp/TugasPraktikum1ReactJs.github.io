
import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Tugas Praktikum 1
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bmi">
                    BMI
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cicilan">
                    Cicilan Bank
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/hargaAkhir">
                    Harga Akhir
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/biner">
                    Konversi Biner
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/oktal">
                    Konversi Oktal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/desimal">
                    Konversi Desimal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/heksadesimal">
                    Konversi Hexadesimal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

