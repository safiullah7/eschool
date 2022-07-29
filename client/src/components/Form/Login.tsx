import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';


function Login({change}:any) {

  return (
    <form>
      <TitleForm title='Sign In' />
      <TextField label="Email"  fullWidth required size="small"/>
      <PasswordInput passwordLabel='Password' id="password"/>
      <Link to="/reset"><p style={{textAlign: "right", color: "#7A7A7A", fontSize: "14px"}}>Forgot password ?</p></Link>
      <button type="submit" className='button'>Log In</button>
      <HelperLink change={change} text="Don't have an account?" linkText="Sign up" tabNum="2" />
    </form>
  )
}

export default Login