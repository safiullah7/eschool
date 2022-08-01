import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from '../../components/Form/Login';
import SignUp from '../../components/Form/SignUp';
import BoxForm from '../../components/Form/BoxForm';
import Wrapper from '../../components/Form/Wrapper';
import { useTranslation } from "react-i18next";



function UserLogin() {
  const { t } = useTranslation(["Login"]);
  const [value, setValue] = React.useState('1');
  const change = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={change} aria-label="lab API tabs example" style={{justifyContent: "center"}}>
            <Tab style={{width: "50%", fontWeight: "bold"}} label={t("tabTitle")} value="1" />
            <Tab style={{width: "50%", fontWeight: "bold"}} label={t("tabRegister")} value="2" />
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
    </Wrapper>
  );
}


export default UserLogin
