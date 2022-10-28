
import './App.css'
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';
import NavBar from './Components/Navbar';



/*import Navbar from './Components/Navbar';*/

import Profile from "./Pages/Profile";

/*import 'bootstrap/dist/css/bootstrap.min.css';*/


function App() {
  return(
     <>
      
        <Router>
          <header>
        <NavBar/>
        </header>
        <body>
          <Routes>
            home
            <Route path='/login' element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterForm />} />


            <Route 
              path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }/>
              
  

          </Routes>
          </body>
          <footer>
          
          </footer>
        </Router>
    
     </>

 );




  
}

export default App;
