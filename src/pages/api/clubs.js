import clubs from "@/app/components/data/data";

export default function handler(req, res) {
  res.status(200).json(clubs);
}
