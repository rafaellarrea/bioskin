export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Faltan datos' })
  }

  try {
    console.log('Mensaje recibido:', { name, email, message })
    return res.status(200).json({ success: true, message: 'Correo simulado enviado' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error en el servidor' })
  }
}
