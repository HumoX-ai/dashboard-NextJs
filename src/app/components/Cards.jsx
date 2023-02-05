import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/navigation";

const teams = [
  {
    logo: "https://rare-gallery.com/uploads/posts/1087853-illustration-text-logo-graphic-design-poster-Real-Madrid-brand-banner-design-advertising-font-trademark.jpg",
    title: "Real Madrid",
    subcsription: "2,500 subscribres",
    path: "/realmadrid",
  },
  {
    logo: "https://cdn.shopify.com/s/files/1/0016/2879/9022/files/auto-fc-barcelona-collection-mobile_800x.jpg?v=1614601115",
    title: "Barcelona",
    subcsription: "1,200 subscribres",
    path: "/barcelona",
  },
  {
    logo: "https://www.futbox.com/img/v1/5b1/ecb/e69/e45/09b75491e5ae71f116e9.png",
    title: "PSG",
    subcsription: "950 subscribres",
    path: "/psg",
  },
];

export default function Cards() {
  const router = useRouter();
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container sx={{ mt: 3 }} spacing={4} justifyContent="center">
        {teams.map((team) => (
          <Grid item key={team.logo} xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={team.logo}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {team.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {team.subcsription}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    router.push("/teams" + team.path);
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
