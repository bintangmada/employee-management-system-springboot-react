import "./App.css";
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

          {/* // localhost:8033/api/employee/get-all */}
          <Route
            path="/api/employee/get-all"
            element={<ListEmployeeComponent />}
          ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
