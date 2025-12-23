export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  let { url, emoji } = req.body;

  if (!url || !emoji) {
    return res.status(400).json({
      success: false,
      message: "URL & emoji wajib diisi"
    });
  }

  // 🔥 AMBIL CHANNEL ID DARI URL
  let channelId = url;

  if (url.includes("/channel/")) {
    channelId = url.split("/channel/")[1].split("?")[0];
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
          channelId,
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
