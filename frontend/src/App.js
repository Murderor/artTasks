import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Navibar from "./Components/NaviBar";
import addEmployee from "./pages/addEmployee";

function App() {
  return (
    <BrowserRouter>
        <Navibar/>
        <Routes>
            <Route path='/home' Component={Home}></Route>
            <Route path='/' Component={Home}></Route>
            <Route path='/employee' Component={Employees}></Route>
            <Route path='employee/add' Component={addEmployee}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
