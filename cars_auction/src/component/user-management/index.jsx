import { Button, Divider, FormControl, FormGroup, FormHelperText, FormLabel, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from "@mui/material";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import { DashboardHeader } from "../../utils/Utils";
import {  Btn, Cards, Label, MyBtn, RowBtn, TableBtn } from "../../styled/styled";
import { useState } from "react";
import MDBox from "../MDBox";
import DataTable from "../dashboard/Table";
import { EditIcon, TrashIcon } from "../../assets/svg";
import Alert from "../misc/Dialogue";
import RolesComp from "./Roles";


function UserManagementComp() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'User Name', width: 150 },
    { field: 'email', headerName: 'User Email', width: 250 },
    {
      field: 'role',
      headerName: 'User Role',
      width: 180,
      renderCell: (params) => (
        <strong>
          <TableBtn
            size="small"
          >
            {params.formattedValue}
          </TableBtn>
        </strong>
      ),
    },
    {
      field: 'rights',
      headerName: 'User Rights',
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <strong>
          <TableBtn
            size="small"
            tabIndex={params.hasFocus ? 0 : -1}
            sx={{background:params.formattedValue==='Member'?'#FFF9EE':'#E5EEFF', color:params.formattedValue==='Member'?'#FE9B0E':'#005AFF'}}
          >
            {params.formattedValue}
          </TableBtn>
        </strong>
      ),
    },
    {
      field: 'status',
      headerName: 'User Status',
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <strong>
          <TableBtn
            size="small"
            tabIndex={params.hasFocus ? 0 : -1}
            sx={{background:params.formattedValue==='Active'?'#F2FAF6':'#FEF2F2', color:params.formattedValue==='Active'?'#0C9D61':'#EC2D30'}}
          >
       {params.formattedValue}
          </TableBtn>
        </strong>
      ),
    },
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      width: 250,
      renderCell: (params) => (
        <strong>
          <button
            size="small"
            style={{border:0, background:"#FFFF", marginRight:1}}
            onClick={()=>handleAlert('alert')}
          >
            <EditIcon/>
          </button>
          <button
            size="small"
            style={{border:0, background:"#FFFF", marginLeft:1}}
            onClick={()=>handleAlert('del')}
          >
            <TrashIcon/>
          </button>
        </strong>
      ),
    },
  ];
  
  const rows = [
    { id: 1, name: 'Snow', email: 'Jon@gmail.com', role:"Finance",  rights: 'Member', status:"Active" },
    { id: 2, name: 'Snow', email: 'Jon@gmail.com', role:"Store Keeper",  rights: 'Admin', status:"Inactive" },
    { id: 3, name: 'Snow', email: 'Jon@gmail.com', role:"Cashier", rights: 'Admin',  status:"Active" },
    { id: 4, name: 'Snow', email: 'Jon@gmail.com',  role:"Customer Care", rights: 'Member', status:"Inactive" },
    { id: 5, name: 'Snow', email: 'Jon@gmail.com',  role:"Inventory Controller", rights: 'admin', status:"Active" },
    { id: 6, name: 'Snow', email: 'Jon@gmail.com',  role:"Auction Listing", rights: 'Member', status:"Inactive"},
    { id: 7, name: 'Snow', email: 'Jon@gmail.com',  role:"Designer", rights: 'admin', status:"Active" },
    { id: 8,name: 'Snow', email: 'Jon@gmail.com',  role:"Approval", rights: 'Member',  status:"Inactive" },
    { id: 9, name: 'Snow', email: 'Jon@gmail.com',  role:"Auction Listing",rights: 'admin', status:"Active" },
    { id: 10, name: 'Snow', email: 'Jon@gmail.com',  role:"Approval",rights: 'Member', status:"Inactive" },
  ];
    const [selectedBtn, setSelectedBtn] =useState('all');
    const [state, setState] = useState({
      alert:false
    });
    const handleClick = (btn) => {
        setSelectedBtn(btn);
    }
    const handleAlert = (name) => {
      setState((prev) => ({ ...prev, [name]: !prev[name] }));
    };
  return (
    <DashboardLayout>
    <DashboardNavbar />
    <DashboardHeader msg={`${selectedBtn === 'all' ? 'User Management': selectedBtn === 'active' ? 'Active Users' : selectedBtn === 'inactive' ? 'Inactive Users' : 'Roles Management'}`} des={'Here you can manage your user, you may add new user or update existing user.'} btn={'Add users'} handleClick={()=>handleAlert('alert')}/>
   <Stack direction={'row'}>
   <RowBtn   onClick={()=>handleClick('all')}  sx={{margin:1, background:selectedBtn === 'all' ? '#F15A29':'#F5F5F5',color:selectedBtn === 'all' ? '#F9FAFB !important':'#1F2937'}}>All Users</RowBtn>
   <RowBtn   onClick={()=>handleClick('active')} sx={{margin:1,background:selectedBtn === 'active' ? '#F15A29':'#F5F5F5',color:selectedBtn === 'active' ? '#F9FAFB !important':'#1F2937'}}>Active Users</RowBtn>
   <RowBtn   onClick={()=>handleClick('inactive')}  sx={{margin:1,background:selectedBtn === 'inactive' ? '#F15A29':'#F5F5F5',color:selectedBtn === 'inactive' ? '#F9FAFB !important':'#1F2937'}}>InActive Users</RowBtn>
   <RowBtn   onClick={()=>handleClick('roles')}  sx={{margin:1,background:selectedBtn === 'roles' ? '#F15A29':'#F5F5F5',color:selectedBtn === 'roles' ? '#F9FAFB !important':'#1F2937'}}>List of Roles</RowBtn>
   </Stack>
   {selectedBtn === 'roles' ? <RolesComp/>: 
   <MDBox mt={3}>
   <Grid container spacing={3}>
     <Grid item xs={12}>
       <Cards>
       <DataTable height={'100vh'} rowData={rows} colData={columns}/>
       </Cards>
     </Grid>
 
   </Grid>
 </MDBox>}
   
        <Alert
        open={state.alert}
        close={()=>handleAlert('alert')}
        title={
          <div>
            <Typography>Add User</Typography>
            <FormHelperText>Add Following details here to add user in your list</FormHelperText>
            <Divider/>
          </div>
        }
        content={
          <FormGroup >
          <FormControl sx={{mb:1}}>
      <Label htmlFor="my-input">Name</Label>
      <OutlinedInput    id="my-input" name="email" placeholder='Enter user name'  rows={1} size='small' sx={{borderRadius:"50px",width:'100%'}}/>
    </FormControl>
    <FormControl sx={{mb:1}}>
      <Label htmlFor="my-input">Email</Label>
      <OutlinedInput   id="my-input" placeholder='Enter user email'  rows={1} size='small' sx={{borderRadius:"50px",width:'100%'}}/>
    </FormControl>
    <FormControl fullWidth sx={{mb:1}}>
  <Label id="demo-simple-select-label">Role</Label>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"  
    placeholder="Select user role"
    rows={1} size='small' sx={{borderRadius:"50px",width:'100%', height:"35px"}}
  >
    <MenuItem value={10}>Finance</MenuItem>
    <MenuItem value={20}>Auction Listing</MenuItem>
    <MenuItem value={30}>Inventory Controller</MenuItem>
  </Select>
</FormControl>
<FormControl fullWidth>
  <Label id="demo-simple-select-label">Status</Label>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"  
    placeholder="Select user status"
 size='small' sx={{borderRadius:"50px",width:'100%', height:"35px"}}
  >
    <MenuItem value={10}>Active</MenuItem>
    <MenuItem value={20}>In Active</MenuItem>
  </Select>
</FormControl>
            </FormGroup>
        }
      />
        <Alert
        open={state.del}
        close={()=>handleAlert('del')}
        title={'Delete User'}
        content={'Are You sure you want to delete this user'}
      />
    </DashboardLayout>
  );
}

export default UserManagementComp;
