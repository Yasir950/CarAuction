import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';


export const MyContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',

});
export const MyInput = styled(TextField)({
    width: '540px',
});
export const MyBtn = styled(Button)({
    // width: '100%',
    borderRadius: '50px',
    color: "#F9FAFB",
    textTransform: 'capitalize',
    fontWeight: "normal",
    backgroundColor: '#F15A29',
    "&:hover": {
        backgroundColor: '#e34c1b'
    }
});
export const LoginContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    padding: '32px',
    borderRadius: '32px',
    boxShadow: '2px 4px 6px 0px #4B55630F'
});
export const DashboardHead = styled(Typography)({
    fontFamily: 'Urbanist',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '44px',
    color: "#111827",
    testTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'row'
});
export const RoundBtn = styled(Button)({
    fontFamily: 'Urbanist',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '44px',
    color: "#111827",
    testTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'row'
});

export const Cards = styled(Box)({
    width: '100%',
    // height: '170px',
    padding: '24px',
    gap: '10px',
    borderRadius: '20px',
    border: '1px solid #EAECF0',
    backgroundColor:'#FFFFFF',
});
export const Graphs = styled(Box)({
    minHeight: "10rem",
        width: "100%",
        border: "1px solid #C4C4C4",
        borderRadius: "0.375rem",
        padding: "0.5rem",
        backgroundColor:'#FFFFFF',
});
export const IconBox = styled(Box)({
    width: '40px',
    height: '40px',
    background:'#FEEEEA' ,
    borderRadius:"12px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
export const RowBtn = styled(Button)({
    // width: '100%',
    borderRadius: '50px',
    color: "#1F2937",
    textTransform: 'capitalize',
    fontWeight: "normal",
    backgroundColor: '#F5F5F5',
    "&:hover": {
        backgroundColor: '#F15A29',
    color: "#F9FAFB",
    }
});
export const TableBtn = styled(Button)({
    // width: '100%',
    borderRadius: '50px',
    color: "#1F2937",
    textTransform: 'capitalize',
    fontWeight: "normal",
    backgroundColor: '#F5F5F5',
});
export const Label = styled(FormLabel)({
    // width: '100%',
   fontWeight:600,
   fontSize: '14px',
   color:'#1F2937'
});
export const Btn = styled(Button)({
    // width: '100%',
    borderRadius: '50px',
    fontWeight: "normal",
});