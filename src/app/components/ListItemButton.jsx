const { default: styled } = require("@emotion/styled");
import ListItemButton from "@mui/material/ListItemButton";

const MyListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:hover, &.active": {
    borderRadius: "6px",
    transition: "0.3s",
    color: "white",
    background:
      "linear-gradient(90deg, rgba(31,112,117,1) 0%, rgba(63,158,235,1) 18%, rgba(40,149,144,1) 46%, rgba(2,0,36,1) 100%);",
    fill: "white",
    "& svg": { color: "white" },
  },
}));
export default MyListItemButton;
