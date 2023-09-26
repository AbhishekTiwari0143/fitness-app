import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";

import Home from "./pages/Home";
import ExcerciseDetails from "./pages/ExcerciseDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExcerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
