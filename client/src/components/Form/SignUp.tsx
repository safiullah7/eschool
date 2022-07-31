import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import PasswordInput from './PasswordInput';
import TitleForm from './TitleForm';
import HelperLink from './HelperLink';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import * as Yup from 'yup';


interface Values {
  email: string;
  password: string;
  repeatPassword: string;
}



function SignUp({change}:any) {
  const { t } = useTranslation(["SignUp"]);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const notify = () => toast("We have sent you an email that will allow you to verify your account! Check your account!", {position: 'top-center'});

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email(t("invalid")).required(t("required")),
    password: Yup.string()
    .min(7, t("tooShort"))
    .max(50, t("tooLong"))
    .required(t("required")),
    repeatPassword: Yup.string()
      .required(t("required"))
      .oneOf([Yup.ref('password'), null], t("Passwords must match"))
  });

  return (
    <>
      <Formik<Values> initialValues={{ email: '', password: '', repeatPassword: ''}} 
        validationSchema={SignUpSchema}
        onSubmit={( values ) => {
        alert(JSON.stringify(values))
      }}
      >
        {({handleSubmit, values, errors, touched, handleChange}) => (
        <form onSubmit={handleSubmit}>
          <TitleForm title={t("title")} />
          <TextField label={t("email")} fullWidth size="small" name="email" onChange={handleChange} value={values.email}/>
          <p className="red">{errors.email && touched.email && errors.email}</p>
          <PasswordInput name="password" label={t("password")} handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={values.password} />
          <p className="red">{errors.password && touched.password && errors.password}</p>
          <PasswordInput name="repeatPassword" label={t("repeatPassword")} handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} value={values.repeatPassword} />
          <p className="red">{errors.repeatPassword && touched.repeatPassword && errors.repeatPassword}</p>
          <p style={{marginTop: "-5px"}}></p>
          <button className='button' onClick={notify} style={{margin: "40px 0 50px 0"}} type="submit">{t("createAccount")}</button>
          <ToastContainer />
          <HelperLink change={change} text={t("haveAccount")} linkText={t("login")} tabNum="1" />
        </form>)}
      </Formik>
    </>
  )
}

export default SignUp