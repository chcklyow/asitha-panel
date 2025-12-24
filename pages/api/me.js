export default async (req, res) => {
  const r = await fetch(
    "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/user/details",
    {
      headers: {
        "Authorization": "Bearer " + process.env.ASITHA_KEY
      }
    }
  );
  const data = await r.json();
  res.status(200).json(data);
};
