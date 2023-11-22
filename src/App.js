import './App.css';
import { Route,Routes} from 'react-router-dom';
import Appbar from './EventManagement/Appbar';
import Home from './EventManagement/Home';
import Login from './EventManagement/Login';
import SignUp from './EventManagement/SignUp';
import Footer from './EventManagement/Footer';
function App() {
  return (
    <>
    <Appbar/>
    <div className='container'>
       <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes> 
     <Footer></Footer>
    </div>
    </>
  );
}

export default App;