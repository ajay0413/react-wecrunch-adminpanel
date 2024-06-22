import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Component/LoginPage";
import RegisterPage from "./Component/RegisterPage";
import Sidebar from "./Component/common/Sidebar";
import AddFoodComp from "./Component/common/FoodComp";
import AddBillComp from "./Component/common/AddBillComp";
import DashBoard from "./Component/DashBoard";

function App() {

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />

        {/* Protected routes with sidebar */}
        <>
        <Route path="/home/*" element={<ProtectedRoutes />} />
        <Route path="/add-food" element={<AddFoodComp />} />
        <Route path="/add-bill" element={<AddBillComp />} />
        </>
      </Routes>
    </Router>
  );
}

const ProtectedRoutes = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default App;
