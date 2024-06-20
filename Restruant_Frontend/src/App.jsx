import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Chefs from "./pages/Chefs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BookEvent from "./pages/BookEvent";
import BookTable from "./pages/BookTable";
import Order from "./pages/Order";
import OrderForm from "./Components/OrderForm";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
export default function App() {
  return (
    <div className="root">

    <BrowserRouter>
    <Nav></Nav>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booktable" element={<BookTable/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/bookevent" element={<BookEvent/>}/>
          <Route path="/orderform" element={<OrderForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
