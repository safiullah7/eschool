import React from 'react';


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextField } from '@mui/material';

interface Props {
  name: string
  handleChange: any
  label: string
  type: any
  handleShowPassword: any
}

const PasswordInput = ({ name, handleChange, label, type, handleShowPassword }:Props) => (
    <TextField
      sx={{margin: "30px 0 5px 0"}} size="small"
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      type={type}
      InputProps={name === 'password' || 'repeatPassword' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : undefined}
    />

);

export default PasswordInput;