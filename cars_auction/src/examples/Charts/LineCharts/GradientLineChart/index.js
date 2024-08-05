import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack, TextField, Typography } from '@mui/material';
export default function GradientCharts() {
  const [value, setValue] = React.useState(dayjs('2024-08-07'));
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
<Typography sx={{fontSize:"18px", fontWeight:"700", color:"#1F2937"}}>Company Profit</Typography>
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
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      height={250}
    />
    </>
  );
}
