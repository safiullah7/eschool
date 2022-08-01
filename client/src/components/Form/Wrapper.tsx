import React from 'react'
import { Box, Paper } from '@mui/material'
import LanguageToggler from '../Localization/LanguageToggler'

interface Props {
  children: JSX.Element
}

const paperStyle={maxWidth: 500, width:"100%",margin:"0px auto 40px auto", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}


function Wrapper({children}:Props) {
  return (
    <Box sx={{padding: "70px 30px 50px 30px"}}>
      <Box sx={{position: "absolute", top: "0", left: "0"}}>
        <LanguageToggler />
      </Box>
      <Paper elevation={2} style={paperStyle}>
        {children}
      </Paper>
    </Box>
  )
}

export default Wrapper


