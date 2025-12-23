export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { url, emoji } = req.body;

    const apiRes = await fetch(
      `https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/channel/react`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.ASITHA_KEY
        },
        body: JSON.stringify({ url, emoji })
      }
    );

    const data = await apiRes.json();

    if (!apiRes.ok) {
      return res.status(500).json({ success: false, message: data.message || "Error from API" });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
