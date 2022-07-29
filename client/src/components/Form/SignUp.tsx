import React from 'react'
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';

function SignUp({change}:any) {
  return (
    <form>
      <TitleForm title='Sign In' />
      <TextField label="Email"  fullWidth required size="small"/>
      <PasswordInput passwordLabel='Password' id="password"/>
      <p style={{marginTop: "-5px"}}></p>
      <PasswordInput passwordLabel='Repeat Password' id="repeat-password"/>
      <button className='button' style={{margin: "40px 0 50px 0"}}>Create Account</button>
      <HelperLink change={change} text="Have an account?" linkText="Log in" tabNum="1" />
    </form>
  )
}

export default SignUp