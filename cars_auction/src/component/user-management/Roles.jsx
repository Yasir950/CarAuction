import { Grid } from "@mui/material";
import MDBox from "../MDBox";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { CardIcon } from "../../assets/svg";

function RolesComp() {
  return (
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
  );
}

export default RolesComp;
