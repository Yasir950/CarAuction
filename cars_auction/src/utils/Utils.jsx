import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { DashboardHead, MyBtn } from "../styled/styled";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const DashboardHeader=({msg,des, btn, handleClick})=>{
    const [value, setValue] = React.useState(dayjs('2024-08-07'));
    return(
        <Box sx={{display:"flex", flexDirection:'row', justifyContent:"space-between", alignItems:'center',mt:2}}>
        <Stack>
      <DashboardHead>
       {msg}
       </DashboardHead>
      <Typography sx={{
fontFamily: 'Urbanist',

      }}>{des}</Typography>
        </Stack>
        <Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker
       sx={{
        "& .MuiInputLabel-root.Mui-focused": { color: "#979797" }, //styles the label
        "& .MuiOutlinedInput-root": {
         "&:hover > fieldset": { borderColor: "#C7C8CD" },
         borderRadius: "50px",
         width:"120px",
         margin:1
        },
       }}
          views={['year', 'month']}
          minDate={dayjs('2012-03-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        </LocalizationProvider>
        {btn && 
        <MyBtn onClick={handleClick} variant="contained" sx={{margin:1}}><AddCircleIcon/>{btn}</MyBtn>
        }
        </Grid>
      </Box>
    )
}