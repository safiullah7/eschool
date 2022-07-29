import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper'
import Login from '../../components/Form/Login';
import SignUp from '../../components/Form/SignUp';
import BoxForm from '../../components/Form/BoxForm';


const paperStyle={maxWidth: 500, width:"100%",margin:"0px auto 40px auto", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}

function UserForm() {
  const [value, setValue] = React.useState('1');

  const change = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{padding: "30px"}}>
      <Paper elevation={2} style={paperStyle}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={change} aria-label="lab API tabs example" style={{justifyContent: "center"}}>
              <Tab style={{width: "50%", fontWeight: "bold"}} label="Login" value="1" />
              <Tab style={{width: "50%", fontWeight: "bold"}} label="Register" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BoxForm>
              <Login change={change}/>
            </BoxForm>
          </TabPanel>
          <TabPanel value="2">
            <BoxForm>
              <SignUp change={change}/>
            </BoxForm>
          </TabPanel>
        </TabContext>
      </Paper>
    </Box>
  );
}


export default UserForm