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

    // Correo para el administrador
    await transporter.sendMail({
      from: `"Formulario BioSkin" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nuevo mensaje del formulario BIOSKIN',
      html: `
        <h3>Nuevo mensaje de ${name}</h3>
        <p><strong>Correo:</strong> ${email}</p>
        <pre style="font-family:inherit; white-space:pre-wrap;">${message}</pre>
      `,
    });

    // Correo de confirmación al paciente
    await transporter.sendMail({
      from: `"BIO SKIN Salud y Estética" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Hemos recibido tu solicitud de cita',
      html: `
        <p>Hola <strong>${name}</strong>,</p>
        <p>Gracias por contactarnos. Hemos recibido tu solicitud y nos comunicaremos contigo para confirmar tu cita.</p>
        <p><strong>Detalles enviados:</strong></p>
        <pre style="font-family:inherit; white-space:pre-wrap;">${message}</pre>
        <p style="margin-top:20px;">— El equipo de <strong>BIO SKIN</strong></p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Correos enviados exitosamente' });
  } catch (err) {
    console.error('Error al enviar correos:', err);
    return res.status(500).json({ success: false, message: 'Error al enviar los correos' });
  }
}