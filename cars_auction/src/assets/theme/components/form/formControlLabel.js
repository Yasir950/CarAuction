
import colors from "../../../../assets/theme/base/colors";
import typography from "../../../../assets/theme/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "../../../../assets/theme/functions/pxToRem";

const { dark } = colors;
const { size, fontWeightBold } = typography;

const formControlLabel = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: '#1F2937',
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),
      fontFamily:'Urbanist',

      "&.Mui-disabled": {
        color: '#1F2937',
      },
    },
  },
};

export default formControlLabel;
