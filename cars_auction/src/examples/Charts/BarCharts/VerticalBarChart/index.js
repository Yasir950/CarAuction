import { BarChart } from "@mui/x-charts";
import * as React from 'react';
import { Divider, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function ChartPerBarColoring() {
  const [value, setValue] = React.useState(dayjs('2024-08-07'));
  const tableData = {
    1: { name: "Total", value: 10 , color:"#F15A29"},
    2: { name: "Sold", value: 11 , color:"#0C9D61"},
    3: { name: "Remain", value: 13, color:"#EB6F70" },
    4: { name: "Auction", value: 12 , color:"#6BC497"},
    5: { name: "Next Auc", value: 9 , color:"#47B881"},
    6: { name: "Cancel", value: 10, color:"#EC2D30" },
    7: { name: "Booking", value: 7 , color:"#3B82F6"},
  }
  const namesArray = Object.values(tableData).map((item) => item.name);
  const valuesArray = Object.values(tableData).map((item) => item.value);
  const colorsArray = Object.values(tableData).map((item) => item.color);
  const barColors = colorsArray.map((val) => {
   return val;
  });

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
          height={250}
          series={[{ data: valuesArray, id: "cId" }]}
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
          xAxis={[
            {
              data: namesArray,
              categoryGapRatio: 0.8 ,
              scaleType: "band",
              colorMap: {
                type: "ordinal",
                values: namesArray,
                colors: barColors,
              },
            },
          ]}
        />
    </>
  );
}
