import React from 'react'
import BoxForm from '../../components/Form/BoxForm'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import TitleForm from '../../components/Form/TitleForm';
import PasswordInput from '../../components/Form/PasswordInput';
import Wrapper from '../../components/Form/Wrapper';
import { Typography } from '@mui/material';
import * as Yup from 'yup';


interface Values {
  password: string;
  repeatPassword: string;
}
const ResetSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

function ResetPassword() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Wrapper>
      <BoxForm>
        <Formik<Values> initialValues={{ password: '', repeatPassword: '' }} 
            validationSchema={ResetSchema}
            onSubmit={( values ) => {
            alert(JSON.stringify(values))
          }}>
          {({handleSubmit, values, errors, touched, handleChange}) => (
          <form onSubmit={handleSubmit} style={{paddingTop: "30px"}}>
            <TitleForm title='Reset Password' />
            <Typography >You can create new password below fields.</Typography>
            <PasswordInput name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={values.password} /> 
            <p className="red">{errors.password && touched.password && errors.password}</p>
            <PasswordInput name="repeatPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={values.repeatPassword} />
            <p className="red">{errors.repeatPassword && touched.repeatPassword && errors.repeatPassword}</p>
            <button type="submit" className='button'>Change Account Password</button>
          </form>)}
        </Formik>
      </BoxForm>
    </Wrapper>
  )
}

export default ResetPassword