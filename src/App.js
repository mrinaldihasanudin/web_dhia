import React, { useState } from "react";
import "./App.css";
import Map from "./Map";
import Modal from "./Modal";
import logo from "./Img/LogoUndip.jpg";

function App() {
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const ClickModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <section className="map_page">
        <nav className="nav_section">
          <div className="flex_center">
            <img className="logos" src={logo} alt="Logo Undip" />
            <p>Universitas Diponegoro</p>
          </div>
          <div>
            <button onClick={ClickModal}>Profile kota Semarang</button>
          </div>
        </nav>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          PETA TINGKAT KERAWANAN BANJIR KOTA SEMARANG
        </h1>
        <div className="map_section">
          <div className="card_information">
            {/* <button onClick={ClickModal}>Profile kota Semarang</button> */}
            <button onClick={() => setFilter("")}>
              Semua Tingkat <br /> Kerawanan Banjir Kota Semarang
            </button>
            <br />
            <button onClick={() => setFilter("Tingkat Kerawanan Redah")}>
              Tingkat Kerawanan Redah
            </button>
            <br />
            <button onClick={() => setFilter("Tingkat Kerawanan Sedang")}>
              Tingkat Kerawanan Sedang
            </button>
            <br />
            <button onClick={() => setFilter("Tingkat Kerawanan Tinggi")}>
              Tingkat Kerawanan Tinggi
            </button>
          </div>
          <Map filter={filter} setFilter={setFilter} />
        </div>
        {/* <div className="contact_section"></div> */}
      </section>
    </>
  );
}

export default App;
