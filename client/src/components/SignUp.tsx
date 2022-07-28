import React from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';

function SignUp({change}:any) {
  return (
    <div style={{padding: "20px 50px"}}>
      <h3 style={{fontWeight: "bold", fontSize: "26px", textAlign: "center", marginBottom: "40px"}}>Create Your Account</h3>
      <TextField label="Email"  fullWidth required size="small"/>
      <PasswordInput passwordLabel='Password'/>
      <p style={{marginTop: "-5px"}}></p>
      <PasswordInput passwordLabel='Repeat Password'/>
      <button className='button' style={{margin: "40px 0 50px 0"}}>Create Account</button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <p>Have an account?</p>
        <Link to="#" onClick={()=>change("event", "1")} style={{color: '#01D986', fontWeight: "500", marginLeft: "5px", cursor: "pointer"}}> Log in</Link>
      </div>
    </div>
  )
}

export default SignUp