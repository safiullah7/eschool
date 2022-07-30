import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';
import { Formik } from 'formik';

interface Values {
  email: string;
  password: string;
}

function Login({change}:any) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Formik<Values> initialValues={{ email: '', password: ''}} 
          onSubmit={( values ) => {
          alert(JSON.stringify(values))
        }}>
        {({handleSubmit, values, handleChange}) => (
        <form onSubmit={handleSubmit}>
          <TitleForm title='Sign In' />
          <TextField label="Email"  fullWidth required size="small" name="email" onChange={handleChange} value={values.email}/>
          <PasswordInput name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          <Link to="/forget"><p style={{textAlign: "right", color: "#7A7A7A", fontSize: "14px"}}>Forgot password ?</p></Link>
          <Link to="/"><button type="submit" className='button'>Log In</button></Link>
          <HelperLink change={change} text="Don't have an account?" linkText="Sign up" tabNum="2" />
        </form>)}
      </Formik>
    </>
    
  )
}

export default Login