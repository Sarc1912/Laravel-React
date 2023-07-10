import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import Departments from './Views/Departments/Index'
import CreateDepartment from './Views/Departments/Create'
import EditDepartment from './Views/Departments/Edit'
import Employees from './Views/Employees/Index';
import Graphic from './Views/Employees/Graphic';
import Login from './Views/Login';
import Register from './Views/Register';
import ProtectedRoutes from './Components/ProtectedRoutes';


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Departments />} />
          <Route path="/create" element={<CreateDepartment />} />
          <Route path="/edit/:id" element={<EditDepartment />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/graphic" element={<Graphic />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
