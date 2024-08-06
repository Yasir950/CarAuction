
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../../../component/MDBox";
import MDTypography from "../../../../component/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "../../../../examples/Timeline/TimelineItem";
import DashboardLayout from "../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../examples/Navbars/DashboardNavbar";
import { ListIcon, WaveHand } from "../../../../assets/svg";
import { DashboardHeader } from "../../../../utils/Utils";
import { Cards } from "../../../../styled/styled";
import { Divider, Stack } from "@mui/material";

function OrdersOverview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DashboardHeader msg={'User Activities'} des={'Here are the list of user activities listed.'}/>
    <Cards sx={{ height: "100%", mt:3 }}>
      <MDBox >
        <Stack direction={'row'} spacing={1}>
        <ListIcon/>
        <MDTypography variant="h6" fontWeight="medium">
          Activity Timeline
        </MDTypography>
        </Stack>
       <Divider/>
      </MDBox>
      <MDBox >
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Cards>
    </DashboardLayout>
  );
}

export default OrdersOverview;
