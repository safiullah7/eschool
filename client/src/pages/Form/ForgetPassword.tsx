import BoxForm from '../../components/Form/BoxForm'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import TitleForm from '../../components/Form/TitleForm';
import Wrapper from '../../components/Form/Wrapper';
import { TextField, Typography } from '@mui/material';
import * as Yup from 'yup';


interface Values {
  email: string
}

const ForgetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

function ForgetPassword() {

  return (
    <Wrapper>
      <BoxForm>
        <Formik<Values> initialValues={{ email: '' }} 
            validationSchema={ForgetSchema}
            onSubmit={( values ) => {
            alert(JSON.stringify(values))
          }}>
          {({handleSubmit, errors, touched, values, handleChange}) => (
          <form onSubmit={handleSubmit} style={{paddingTop: "30px"}}>
            <TitleForm title='New Password' />
            <Typography>We will send you an email that will allow you to recover your password.</Typography>
            <TextField sx={{marginTop: "30px"}} label="Email"  fullWidth size="small" name="email" onChange={handleChange} value={values.email} />
            <p className="red">{errors.email && touched.email && errors.email}</p>
            <button type="submit" className='button'>Send Email</button>
          </form>)}
        </Formik>
      </BoxForm>
    </Wrapper>
  )
}

export default ForgetPassword