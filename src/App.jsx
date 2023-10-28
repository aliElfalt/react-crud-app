import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import AddCustomer from "./components/AddCustomer.jsx"
import VeiwCustomer from './components/VeiwCustomer.jsx';
import EditCustomer from './components/EditCustomer.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="d-flex flex-nowrap" style={{minHeight: "100vh"}}>
      <Sidebar />
      <div className="b-example-divider b-example-vr"></div>
      <div className="w-100 mb-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/editCustomer/:customerId" element={<EditCustomer />} />
          <Route path="/veiwCustomer/:customerId" element={<VeiwCustomer />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
