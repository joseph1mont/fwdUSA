// src/api/sendEmail.js
export default function sendEmail(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    // In a real-world scenario, you would use a library like Nodemailer to send emails
    // Here, we're just logging the data as a placeholder
    console.log("Received data:", data);

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
