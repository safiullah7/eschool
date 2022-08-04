import BoxForm from '../../components/Form/BoxForm'
import { Formik } from 'formik';
import TitleForm from '../../components/Form/TitleForm';
import Wrapper from '../../components/Form/Wrapper';
import { TextField, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import * as Yup from 'yup';


interface Values {
  email: string
}


function ForgetPassword() {
  const { t } = useTranslation(["Reset"]);

  const ForgetSchema = Yup.object().shape({
    email: Yup.string().email(t("invalid")).required(t("required")),
  });

  return (
      <BoxForm>
        <Formik<Values> initialValues={{ email: '' }} 
            validationSchema={ForgetSchema}
            onSubmit={( values ) => {
            alert(JSON.stringify(values))
          }}>
          {({handleSubmit, errors, touched, values, handleChange}) => (
          <form onSubmit={handleSubmit} style={{paddingTop: "30px"}}>
            <TitleForm title={t("forgetTitle")} />
            <Typography>{t("forgetSubTitle")}</Typography>
            <TextField sx={{marginTop: "30px"}} label={t("email")}  fullWidth size="small" name="email" onChange={handleChange} value={values.email} />
            <p className="red">{errors.email && touched.email && errors.email}</p>
            <button type="submit" className='button'>{t("sendEmail")}</button>
          </form>)}
        </Formik>
      </BoxForm>
  )
}

export default ForgetPassword