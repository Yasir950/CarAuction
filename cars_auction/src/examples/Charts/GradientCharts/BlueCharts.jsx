
import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Divider, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
class BlueGradientChart extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      value:'2024-08-07',
      options: {
        stroke: {
          width: 0
          },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 0,
            opacityFrom: 1,
            opacityTo: 0.7,
            stops: [0, 100]
          }
        },
       
        dataLabels: {
          enabled: false
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        colors: ['#0C9D61'],
       
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        chart: {
            stacked: true,
          toolbar: {
            show: false,
          },
      }
      },
      series: [
        {
          name: "series-1",
          data: [50, 25, 45, 60, 49, 100, 70, 91]
        }
      ]
    };
  }

  render() {
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
            // value={this.state.value}
            renderInput={(params) => <TextField {...params} helperText={null} />}
          />
          </LocalizationProvider>
      </Stack>
    <Divider/>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height={250}
            />
      </>
    );
  }
}

export default BlueGradientChart;