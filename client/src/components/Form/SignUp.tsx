import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';
import { Formik, FormikErrors } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';


interface Values {
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .min(7, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


function SignUp({change}:any) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const notify = () => toast("We have sent you an email that will allow you to verify your account! Check your account!", {position: 'top-center'});

  return (
    <>
      <Formik initialValues={{ email: '', password: '', repeatPassword: ''}} 
        validationSchema={SignUpSchema}
        onSubmit={( values ) => {
        alert(JSON.stringify(values))
      }}
      >
        {({handleSubmit, values, errors, touched, handleChange}) => (
        <form onSubmit={handleSubmit}>
          <TitleForm title='Create Your Account' />
          <TextField label="Email" fullWidth size="small" name="email" onChange={handleChange} value={values.email}/>
          <p className="red">{errors.email && touched.email && errors.email}</p>
          <PasswordInput name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={values.password} />
          <p className="red">{errors.password && touched.password && errors.password}</p>
          <PasswordInput name="repeatPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={values.repeatPassword} />
          <p className="red">{errors.repeatPassword && touched.repeatPassword && errors.repeatPassword}</p>
          <p style={{marginTop: "-5px"}}></p>
          <button className='button' style={{margin: "40px 0 50px 0"}} type="submit">Create Account</button>
          <ToastContainer />
          <HelperLink change={change} text="Have an account?" linkText="Log in" tabNum="1" />
        </form>)}
      </Formik>
    </>
  )
}

export default SignUp