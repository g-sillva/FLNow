import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import Service from "./pages/Service/Service";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";
import Orders from "./pages/Orders/Orders";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import Pay from "./pages/Pay/Pay";
import Success from "./pages/Checkout/Success/Success";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Services />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:id" element={<Message />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/pay/:id" element={<Pay />} />
          <Route path="/checkout/success" element={<Success />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
