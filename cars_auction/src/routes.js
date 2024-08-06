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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "./layouts/dashboard";
import { AuctionsIcon, BiddingIcon, CarIcon, CustomersIcon, DashboardIcon, FinanceIcon, GateIcon, InventoryIcon, InvestorsIcon, LogoutIcon, OfficeIcon, ReportsIcon, SettingIcon, UserActIcon, UserMgmIcon } from "./assets/svg";
import UnderConstructionComp from "./component/misc/UnderConstruction";
import UserManagementComp from "./component/user-management";
import DashboardComp from "./component/dashboard/dashboard";
import OrdersOverviewComp from "./component/user-activities";

const routes = [
  
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon/>,
    route: "/dashboard",
    component: <DashboardComp />,
  },
  {
    type: "collapse",
    name: "User Activities",
    key: "user-activities",
    icon: <UserMgmIcon/>,
    route: "/user-activities",
    component: <OrdersOverviewComp />,
  },
  {
    type: "collapse",
    name: "User Management",
    key: "user-management",
    icon: <UserActIcon/>,
    route: "/user-management",
    component: <UserManagementComp />,
  },
  {
    type: "collapse",
    name: "Investors",
    key: "investors",
    icon: <InvestorsIcon/>,
    route: "/investors",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <CustomersIcon/>,
    route: "/customers",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    icon: <InventoryIcon/>,
    route: "/inventory",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Auctions",
    key: "auctions",
    icon: <AuctionsIcon/>,
    route: "/auctions",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Biddings",
    key: "biddings",
    icon: <BiddingIcon/>,
    route: "/biddings",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    icon: <FinanceIcon/>,
    route: "/accounts",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Gate Pass",
    key: "gate-pass",
    icon: <GateIcon/>,
    route: "/gate-pass",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <ReportsIcon/>,
    route: "/reports",
    component: <UnderConstructionComp />,
  },

  {
    type: "collapse",
    name: "Car Expenses",
    key: "car-expenses",
    icon: <CarIcon/>,
    route: "/car-expenses",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Office Expenses",
    key: "office-expenses",
    icon: <OfficeIcon/>,
    route: "/office-expenses",
    component: <UnderConstructionComp />,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <SettingIcon/>,
    route: "/settings",
    component: <UnderConstructionComp />,
  },
  {
    type: "logout",
    name: "SignOut",
    key: "signout",
    icon: <LogoutIcon/>,
    route: "/",
    component: <UnderConstructionComp />,
  },
];

export default routes;
