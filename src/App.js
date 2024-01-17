
import './App.css';

import CompanySignup from './Pages/CompanySignup';
import Home from './Pages/Home';
import JobDetail from './Pages/JobDetail';
import Login from './Pages/Login';
import Signupdivder from './Pages/Signupdivder';
import UserSignup from './Pages/UserSignup';
import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App ">
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/Signupdivder' element={<Signupdivder/>} />
       <Route path='/companysignup' element={<CompanySignup/>} />
       <Route path='/usersignup' element={<UserSignup/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/Jobdetail' element={<JobDetail/>} />
       </Routes>
    </div>
  );
}

export default App;
