export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { url, emoji } = req.body;

  if (!url || !emoji) {
    return res.status(400).json({
      success: false,
      message: "URL & emoji wajib diisi"
    });
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
        body: JSON.stringify({
          url,
          emoji
        })
      }
    );

    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({
        success: false,
        error: data
      });
    }

    return res.status(200).json({
      success: true,
      data
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
