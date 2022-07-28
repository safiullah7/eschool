import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';


function Login({change}:any) {

  return (
    <div style={{padding: "20px 50px"}}>
      <h3 style={{fontWeight: "bold", fontSize: "26px", textAlign: "center", marginBottom: "40px"}}>Sign In</h3>
      <TextField label="Email"  fullWidth required size="small"/>
      <PasswordInput passwordLabel='Password'/>
      <Link to="/reset"><p style={{textAlign: "right", color: "#7A7A7A", fontSize: "14px"}}>Forgot password ?</p></Link>
      <button className='button' style={{margin: "40px 0 50px 0"}}>Log In</button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <p>Don't have an account? </p>
        <Link to="#" onClick={()=>change("event", "3")} style={{color: '#01D986', fontWeight: "500", marginLeft: "5px", cursor: "pointer"}}> Sign up</Link>
      </div>
    </div>
  )
}

export default Login