import MiniDrawer from "@/app/components/AppBar";
import { Typography } from "@mui/material";
import React from "react";

export default function Error() {
  return (
    <MiniDrawer>
      <Typography
        variant="h3"
        sx={{
          position: "fixed",
          display: "grid",
          placeItems: "center",
          inset: "0",
        }}
      >
        404 | Bunday sahifa mavjuda emas
      </Typography>
    </MiniDrawer>
  );
}
