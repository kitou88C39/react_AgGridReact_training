import './App.css';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  //データ用の配列と列定義の配列を作成する
  const rowData = [
    { make: 'Ford', model: 'Focus', price: 40000 },
    { make: 'Toyota', model: 'Celica', price: 45000 },
    { make: 'BMW', model: '4 series', price: 50000 },
  ];

  const cloumnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  return (
    // divタグでcssのクラスとテーマを設定する
    <div className='ag-theme-alpine' style={{ height: 500 }}>
      {/* Grid行にデータと列定義のプロパティに設定する */}
      <AgGridReact rowData={rowData} cloumnDefs={cloumnDefs} />
    </div>
  );
}

export default App;
