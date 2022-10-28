import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/actions/authActions";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';




export default function LoginForm() {

    

    const [user, setUser] = useState({

        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const errors = useSelector((state) => state.authReducer.errors);
   /* console.log(typeof errors);*/ 
    /*const success = useSelector((state) => state.authReducer.successMessage );*/
    /*console.log(errors);
    console.log(success);*/

    return (
<>

<div className="app">
<Form>
<h1>LogIn</h1>   

  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className="in" type="email" placeholder="E-mail" name="email"  onChange={handleChange} />
        
      </Form.Group>
  

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className="in" type="password" placeholder="Password" name="password" onChange={handleChange} />
      </Form.Group>
      {errors}

     
      <p>
    Forgot your password ?
  </p>   
  <br/>
  <Button className="register"> Register </Button>
      <Button variant="primary" type="submit" onClick={() => {
               dispatch(login( user, navigate, dispatch));
           }}>
        Sign In
      </Button>
    </Form>
    </div>
    </>
    );
    
}


