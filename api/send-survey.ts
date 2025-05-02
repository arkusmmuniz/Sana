export default async function handler(req, res) {
  const { to, message } = req.body;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Sana <sana@resend.dev>", // or your verified domain
      to,
      subject: "How are we doing?",
      html: `<p>${message}</p>`
    })
  });

  const result = await response.json();
  return res.status(200).json(result);
}
