export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ message: "URL wajib diisi" });
  }

  try {
    const r = await fetch(
      "https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/channel/react",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.ASITHA_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      }
    );

    const data = await r.json();
    res.status(200).json({ success: true, data });
  } catch {
    res.status(500).json({ success: false });
  }
}