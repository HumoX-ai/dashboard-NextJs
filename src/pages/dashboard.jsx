import MiniDrawer from "@/app/components/AppBar";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { AreaChart } from "../app/components/AreaChart";
import { PieChart } from "../app/components/PieChart";
import { VerticalChart } from "../app/components/VerticalChart";

export default function Main() {
  return (
    <MiniDrawer>
      <Box>
        <Grid
          justify="center"
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="row"
          align="center"
        >
          <Grid item md={4} sm={12} xs={12}>
            <VerticalChart />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <PieChart />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#fff0e6",
                borderRadius: 2,
                p: 2,
                mb: 3,
              }}
            >
              <Typography variant="h6" color="black">
                Top 10
              </Typography>
              <Typography variant="body1" color="black">
                Position in drible
              </Typography>
              <Typography variant="body2" color="grey">
                20% increase from last week
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#eceafe",
                borderRadius: 2,
                p: 2,
                mb: 3,
              }}
            >
              <Typography variant="h6" color="black">
                26
              </Typography>
              <Typography variant="body1" color="black">
                New employees OnBoarded
              </Typography>
              <Typography variant="body2" color="grey">
                15% increase from last month
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#e5f7ff",
                borderRadius: 2,
                p: 2,
                mb: 3,
              }}
            >
              <Typography variant="h6" color="black">
                500
              </Typography>
              <Typography variant="body1" color="black">
                New Clients Approached
              </Typography>
              <Typography variant="body2" color="grey">
                5% increase from last week
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={8}>
            <AreaChart width="100%" />
          </Grid>
          <Grid item md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Notifications</Typography>
              <Typography variant="h6" color="primary">
                View All
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: 3,
                pb: 3,
              }}
            >
              <Box sx={{ pr: 2 }}>
                <Avatar>H</Avatar>
              </Box>
              <Box>
                <Box>
                  <Typography>Ellie joined team developers</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="grey">
                    04 April, 2021 | 04:00 PM
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: 3,
                pb: 3,
              }}
            >
              <Box sx={{ pr: 2 }}>
                <Avatar>H</Avatar>
              </Box>
              <Box>
                <Box>
                  <Typography>Ellie joined team developers</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="grey">
                    04 April, 2021 | 04:00 PM
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: 3,
                pb: 3,
              }}
            >
              <Box sx={{ pr: 2 }}>
                <Avatar>H</Avatar>
              </Box>
              <Box>
                <Box>
                  <Typography>Ellie joined team developers</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="grey">
                    04 April, 2021 | 04:00 PM
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pt: 3,
                pb: 3,
              }}
            >
              <Box sx={{ pr: 2 }}>
                <Avatar>H</Avatar>
              </Box>
              <Box>
                <Box>
                  <Typography>Ellie joined team developers</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="grey">
                    04 April, 2021 | 04:00 PM
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MiniDrawer>
  );
}
