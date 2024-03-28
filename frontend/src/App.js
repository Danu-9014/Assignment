import ChildBook from "./pages/ChildBook";
import ChildHome from "./pages/ChildHome";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   {/* <Dashboard /> */}
    //   {/* <Login/> */}
    //   {/* <Register/> */}
    //   {/* <ChildHome/> */}
    //   <ChildBook/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" name="home" element={<ChildHome/>}/>
        <Route path="/login" name="login" element={<Login/>}/>
        <Route path="/register" name="register" element={<Register/>}/>
        <Route path="/dashboard" name="dashboard" element={<Dashboard/>}/>
        <Route path="/childbook" name="childbook" element={<ChildBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
