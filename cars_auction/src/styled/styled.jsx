import { Button, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';


export const MyContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
   
   });
   export const MyInput = styled(TextField)({
    width:  '540px',
   });   
   export const MyBtn = styled(Button)({
    width: '100%',
borderRadius:'50px',
backgroundColor:'#F15A29',
"&:hover": {
    backgroundColor: '#e34c1b'
  }
   });
   export const LoginContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    padding: '32px',
    borderRadius: '32px',
    boxShadow: '2px 4px 6px 0px #4B55630F'

    
   });