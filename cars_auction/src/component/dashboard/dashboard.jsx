import Grid from "@mui/material/Grid";
import * as React from 'react';
import MDBox from "../../component/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { Cards, DashboardHead } from "../../styled/styled";
import { CardIcon, WaveHand } from "../../assets/svg";
import DataTable from "./Table";
import BarCharts from "../../examples/Charts/BarCharts/ReportsBarChart";
import LineCharts from "../../examples/Charts/LineCharts/ReportsLineChart";
import GradientCharts from "../../examples/Charts/LineCharts/GradientLineChart";
import HorizontalBars from "../../examples/Charts/BarCharts/HorizontalBarChart";
import { DashboardHeader } from "../../utils/Utils";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: 'id', headerName: 'ID', width: 70, hide:true  },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
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

function DashboardComp() {
  const navigate = useNavigate();
  const addInventory = () => {
    navigate("/inventory");
  }
 return (
    <DashboardLayout>
      <DashboardNavbar />
      <DashboardHeader msg={Greeting()} des={'Welcome to Store, Manage your auction with ease.'} btn={'List Cars'} handleClick={addInventory}/>
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
              <DataTable height={400} rowData={rows} colData={columns}/>
              </Cards>
            </Grid>
        
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default DashboardComp;
