export default async function handler(req, res) {
  try {
    const r = await fetch(
      "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/user/details",
      {
        headers: {
          "Authorization": `Bearer ${process.env.ASITHA_API_KEY}`
        }
      }
    );

    const data = await r.json();
    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "Gagal ambil data" });
  }
}
