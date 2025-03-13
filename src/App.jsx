import React from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DataTable from "./components/Datatable";
import SortPage from "./pages/Sortpage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<DataTable />} />
          <Route path="/sort" element={<SortPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;


