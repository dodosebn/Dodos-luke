import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/layout";
import Displays from "./components/displays";
import Dashboard from "./components/dashboard";
import Products from "./components/products";
import Notfound from "./components/notfound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Products />} />
        <Route path="products" element={<Displays />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound  />} />
      </Route>
    </Routes>
  );
}

export default App;
