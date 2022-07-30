import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';
import { Formik } from 'formik';

interface Values {
  email: string;
  password: string;
  repeatPassword: string;
}

function SignUp({change}:any) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Formik<Values> initialValues={{ email: '', password: '', repeatPassword: ''}} 
        onSubmit={( values ) => {
        alert(JSON.stringify(values))
      }}>
        {({handleSubmit, values, handleChange}) => (
        <form onSubmit={handleSubmit}>
          <TitleForm title='Create Your Account' />
          <TextField label="Email"  fullWidth required size="small" name="email" onChange={handleChange} value={values.email}/>
          <PasswordInput name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          <PasswordInput name="repeatPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          <p style={{marginTop: "-5px"}}></p>
          <button className='button' style={{margin: "40px 0 50px 0"}}>Create Account</button>
          <HelperLink change={change} text="Have an account?" linkText="Log in" tabNum="1" />
        </form>)}
      </Formik>
    </>
  )
}

export default SignUp