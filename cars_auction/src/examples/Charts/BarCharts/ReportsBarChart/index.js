import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Divider, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
export default function BarCharts() {
  const [value, setValue] = React.useState(dayjs('2024-08-07'));
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
<Typography sx={{fontSize:"18px", fontWeight:"700", color:"#1F2937"}}>Total Sales</Typography>
<LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
       sx={{
        "& .MuiInputLabel-root.Mui-focused": { color: "#979797" }, //styles the label
        "& .MuiOutlinedInput-root": {
         "&:hover > fieldset": { borderColor: "#C7C8CD" },
         borderRadius: "50px",
         width:"120px"
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
    </Stack>
  <Divider/>
    <BarChart
     grid={{  horizontal: true }}
     bottomAxis={{
      disableLine: true,
      disableTicks: true,
    }}
    leftAxis={{
      disableLine: true,
      disableTicks: true,
    }}
    borderRadius={9}
      series={[
        { data: [35, 44, 24, 34,35, 44, 24, 34,35, 44, 24, 34] },
  
      ]}
      height={250}
      
      xAxis={[{ data: ['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September','October','November', 'December'], scaleType: 'band',categoryGapRatio: 0.8 , colorMap: {
        type: 'piecewise',
        thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
        colors: ['#FE9B0E'],
      },}]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </>
  );
}