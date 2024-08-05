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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const LineData = {
  labels,
  datasets: [
    {
      label: '',
      data: ['120','220','33','46','52','62','720','820','900'],
      borderColor: '',
        radius: 0, 
      backgroundColor: '#A7C6FF',
    },
  ],
};
export const FillData = {
  labels,
  datasets: [
    {
      label: '',
      data: ['120','220','33','46','52','62','720','820','900'],
      borderColor: '#fff',
      fill:true,
        radius: 0, 
        background: 'linear-gradient(180deg, #005AFF 0%, #A7C6FF 100%)'

    },
  ],
};
export const HorizontalData = {
  labels,
  datasets: [
    {
      label: '',
      data: ['120','220','33','46','52','62','720','820','900'],
      borderColor: '#fff',
      fill:true,
        radius: 0, 
        background: 'linear-gradient(180deg, #005AFF 0%, #A7C6FF 100%)'

    },
  ],
};