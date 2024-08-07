
import React, { Component } from "react";
import Chart from "react-apexcharts";

class GradientChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        toolbar: {
          show: false, // Show or hide the entire toolbar
          tools: {
            download: false, // Hide the download icon
            selection: false, // Hide the selection icon
            zoom: false, // Hide the zoom icon
            zoomin: false, // Hide the zoom in icon
            zoomout: false, // Hide the zoom out icon
            pan: false, // Hide the pan icon
            reset: false // Hide the reset icon
          }
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
        legend: {
          show: false // This will hide the legend
        },
        markers: {
          size: 0 // This will remove the markers
        },
        annotations: {
          yaxis: [{
            y: 30,
            borderColor: '#999',
            label: {
              show: true,
              text: 'Support',
              style: {
                color: "#fff",
                background: '#00E396'
              }
            }
          }],
          xaxis: [{
            x: new Date('14 Nov 2012').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
              show: true,
              text: 'Rally',
              style: {
                color: "#fff",
                background: '#775DD0'
              }
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
    
        xaxis: {
          type: 'datetime',
          min: new Date('01 Mar 2012').getTime(),
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          }
        },
        colors: ['#005AFF'],
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height={400}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GradientChart;