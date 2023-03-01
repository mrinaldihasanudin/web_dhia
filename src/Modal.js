import React, { useCallback, useEffect, useRef } from "react";
import kerangkaBerpikir from "./Img/kerangkaBerpikir.png";
import diagramAlirPenelitian from "./Img/diagramAlirPenelitian.png";
import kemiringanLereng from "./Img/kemiringanLereng.png";
import klarifikasiJenisTanah from "./Img/klarifikasiJenisTanah.png";
import klarifikasiCurahHujan from "./Img/klarifikasiCurahHujan.png";
import klarifikasiPenggunaanLahan from "./Img/klarifikasiPenggunaanLahan.png";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <section className="modal_components" ref={modalRef}>
          <div className="modal_row">
            <button onClick={() => setShowModal(false)}>X</button>
            <div style={{ marginBottom: 20 }}>
              <h1>Abstrak </h1>
              <p>
                Kota Semarang merupakan salah satu kota yang seringkali dilanda
                bencana banjir. Bencana banjir yang terjadi di Kota Semarang
                diakibatkan oleh beberapa parameter yaitu, ketinggian,
                kelerengan, jarak dari sungai, curah hujan, penggunaan lahan,
                dan jenis tanah. Penelitian ini bertujuan untuk menentukan
                tingkat kerawanan banjir di Kota Semarang dengan menggunakan
                metode overlay dengan scoring. Data penelitian berupa data
                sekunder yang diambil melalui berbagai sumber. Luaran penelitian
                berupa peta tingkat kerawanan banjir yang dihasilkan dari
                overlay yang menunjukkan sebaran lokasi berpotensi banjir.
                Terdapat 3 klasifikasi tingkat kerawanan Banjir di Kota
                Semarang, yaitu tingkat kerawanan banjir rendah, sedang dan
                tinggi. Adapun kecamatan yang mempunyai tingkat kerawanan tingii
                yaitu, Kecamatan Ngaliyan, Semarang Barat, Semarang Utara,
                Semarang Tengah, Semarang Timur, Gayamsari, sebagian Candisari,
                Pedurungan, Genuk, dan Sebagian Kecamatan Mranggen. Pada
                penelitian ini juga dilakukan validasi dengan mengambil sepuluh
                sampel titik banjir di Kota Semarang yang didapatkan dari portal
                berita online. Dari hasil titik validasi didapatkan hasil
                Sembilan titik berada pada kawasan tingkat kerawanan banjir
                tinggi dan satu titik berada pada kawasan tingkat kerawanan
                banjir sedang. Berdasarkan analisis dapat dikatakan bahwa hasil
                penelitian ini cukup valid. Hasil penelitian ini diharapkan
                dapat menjadi referensi pada penelitian selanjutnya, serta dapat
                menjadi literatur kajian untuk mengambil kebijakan terkait
                penanggulangan banjir di Kota Semarang.
              </p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h1>LATAR BELAKANG </h1>
              <p>
                Indonesia memiliki curah hujan yang tinggi dengan perubahan
                cuara serta iklim yang tidak menentu. Kondisi ini mengakibatkan
                Indonesia rawan mengalami bencana hidrometereologi, salah
                satunya banjir (Aziza et al., 2021). Banjir merupakan kondisi di
                mana daerah yang secara topografis dan geomorfologis bersifat
                kering menjadi tergenang oleh air yang terjadi akibat tingkat
                drainase tanah yang telah jenuh dalam menampung air dan
                kemampuan infiltrasi air ke dalam tanah yang mencapai batas
                maksimum (Novaliadi & Hadi, 2014). Permasalahan banjir dapat
                ditimbulkan oleh berbagai faktor di antaranya elemen
                meteorologi, karakteristik fisik daerah aliran sungai (DAS), dan
                manusia (Ramadhan et al., 2022). Umumnya banjir sering terjadi
                di daerah perkotaan akibat dari pergeseran penggunaan lahan yang
                tidak didukung dengan tata kelola saluran air yang baik.
              </p>
              <p>
                Kota Semarang merupakan salah satu kota besar di Indonesia yang
                juga merupakan Ibu Kota Provinsi Jawa Tengah. Semarang merupakan
                salah satu kota di Indonesia yang memiliki pertumbuhan dan
                perkembangan yang pesat, bahkan menjadi penyangga perekonomian
                Provinsi Jawa Tengah (Yunita, 2017). Perkembangan kota ini
                dipengaruhi oleh laju pertumbuhan penduduk yang mengakibatkan
                meningkat pula kebutuhan lahan perkotaan. Oleh karena itu,
                tingkat kepadatan di daerah perkotaan cenderung lebih tinggi
                daripada di wilayah pedesaan, karena tingkat aktivitas dalam
                populasi perkotaan cenderung lebih tinggi. Kota Semarang adalah
                salah satu kota industri di Indonesia, di mana pembangunan
                gedung-gedung dan jalan raya serta bangunan fasilitas penunjang
                lainnya akan terus meningkat (DPMPTSP Semarang, 2021).
              </p>
              <p>
                Pengembangan daerah perkotaan dengan perubahan tutupan vegetasi
                menjadikan permukaan tanah menjadi kedap air dengan kapasitas
                penyimpanan air kecil atau tidak ada. Hal tersebut dapat
                mengakibatkan menurunnya respons tanah terhadap masukkan air
                hujan yang berpotensi terjadi banjir atau genangan (Findayani,
                2015). Oleh karena itu, diperlukan suatu tindakan penanganan
                agar pembangunan bisa dilakukan dengan baik dan tidak berdampak
                buruk ke depannya. Salah satu tindakan yang dapat dilakukan
                adalah memetakan daerah rawan banjir agar nantinya pembangunan
                dapat berbasis site suitability analysis atau analisis
                kesesuaian lokasi. Analisis kesesuaian lokasi adalah jenis
                analisis yang digunakan dalam GIS untuk menentukan tempat atau
                situs terbaik untuk sesuatu (Suwandi, 2018). Dengan diketahuinya
                sebaran daerah yang rawan banjir di Kota Semarang, maka
                pembangunan gedung, fasilitas, sarana dan prasana umum, serta
                flood shelter dapat dibangun dengan analisis kesesuaian lokasi
                ini.
              </p>
              <p>
                Guna memberikan informasi terkait bencana banjir di Kecamatan
                Bontang Barat tentu sangat diperlukan pemetaan tentang daerah
                yang mempunyai kerawanan banjir. Pemetaan daerah-daerah yang
                memiliki tingkat bahaya banjir perlu dilakukan agar pemerintah
                dapat mengambil kebijakan yang tepat untuk menanggulanginya.
                Pemanfaatan Sistem Informasi Geografis (SIG) merupakan salah
                satu cara dalam proses pemetaan,termasuk pembuatan peta
                kerawanan banjir yang menjadi fokus penelitian ini (Darmawan. et
                al., 2017). Kerawanan banjir dapat diidentifikasi secara cepat,
                mudah dan akurat melalui Sistem Informasi Geografis dengan
                menggunakan metode tumpang susun/overlay terhadap parameter
                parameter banjir, seperti kemiringan lereng, ketinggian lahan,
                jenis tanah, curah hujan, penggunaan lahan, dan Buffering
                sungai. Melalui SIG, diharapkan akan mempermudah penyajian
                informasi spasial khususnya yang terkait dengan penentuan
                tingkat kerentanan banjir serta dapat menganalisis dan
                memperoleh informasi baru dalam mengidentifikasi daerah-daerah
                yang sering menjadi sasaran banjir. Oleh karena itu, peneliatan
                ini dilakukan dengan tujuan untuk untuk menentukan zona sebaran
                potensi rawan banjir yang terdapat di Kota Semarang melalui
                penggunaan data penginderaan jauh dan SIG yang ditampilkan dalam
                bentuk WebGIS.
              </p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h1>RUMUSAN MASALAH </h1>
              <p>
                Dalam pelaksanaan kegiatan Kerja Praktik ini terdapat rumusan
                persoalan yang diangkat sebagai berikut:
              </p>
              <ol>
                <li>
                  Bagaimana hasil sebaran tingkat kerawanan banjir di Kota
                  Semarang dengan metode scoring dan pembobotan?
                </li>
                <li>
                  Di mana sajakah kecamatan di Kota Semarang yang memiliki
                  tingkat kerawanan tinggi?
                </li>
              </ol>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h1>TUJUAN</h1>
              <p>
                Tujuan Kerja Praktik pada instansi atau perusahaan adalah
                sebagai berikut :
              </p>
              <ol>
                <li>
                  Dapat mengetahui hasil sebaran tingkat kerawanan banjir di
                  Kota Semarang dengan metode scoring dan pembobotan.
                </li>
                <li>
                  Dapat mengetahui kecamatan di Kota Semarang yang memiliki
                  tingkat kerawanan tinggi.
                </li>
              </ol>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h1>ALAT DAN DATA </h1>
              <ol>
                <li>Alat</li>
                Alat-alat yang digunakan dalam pelaksanaan kerja praktik di
                antaranya:
                <table>
                  <thead>
                    <tr>
                      <td>No.</td>
                      <td>Alat</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Laptop Asus 1DUAU9B2</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>
                        <i>Software</i> ArcGIS
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>
                        <i>Software</i> QGIS
                      </td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Microsoft Word</td>
                    </tr>
                  </tbody>
                </table>
                <li>Data</li>
                Data-data yang diperlukan dalam pelaksanaan kerja praktik di
                antaranya:
                <table>
                  <thead>
                    <tr>
                      <td>No.</td>
                      <td>Data</td>
                      <td>Tahun</td>
                      <td>Format</td>
                      <td>Sumber</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Peta RBI </td>
                      <td>2014</td>
                      <td>SHP</td>
                      <td>Web Ina Geoportal </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>Peta RBI </td>
                      <td>2014</td>
                      <td>SHP</td>
                      <td>Web Ina Geoportal </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>Peta RBI </td>
                      <td>2014</td>
                      <td>SHP</td>
                      <td>Web Ina Geoportal </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>Peta RBI </td>
                      <td>2014</td>
                      <td>SHP</td>
                      <td>Web Ina Geoportal </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>Peta RBI </td>
                      <td>2014</td>
                      <td>SHP</td>
                      <td>Web Ina Geoportal </td>
                    </tr>
                    <tr>
                      <td>1.</td>
                      <td>Peta RBI </td>
                      <td>2014</td>
                      <td>SHP</td>
                      <td>Web Ina Geoportal </td>
                    </tr>
                  </tbody>
                </table>
              </ol>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h1>FLOWCHART </h1>
              <ol>
                <li>Kerangka Berpikir</li>
                <img src={kerangkaBerpikir} alt="Kerangka Berpikir" />
              </ol>
              <ol>
                <li>Diagram Alir penelitian</li>
                <img
                  src={diagramAlirPenelitian}
                  alt="Diagram Alir penelitian"
                />
              </ol>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h1>METODE DAN PARAMETER </h1>
              <p>
                Metode dalam penelitian ini adalah overlay dengan pembobotan dan
                scoring. Pembobotan adalah pemberian bobot pada peta digital
                masing masing parameter yang berpengaruh terhadap banjir, dengan
                didasarkan atas pertimbangan pengaruh masing-masing parameter
                terhadap banjir. Scoring adalah pemberian skor terhadap tiap
                kelas di masing-masing parameter. Pemberian skor didasarkan pada
                pengaruh kelas tersebut terhadap kejadian. Semakin besar
                pengaruhnya terhadap kejadian, maka semakin tinggi nilai
                skornya. Berikut merupakan tabel parameter yang digunakan
                peneliti:
              </p>
              <table>
                <thead>
                  <tr>
                    <td>Parameter</td>
                    <td>Kelas</td>
                    <td>Skor</td>
                    <td>Bobot(%)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ marginBottom: 20 }}>
              <h1>HASIL DAN PEMBAHASAN </h1>
              <b>A. Hasil dan Analisis Parameter Kelerengan</b>
              <p>
                Kemiringan lereng pada penelitian ini dibuat berdasarkan hasil
                pengolahan data DEMNAS menggunakan metode slope pada peranagkat
                lunak pengolah data spasial ArcGIS. Kemiringan lereng
                mempengaruhi kecepatan dan volume limpasan permukaan.
                Klasifikasi dan scoring kelerengan didapatkan dari Tabel IV-2:
              </p>
              <div style={{ textAlign: "center" }}>
                Tabel IV-2 Klasifikasi Kelerengan
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Parameter</td>
                    <td>Kelas</td>
                    <td>Skor</td>
                    <td>Bobot(%)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                Berdasarkan hasil pengolahan dihasilkan peta kelerengan seperti
                pada Gambar IV-1.
              </div>
              <img src={kemiringanLereng} alt="Kemiringan Lereng" />
              <div>Gambar IV-1 Hasil Klasifikasi Kemiringan Lereng</div>
              <p>
                Dari Gambar IV-1 bagian utara di Kota Semarang mempunyai
                kemiringan lereng dalam kategori datar dengan persentase
                kemiringan 0- 8%. Hal ini sangat berpotensi terjadi banjir
                karena wilayah ini cenderung datar yang bisa menjadi daerah
                tampungan air ketika hujan. Sementara daerah yang memiliki
                wilayah curam dan sangat curam berada di Kota Semarang bagian
                selatan yang mempunyai persentase kemiringan 25-45% sehingga
                daerah ini lebih aman dari bencana banjir.
              </p>
              <b>B. Hasil dan Analisis Parameter Jenis Tanah</b>
              <p>
                Klasifikasi jenis tanah diperoleh dari data FAO Digital Soil Map
                of The World (DSMW) pada Tabel IV-3. Peta jenis tanah dibuat
                berdasarkan klasifikasi dengan lima kelas berdasarkan tingkat
                penyerapan air.
              </p>
              <div>Tabel IV-3 Klasifikasi Jenis Tanah</div>
              <table>
                <thead>
                  <tr>
                    <td>Parameter</td>
                    <td>Kelas</td>
                    <td>Skor</td>
                    <td>Bobot(%)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kelerengan</td>
                    <td>
                      0 % - 8% (Datar) <br />
                      8% - 15% (Landai)
                      <br />
                      15% - 25% (Bergelombang)
                      <br />
                      25% - 40% (Curam)
                      <br />
                      >40% (sangat curam)
                    </td>
                    <td>
                      9<br />
                      7<br />
                      5<br />
                      3<br />1
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      10
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Berdasarkan hasil pengolahan dihasilkan peta jenis tanah di Kota
                Semarang seperti pada Gambar IV-2.
              </p>
              <img src={klarifikasiJenisTanah} alt="klarifikasiJenisTanah" />
              <div>Gambar IV-2 Hasil klasifikasi Jenis Tanah</div>
              <p>
                Berdasarkan hasil pengolahan dengan data dari FAO Digital Soil
                Map of The World (DSMW) diperoleh bahwa jenis tanah di Kota
                Semarang di dominasi oleh jenis tanah Chromic Luvisol. Chromic
                Luvisol memiliki daya serap air yang moderat hingga tinggi. Daya
                serap air moderat pada Chromic Luvisol berarti bahwa tanah
                tersebut mampu menahan sebagian air yang terdapat pada permukaan
                tanah, tetapi tidak begitu banyak sehingga air tidak tersedia
                untuk tanaman dalam waktu yang lama.{" "}
              </p>
            </div>
            <div>C. Hasil dan Analisis Parameter Curah Hujan</div>
            <p>
              Klasifikasi curah hujan diperoleh dari data Climate Hazards Group
              InfraRed Precipitation with Station Data (CHIRPS) pada Tabel IV-4.
              Peta curah hujan dibuat berdasarkan klasifikasi dengan lima kelas
              berdasarkan gabungan data curah hujan dari satelit Tropical
              Rainfall Measuring Mission (TRMM) dengan data dari lebih dari
              20,000 stasiun cuaca di seluruh dunia. Data tersebut kemudian
              diproses dengan menggunakan teknik interpolasi spasial untuk
              menghasilkan data curah hujan resolusi tinggi pada skala global.
            </p>
            <div>Tabel IV-4 Table Curah Hujan</div>
            <table>
              <thead>
                <tr>
                  <td>Parameter</td>
                  <td>Kelas</td>
                  <td>Skor</td>
                  <td>Bobot(%)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kelerengan</td>
                  <td>
                    0 % - 8% (Datar) <br />
                    8% - 15% (Landai)
                    <br />
                    15% - 25% (Bergelombang)
                    <br />
                    25% - 40% (Curam)
                    <br />
                    >40% (sangat curam)
                  </td>
                  <td>
                    9<br />
                    7<br />
                    5<br />
                    3<br />1
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                    10
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Berdasarkan hasil pengolahan dihasilkan peta curah hujan di Kota
              Semarang seperti pada Gambar IV-3.
            </p>
            <img src={klarifikasiCurahHujan} alt="klarifikasiCurahHujan" />
            <div>Gambar IV-3 Hasil Klasifikasi Curah Hujan</div>
            <p>
              Berdasarkan hasil pengolahan dengan data dari CHIRPS dihasilkan
              bahwa di Kota Semarang pada tahun 2022 dari Bulan Januari hingga
              Desember memiliki curah hujan yang sangat tinggi pada semua
              daerah.
            </p>
            <div>D. Hasil dan Analisis Parameter Penggunaan Lahan</div>
            <p>
              Penggunaan lahan merupakan salah satu parameter yang berperan pada
              besarnya air limpasan permukaan. Pemanfaatan lahan yang banyak
              membutuhkan pasokan air atau yang memiliki sumber air menjadi
              daerah yang cukup rawan terjadi banjir.
            </p>
            <div>Tabel IV-5 Tabel Klasifikasi Penggunaan Lahan</div>
            <table>
              <thead>
                <tr>
                  <td>Parameter</td>
                  <td>Kelas</td>
                  <td>Skor</td>
                  <td>Bobot(%)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kelerengan</td>
                  <td>
                    0 % - 8% (Datar) <br />
                    8% - 15% (Landai)
                    <br />
                    15% - 25% (Bergelombang)
                    <br />
                    25% - 40% (Curam)
                    <br />
                    >40% (sangat curam)
                  </td>
                  <td>
                    9<br />
                    7<br />
                    5<br />
                    3<br />1
                  </td>
                  <td>
                    <br />
                    <br />
                    <br />
                    <br />
                    10
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              Berdasarkan hasil pengolahan dihasilkan peta penggunaan lahan di
              Kota Semarang seperti pada Gambar IV-4.
            </div>
            <img
              src={klarifikasiPenggunaanLahan}
              alt="klarifikasiPenggunaanLahan"
            />
            <div>Gambar IV-4 Hasil Klasifikasi Penggunaan Lahan</div>
            <p>
              Berdasarkan hasil pengolahan dengan data dari Land Use Land Cover
              (LULC) Esri tahun 2021 dihasilkan bahwa penggunaan lahan di Kota
              Semarang didominasi oleh pemukiman. Apabila dilihat melalui
              penggunaan lahannya, Kota Semarang cenderung memiliki potensi akan
              adanya banjir. Ini dikarenakan beberapa tumbuhan semak kurang
              mampu dalam menahan gerak air pemukaannya, sementara pemukiman
              biasanya memiliki beban tanah yang cukup besar. Adanya pemukiman
              yang padat juga dapat menghambat lajurnya air sungai.
            </p>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Modal;
