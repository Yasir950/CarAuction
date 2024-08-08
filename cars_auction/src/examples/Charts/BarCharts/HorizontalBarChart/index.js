import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Divider, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material';
export const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: '1990',
    color:"#F9BDA9"
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: '1995',
    color:"#99BDFF"
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: '2000',
    color:"#99BDFF"

  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: '2005',
    color:"#F9BDA9"

  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: '2010',
    color:"#99BDFF"

  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: '2015',
    color:"#F9BDA9"

  },
];
const barColors = dataset.map((val) => {
  return val.color;
 });
export default function HorizontalBars() {
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
<Typography sx={{fontSize:"18px", fontWeight:"700", color:"#1F2937"}}>Cars Used</Typography>
<FormControl  sx={{mb:1, width:"15%"}}>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"  
    placeholder="Select user role"
    rows={1} size='small' sx={{borderRadius:"50px",width:'100%', height:"35px"}}
  >
    <MenuItem value={10}>Ali</MenuItem>
    <MenuItem value={20}>Hassan</MenuItem>
    <MenuItem value={30}>Hussain</MenuItem>
  </Select>
</FormControl>
    </Stack>
  <Divider/>
    <BarChart
    height={270}
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
      dataset={dataset}
      slotProps={{ legend: { hidden: false } }}
      yAxis={[{ scaleType: 'band', dataKey: 'month' ,  colorMap: {
        type: "ordinal",
        colors: barColors,
      },}]}
      series={[{ data: [35, 44, 24, 34,35, 44, 24, 34,35, 44, 24, 34] }]}
      layout="horizontal"
    />
    </>
  );
}
