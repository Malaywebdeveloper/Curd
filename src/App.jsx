import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import List from "./Component/List";
import Register from "./Component/Register";
import Update from "./Component/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
