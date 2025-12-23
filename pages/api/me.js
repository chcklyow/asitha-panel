export default async function handler(req, res) {
  try {
    const apiRes = await fetch(
      `https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/user/details`,
      {
        headers: {
          Authorization: "Bearer " + process.env.ASITHA_KEY
        }
      }
    );

    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
