import React, { useState } from "react";
import "./App.css";
import Map from "./Map";
import Modal from "./Modal";

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
          <h1>Judul</h1>
        </nav>
        <div className="map_section">
          <Map filter={filter} setFilter={setFilter} />
          <div className="card_information">
            <button onClick={ClickModal}>PopUp</button>

            <button onClick={() => setFilter("")}>Tampilkan Semua</button>
            <button onClick={() => setFilter("Tingkat Kerawanan Redah")}>
              Tingkat Kerawanan Redah
            </button>
            <button onClick={() => setFilter("Tingkat Kerawanan Sedang")}>
              Tingkat Kerawanan Sedang
            </button>
            <button onClick={() => setFilter("Tingkat Kerawanan Tinggi")}>
              Tingkat Kerawanan Tinggi
            </button>
          </div>
        </div>
        <div className="contact_section"></div>
      </section>
    </>
  );
}

export default App;
