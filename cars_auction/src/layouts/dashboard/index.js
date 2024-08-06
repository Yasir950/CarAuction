/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import * as React from 'react';
// Material Dashboard 2 React components
import MDBox from "../../component/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { Cards, DashboardHead } from "../../styled/styled";
import { CardIcon, WaveHand } from "../../assets/svg";
import DataTable from "./data/Table";
import BarCharts from "../../examples/Charts/BarCharts/ReportsBarChart";
import LineCharts from "../../examples/Charts/LineCharts/ReportsLineChart";
import GradientCharts from "../../examples/Charts/LineCharts/GradientLineChart";
import HorizontalBars from "../../examples/Charts/BarCharts/HorizontalBarChart";
import { DashboardHeader } from "../../utils/Utils";

const userName = localStorage.getItem('user');

const Greeting = () => (
  <DashboardHead>
    Good Morning, {userName} <WaveHand />
  </DashboardHead>
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

function Dashboard() {
 return (
    <DashboardLayout>
      <DashboardNavbar />
      <DashboardHeader msg={Greeting()} des={'Welcome to Store, Manage your auction with ease.'}/>
      <MDBox py={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<CardIcon/>}
                title="Total Arrived Car"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<CardIcon/>}
                title="Available Cars"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<CardIcon/>}
                title="Coming Auction"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<CardIcon/>}
                title="Next Coming"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<CardIcon/>}
                title="Cancelled Cars"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>      
        <MDBox mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} >
              <Cards>
            <LineCharts />
              </Cards>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={1} sx={{mt:3}}>
        <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={<CardIcon/>}
                title="Total Arrived Car"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<CardIcon/>}
                title="Available Cars"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<CardIcon/>}
                title="Coming Auction"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon={<CardIcon/>}
                title="Next Coming"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                sx={{
    backgroundColor:'#FEEEEA' ,
                }}
                icon={<CardIcon/>}
                title="Cancelled Cars"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} >
              <Cards>
              <BarCharts/>
              </Cards>
            </Grid>
            <Grid item xs={12} md={6} >
              <Cards>
            <GradientCharts />
              </Cards>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Cards>
              <BarCharts/>
              </Cards>
            </Grid>
            <Grid item xs={12} md={6}>
            <Cards>
            <HorizontalBars />
              </Cards>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} >
            <Cards>
            <GradientCharts />
              </Cards>
            </Grid>
            <Grid item xs={12} md={6} >
            <Cards>
              <BarCharts/>
              </Cards>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Cards>
              <DataTable />
              </Cards>
            </Grid>
        
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
