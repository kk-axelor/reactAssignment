import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchAPI from "./Components/fecthapi/FetchAPI";
import Layout from "./layouts/Layout";
import AxiosMethod from "./Components/axiosmethod/AxiosMethod";
import './app.css'
import RTQMethod from "./Components/rtqMethod/RTQMethod";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<FetchAPI />} />
          <Route path="/usingAxios" element={<AxiosMethod />} />
          <Route path="/rtq" element={<RTQMethod />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
