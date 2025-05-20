import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Faltan datos' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario BioSkin" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nuevo mensaje del formulario BIOSKIN',
      html: `
        <h3>Nuevo mensaje de ${name}</h3>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Correo enviado exitosamente' });
  } catch (err) {
    console.error('Error al enviar correo:', err);
    return res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
}