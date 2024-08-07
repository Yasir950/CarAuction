import React from 'react'
import { LoginContainer, MyBtn } from '../../styled/styled';
import {  Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import { Email, Heading, Logo , Pass} from '../../assets/svg';
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '../misc/Dialogue';
import { toast } from 'react-toastify';
function LoginComponent() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [state, setState] = React.useState({
        email: '',
        password: '',
        alert:false
    });
    const handleAlert = (name) => {
      setState((prev) => ({ ...prev, [name]: !prev[name] }));
    };
const handleChange=(e)=>{
    // let [name, value] = e.target
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}
const handleClick=(e)=>{
    e.preventDefault();
    // Navigate to the dashboard page after successful login.
    if(state.email === 'test@gmail.com' && state.password === 'test'){
      localStorage.setItem('auth',true);
      localStorage.setItem('user','Ali');
      localStorage.setItem('email',state.email);
        navigate("/dashboard");  // Replace "/dashboard" with the actual route for your dashboard page. 
        toast.success('Login successfully')
    }else{
      toast.error('Wrong Credentials. Please try again')
    }
    // Clear the form fields
    setState({email: '', password: ''});  // Clear the form fields
}
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const navigate = useNavigate();

  return (
    <LoginContainer sx={{display:'flex',flexDirection:'column', justifyContent:'center',height:'100vh'}}>
        <Logo/>
        <Heading/>
        <FormGroup sx={{width:{sm:'100%',md:'50%',gap:12} }}>
      <FormControl>
  <FormLabel htmlFor="my-input">Email</FormLabel>
  <OutlinedInput  startAdornment={<InputAdornment position="end"><Email/></InputAdornment>} value={state.email} onChange={handleChange}  id="my-input" name="email" placeholder='Enter user email'  rows={1} size='small' sx={{borderRadius:"50px",width:'100%'}}/>
</FormControl>
<FormControl>
  <FormLabel htmlFor="my-input">Password</FormLabel>
  <OutlinedInput   type={showPassword ? 'text' : 'password'} value={state.password} name='password' onChange={handleChange} startAdornment={<InputAdornment position="end"><Pass/></InputAdornment>}  endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            } id="my-input" placeholder='Enter password'  rows={1} size='small' sx={{borderRadius:"50px",width:'100%'}}/>
</FormControl>
<FormControl sx={{display:'flex',justifyContent:'space-between',flexDirection:'row', alignItems:'center'}}>
<FormControlLabel control={<Checkbox defaultChecked />} label="Remember me"   />
<Button variant="text" sx={{textTransform:'capitalize'}} onClick={()=>handleAlert('alert')}>Forgot Password?</Button>
</FormControl>
<MyBtn  onClick={handleClick}>Sign in</MyBtn>
        </FormGroup>
        <Alert
        open={state.alert}
        close={()=>handleAlert('alert')}
        title={
          <div>
            <Typography sx={{fontWeight:700}}>Forgot Password</Typography>
          </div>
        }
        content={
          <FormGroup >
 <FormControl sx={{mb:1}}>
  <FormLabel htmlFor="my-input">Old Password</FormLabel>
  <OutlinedInput   type={showPassword ? 'text' : 'password'} value={state.password} name='password' onChange={handleChange} startAdornment={<InputAdornment position="end"><Pass/></InputAdornment>}  endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            } id="my-input" placeholder='Enter old password'  rows={1} size='small' sx={{borderRadius:"50px",width:'100%'}}/>
</FormControl>
<FormControl sx={{mb:1}}>
  <FormLabel htmlFor="my-input">New Password</FormLabel>
  <OutlinedInput   type={showPassword ? 'text' : 'password'} value={state.password} name='password' onChange={handleChange} startAdornment={<InputAdornment position="end"><Pass/></InputAdornment>}  endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            } id="my-input" placeholder='Enter new password'  rows={1} size='small' sx={{borderRadius:"50px",width:'100%'}}/>
</FormControl>
<FormControl>
  <FormLabel htmlFor="my-input">Confirm Password</FormLabel>
  <OutlinedInput   type={showPassword ? 'text' : 'password'} value={state.password} name='password' onChange={handleChange} startAdornment={<InputAdornment position="end"><Pass/></InputAdornment>}  endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            } id="my-input" placeholder='Confirm password'  rows={1} size='small' sx={{borderRadius:"50px",width:'100%'}}/>
</FormControl>
            </FormGroup>
        }
      />
    </LoginContainer >
  )
}

export default LoginComponent
