import './App.css';

import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  //データ用の配列と列定義の配列を作成する
  const [rowData, setRowData] = useState([
    { make: 'Ford', model: 'Focus', price: 40000 },
    { make: 'Toyota', model: 'Celica', price: 45000 },
    { make: 'BMW', model: '4 series', price: 50000 },
  ]);

  const [columnDefs, serColumnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);
  const defaultColDefs = useState(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  useEffect(() => {
    fetch(
      'https://www.ag-grid.com/example-assets/row-data.json'
        .then((result) => result.json())
        .then((rowData) => setRowData(rowData)),
      []
    );
  });

  return (
    // divタグでcssのクラスとテーマを設定する
    <div className='ag-theme-alpine' style={{ height: 500 }}>
      {/* Grid行にデータと列定義のプロパティに設定する */}
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}

export default App;
