import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar"
import {app} from "./FirebaseConfig"
import ChangePassword from "./ChangePassword"
import ForgetPassword from "./ForgetPassword"
import{BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
	 <Routes>
	 <Route path="/"element={<Home/>}/>
	 <Route path="/login"element={<Login/>}/>
	 <Route path="/signup"element={<Signup/>}/>
	 <Route path="/about"element={<About/>}/>
	 <Route path="*"element={<Navigate to="/"/>}/>
	 <Route path="/cp"element={<ChangePassword/>}/>
	 <Route path="/fp"element={<ForgetPassword/>}/>
	 </Routes>
	 </BrowserRouter>
    </div>
  );
}

export default App;
