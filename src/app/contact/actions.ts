'use server';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  errors?: { name?: string; email?: string; message?: string };
  values?: { name: string; email: string; message: string };
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const errors: NonNullable<ContactState['errors']> = {};
  if (name.length < 2) errors.name = 'Ingresa tu nombre.';
  if (!EMAIL_REGEX.test(email)) errors.email = 'Ingresa un correo válido.';
  if (message.length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.';

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Revisa los campos marcados.',
      errors,
      values: { name, email, message },
    };
  }

  // Aquí se podría enviar un correo (Resend, Nodemailer, etc.).
  // Para el laboratorio se registra en la consola del servidor / logs de Vercel.
  console.log('Nuevo mensaje de contacto:', { name, email, message });

  return {
    status: 'success',
    message: `¡Gracias, ${name}! Tu mensaje fue enviado. Te responderé pronto.`,
  };
}
