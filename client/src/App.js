import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
