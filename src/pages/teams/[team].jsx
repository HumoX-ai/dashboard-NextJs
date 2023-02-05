import { getTeams } from "@/api";
import MiniDrawer from "@/app/components/AppBar";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function Home({ data }) {
  console.log(data);
  const searchParams = useSearchParams();

  console.log(searchParams.get("team"));
  return (
    <MiniDrawer>
      <Card
        sx={{
          maxWidth: 345,
          margin: "auto",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.club}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Leader Club: {data.leader}
            </Typography>
            <Typography variant="h6" color="text.primary">
              Famouses: {data.famous}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </MiniDrawer>
  );
}
export async function getServerSideProps(context) {
  console.log(context.query.team);
  const teamName = context.query.team;
  const res = await getTeams(teamName);
  return {
    props: { data: res },
  };
}
