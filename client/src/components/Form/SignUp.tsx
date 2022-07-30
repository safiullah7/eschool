import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Values {
  email: string;
  password: string;
  repeatPassword: string;
}

function SignUp({change}:any) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const notify = () => toast("We will send you an email that will allow you to verify your account! Check your account", {position: 'top-center'});

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
          <Link to="#"><button onClick={notify} className='button' style={{margin: "40px 0 50px 0"}}>Create Account</button></Link>
          <ToastContainer />
          <HelperLink change={change} text="Have an account?" linkText="Log in" tabNum="1" />
        </form>)}
      </Formik>
    </>
  )
}

export default SignUp