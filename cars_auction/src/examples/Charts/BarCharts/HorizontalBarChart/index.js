import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: '1990',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: '1995',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: '2000',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: '2005',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: '2010',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: '2015',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: '2020',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: '2021',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: '2022',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: '2023',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: '2024',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: '2025',
  },
];


const chartSetting = {
 
  height: 290,
};

const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Yearly Sales', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
