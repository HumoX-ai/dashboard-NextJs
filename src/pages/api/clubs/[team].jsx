import clubs from "@/app/components/data/data";

export default function handler(req, res) {
  const teamName = req.query.team;
  console.log(req.query.team);

  const teams = clubs.find((item) => {
    return item.slug == teamName;
  });

  res.status(200).json(teams);
}
