import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface Values {
  email: string;
  password: string;
}
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .min(7, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
});

function Login({change}:any) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Formik<Values> initialValues={{ email: '', password: ''}} 
        validationSchema={LoginSchema}
          onSubmit={( values ) => {
          alert(JSON.stringify(values))
        }}>
        {({handleSubmit, values, errors, touched, handleChange}) => (
        <form onSubmit={handleSubmit}>
          <TitleForm title='Sign In' />
          <TextField label="Email" fullWidth size="small" name="email" onChange={handleChange} value={values.email} />
          <p className="red">{errors.email && touched.email && errors.email}</p>
          <PasswordInput name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={values.password}/>
          <p className="red">{errors.password && touched.password && errors.password}</p>
          <Link to="/forget"><p style={{textAlign: "right", color: "#7A7A7A", fontSize: "14px", paddingTop: "5px"}}>Forgot password ?</p></Link>
          <button type="submit" className='button'>Log In</button>
          <HelperLink change={change} text="Don't have an account?" linkText="Sign up" tabNum="2" />
        </form>)}
      </Formik>
    </>
    
  )
}

export default Login