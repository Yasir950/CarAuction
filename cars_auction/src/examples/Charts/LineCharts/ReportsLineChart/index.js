import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Divider, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function LineCharts() {
  const [value, setValue] = React.useState(dayjs('2024-08-07'));
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
<Typography sx={{fontSize:"18px", fontWeight:"700", color:"#1F2937"}}>Total Revenue</Typography>
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
    <LineChart
       xAxis={[{ data: ['January', 'February', 'March', 'April','May', 'June', 'July', 'August','September','October','November', 'December'], scaleType: 'band',categoryGapRatio: 0.8 ,}]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
           color:"#005AFF",
           showMark:false
        },
      ]}
      height={250}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{  horizontal: true }}
      
      bottomAxis={{
       disableLine: true,
       disableTicks: true,
     }}
     leftAxis={{
       disableLine: true,
       disableTicks: true,
     }}
    />
    </>
  );
}
