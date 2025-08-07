import "./App.css";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import addEmployeeComponent from "./components/AddEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <br />
        <Routes>
          {/* // localhost:5173/ */}
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          {/* // localhost:5173/employee/get-all */}
          <Route
            path="/employee/get-all"
            element={<ListEmployeeComponent />}
          ></Route>

          {/* // localhost:5173/employee/add-employee */}
          <Route
            path="/employee/add-employee"
            element={<AddEmployeeComponent />}
          ></Route>

          {/* // localhost:5173/employee/update-employee/{id} */}
          <Route path="/employee/update/:id" element={<AddEmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
