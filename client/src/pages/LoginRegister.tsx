import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Paper from '@mui/material/Paper'


const paperStyle={maxWidth: 500, width:"100%",margin:"60px auto 40px auto", borderRadius: "25px"}

function LoginRegister() {
  const [value, setValue] = React.useState('1');

  const change = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={25} style={paperStyle}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={change} aria-label="lab API tabs example" style={{justifyContent: "center"}}>
            <Tab style={{width: "50%", fontWeight: "bold"}} label="Login" value="1" />
            <Tab style={{width: "50%", fontWeight: "bold"}} label="Register" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login change={change}/>
        </TabPanel>
        <TabPanel value="3">
          <SignUp change={change}/>
        </TabPanel>
      </TabContext>
    </Paper>
  );
}


export default LoginRegister