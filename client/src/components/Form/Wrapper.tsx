import React from 'react'
import { Box, Paper } from '@mui/material'

interface Props {
  children: JSX.Element
}

const paperStyle={maxWidth: 500, width:"100%",margin:"0px auto 40px auto", borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}


function Wrapper({children}:Props) {
  return (
    <Box sx={{padding: "30px"}}>
      <Paper elevation={2} style={paperStyle}>
        {children}
      </Paper>
    </Box>
  )
}

export default Wrapper


