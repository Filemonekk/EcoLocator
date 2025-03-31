import React, { useEffect } from 'react';
import L from 'leaflet';
import styles from './Map.module.scss';
import 'leaflet/dist/leaflet.css';

interface Props {
  titlemap: string;
}

const Map: React.FC<Props> = ({ titlemap }) => {
  useEffect(() => {
    const map = L.map('map').setView([54.3520252, 18.6466384], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([54.3520252, 18.6466384])
      .addTo(map)
      .bindPopup('Object')
      .openPopup();

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titlemap}>{titlemap}</h1>
      <div id="map" className={styles.mapContainer}></div>
    </div>
  );
};

export default Map;
