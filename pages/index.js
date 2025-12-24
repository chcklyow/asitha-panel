<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>React Saluran WhatsApp</title>
  <style>
    body { font-family: serif; padding: 40px }
    input, button { padding: 10px; width: 100%; margin: 5px 0 }
  </style>
</head>
<body>

<h2>REACT SALURAN WHATSAPP BY @danar11._</h2>

<input id="url" placeholder="Link post channel" />
<input id="emoji" placeholder="Emoji 😭🔥😂" value="🔥" />

<button onclick="react()">GAS ⚡</button>
<button onclick="cekCoin()">Cek Coin</button>

<p id="status"></p>
<p id="coin"></p>

<script>
async function react() {
  document.getElementById("status").innerText = "⏳ processing...";
  const r = await fetch("/api/react", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: document.getElementById("url").value,
      emoji: document.getElementById("emoji").value
    })
  });
  const d = await r.json();
  document.getElementById("status").innerText =
    d.success ? "✅ sukses" : "❌ " + (d.error || d.message);
}

async function cekCoin() {
  const r = await fetch("/api/me");
  const d = await r.json();
  document.getElementById("coin").innerText = "💰 Coin: " + d.coins;
}
</script>

</body>
</html>
