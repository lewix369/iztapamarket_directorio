
export const validateRegistrationForm = (formData) => {
  const newErrors = {};
  if (!formData.name.trim()) newErrors.name = 'El nombre del negocio es obligatorio.';
  if (!formData.whatsapp.trim()) newErrors.whatsapp = 'El número de WhatsApp es obligatorio.';
  else if (!/^\+?[0-9\s-()]{7,20}$/.test(formData.whatsapp)) newErrors.whatsapp = 'Número de WhatsApp inválido.';
  if (!formData.address.trim()) newErrors.address = 'La dirección es obligatoria.';
  if (!formData.category) newErrors.category = 'Debes seleccionar una categoría.';
  if (!formData.hours.trim()) newErrors.hours = 'El horario es obligatorio.';
  if (!formData.description.trim()) newErrors.description = 'La descripción es obligatoria.';
  else if (formData.description.length > 200) newErrors.description = 'La descripción no debe exceder los 200 caracteres.';
  if (!formData.termsAccepted) newErrors.termsAccepted = 'Debes aceptar los términos y condiciones.';
  
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (formData.logoUrl && !urlPattern.test(formData.logoUrl)) newErrors.logoUrl = 'URL de logo inválida.';
  if (formData.imageUrl1 && !urlPattern.test(formData.imageUrl1)) newErrors.imageUrl1 = 'URL de imagen 1 inválida.';
  if (formData.imageUrl2 && !urlPattern.test(formData.imageUrl2)) newErrors.imageUrl2 = 'URL de imagen 2 inválida.';

  return newErrors;
};
  