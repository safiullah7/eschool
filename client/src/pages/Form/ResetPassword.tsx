import React from 'react'
import BoxForm from '../../components/Form/BoxForm'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import TitleForm from '../../components/Form/TitleForm';
import PasswordInput from '../../components/Form/PasswordInput';
import Wrapper from '../../components/Form/Wrapper';
import { Typography } from '@mui/material';


interface Values {
  password: string;
  repeatPassword: string;
}

function ResetPassword() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Wrapper>
      <BoxForm>
        <Formik<Values> initialValues={{ password: '', repeatPassword: '' }} 
            onSubmit={( values ) => {
            alert(JSON.stringify(values))
          }}>
          {({handleSubmit, handleChange}) => (
          <form onSubmit={handleSubmit} style={{paddingTop: "30px"}}>
            <TitleForm title='Reset Password' />
            <Typography >You can create new password below fields.</Typography>
            <PasswordInput name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <PasswordInput name="repeatPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <Link to="/login"><button type="submit" className='button'>Change Account Password</button></Link>
          </form>)}
        </Formik>
      </BoxForm>
    </Wrapper>
  )
}

export default ResetPassword