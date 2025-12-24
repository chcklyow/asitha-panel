export default async (req, res) => {
  const r = await fetch(
    "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/channel/react",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.ASITHA_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    }
  );

  const data = await r.json();
  res.status(200).json(data);
};
