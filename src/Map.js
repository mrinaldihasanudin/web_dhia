import React, { useState } from "react";
import MapGL, { Source, Layer } from "@urbica/react-map-gl";

// Data geojson
import data from "./data.geojson";

// Styling
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ filter }) => {
  const token =
    "pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2w2czRtNzYxMG1xbDNrbGo1N3k4a3NuciJ9.VHdXy-kV3UZLqcFF601K6A";
  const [viewport, setViewport] = useState({
    latitude: -6.966667,
    longitude: 110.416664,
    zoom: 11,
  });

  console.log(filter);

  return (
    <MapGL
      style={{ width: "70vw", height: "70vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      accessToken={token}
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      onViewportChange={setViewport}
    >
      <Display
        title="bandung"
        data={data}
        type="fill"
        color={{
          "fill-color": [
            "match",
            ["get", "Kawasan"],
            "Tingkat Kerawanan Redah",
            "#ff0000",
            "Tingkat Kerawanan Sedang",
            "#00ff00",
            "Tingkat Kerawanan Tinggi",
            "#0000ff",
            "#000000",
          ],
          "fill-opacity":
            filter !== "" ? ["match", ["get", "Kawasan"], filter, 0.6, 0] : 0.5,
          "fill-outline-color": "rgba(0,0,0,0.2)",
        }}
      />
    </MapGL>
  );
};

export default Map;

export const Display = ({ title, data, color, type, onClick }) => {
  return (
    <section>
      <Source key={title} id={title} type="geojson" data={data} />
      <Layer
        id={title}
        type={type}
        source={title}
        paint={color}
        filter={["!", ["has", "point_count"]]}
        onClick={onClick}
      />
    </section>
  );
};
