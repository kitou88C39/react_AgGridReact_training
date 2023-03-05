import './App.css';
import { AgGridReact } from 'ag-grid-react';

//データ用の配列と列定義の配列を作成する
const rowData = [];
const cloumnDefs = [];

function App() {
  return (
    <div>
      {/* Grid行にデータと列定義のプロパティに設定する */}
      <AgGridReact rowData={rowData} cloumnDefs={cloumnDefs} />
    </div>
  );
}

export default App;
