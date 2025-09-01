import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import FormProduct from "./components/FormProduct";
import{ BrowserRouter, Route, Routes} from 'react-router-dom';
import FromEditProduct from "./components/FormEditProduct"

function App() {
  //javascript

  return (
    <BrowserRouter>
      <div>
        <h1>CRUD</h1>
        <div></div>

        <Routes>
          <Route path="/" element={<FormProduct />}/>
          <Route path="/edit/:id" element={<FromEditProduct />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
