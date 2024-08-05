import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";
import { Cards, IconBox } from "../../../../styled/styled";

function ComplexStatisticsCard({ title, count, percentage, icon }) {
  return (
    <Stack>
      <Cards>
        <IconBox>
          {icon}
        </IconBox>
        <Typography sx={{ fontSize: "32px", fontWeight: "700", color: "#1F2937" }}>{count}</Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "500", color: "#4B5563" }}>{title}</Typography>
      </Cards>
    </Stack>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default ComplexStatisticsCard;
