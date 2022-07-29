import { Box } from '@mui/material'

interface Props {
  children: JSX.Element
}

function BoxForm({children}:Props) {
  return (
    <Box className="paddingForm">
      {children}
    </Box>
  )
}

export default BoxForm
