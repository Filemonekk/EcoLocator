import React from 'react';
import { useAirtableDataWaste } from '../../services/useAirtableWaste';
import styles from './WasteTable.module.scss'



interface AirtableRecord {
    id: string;
    fields: {
      [key: string]: string | number | boolean | null; 
    };
  }


const WasteTable: React.FC =() => {
    const { isLoading, error, data } = useAirtableDataWaste();
    if (isLoading) return <p>Ładowanie danych...</p>;
    if (error) return <p>Błąd podczas pobierania danych</p>;
  if (!data || data.length === 0) return <p>Brak danych w tabeli.</p>;
  
  const columns = Object.keys(data[0].fields);

    return (
        <div>
        <h2>Waste Data </h2>
        <table className={styles.wasteTable} >
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((record: AirtableRecord) => (
            <tr key={record.id}>
              {columns.map((col) => (
                <td key={col}>{String(record.fields[col])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
  
export default WasteTable


