import React from 'react'
import CircularProgress, {
    circularProgressClasses,
  } from '@mui/material/CircularProgress';
import { MyContainer } from '../../styled/styled';
import { Typography } from '@mui/material';
function UnderConstructionComp() {
  return (
    <MyContainer sx={{display:'flex',flexDirection:'column', justifyContent:'center',height:'100vh'}}>
        <Typography variant='h6'>Website Under Construction</Typography>
        <Typography >We apologize for the inconvenience</Typography>
  <CircularProgress
    variant="indeterminate"
    disableShrink
    sx={{
      color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
      animationDuration: '550ms',
      left: 0,
      [`& .${circularProgressClasses.circle}`]: {
        strokeLinecap: 'round',
      },
    }}
    size={40}
    thickness={4}
  />
    </MyContainer>
  
  )
}

export default UnderConstructionComp
