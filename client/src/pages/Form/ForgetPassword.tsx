import BoxForm from '../../components/Form/BoxForm'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import TitleForm from '../../components/Form/TitleForm';
import Wrapper from '../../components/Form/Wrapper';
import { TextField, Typography } from '@mui/material';


interface Values {
  email: string
}

function ForgetPassword() {

  return (
    <Wrapper>
      <BoxForm>
        <Formik<Values> initialValues={{ email: '' }} 
            onSubmit={( values ) => {
            alert(JSON.stringify(values))
          }}>
          {({handleSubmit, handleChange}) => (
          <form onSubmit={handleSubmit} style={{paddingTop: "30px"}}>
            <TitleForm title='New Password' />
            <Typography>We will send you an email that will allow you to recover your password.</Typography>
            <TextField sx={{marginTop: "30px"}} label="Email"  fullWidth required size="small" name="email" onChange={handleChange}/>
            <Link to="/reset"><button type="submit" className='button'>Send Email</button></Link>
          </form>)}
        </Formik>
      </BoxForm>
    </Wrapper>
  )
}

export default ForgetPassword