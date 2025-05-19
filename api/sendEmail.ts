import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, phone, date, time, service, message } = req.body;

  if (!name || !email || !phone || !date || !time || !service) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"BioSkin Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nueva solicitud: ${service}`,
      html: `
        <h2>📋 Nueva Solicitud desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Fecha Preferida:</strong> ${date}</p>
        <p><strong>Hora Preferida:</strong> ${time}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong><br/>${message || 'Sin mensaje adicional'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({ message: 'Error al enviar el correo' });
  }
}
