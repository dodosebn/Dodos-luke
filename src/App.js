import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Products from "./components/products";
import Dashboard from "./components/dashboard";
import HomePage from "./components/home";
import Notfound from "./components/notfound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={< HomePage  />} />
        <Route path="products" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound  />} />
      </Route>
    </Routes>
  );
}

export default App;
