
import { validateRegistrationForm } from './formValidation.js';

export const handleRegistrationSubmit = (formData, businesses, setBusinesses, setErrors, toast, resetForm) => {
  const validationErrors = validateRegistrationForm(formData);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    toast({
      variant: "destructive",
      title: "Error de validación",
      description: "Por favor, corrige los campos marcados.",
    });
    return;
  }

  const newBusiness = {
    id: Date.now().toString(),
    ...formData,
    images: [formData.imageUrl1, formData.imageUrl2].filter(Boolean),
  };
  
  setBusinesses([...businesses, newBusiness]);

  const emailTo = 'contacto@iztapamarket.com';
  const emailSubject = `Nuevo Registro de Negocio: ${formData.name}`;
  const emailBody = `
    Un nuevo negocio se ha registrado en IztapaMarket:
    --------------------------------------------------
    Nombre del Negocio: ${formData.name}
    WhatsApp: ${formData.whatsapp}
    Dirección: ${formData.address}
    Categoría: ${formData.category}
    Horario: ${formData.hours}
    Descripción: ${formData.description}
    Logo URL: ${formData.logoUrl || 'No proporcionado'}
    Imagen 1 URL: ${formData.imageUrl1 || 'No proporcionada'}
    Imagen 2 URL: ${formData.imageUrl2 || 'No proporcionada'}
    --------------------------------------------------
    Este es un correo generado automáticamente.
  `;
  
  window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  toast({
    title: "¡Registro Exitoso!",
    description: "Tu negocio ha sido guardado localmente y se abrirá tu cliente de correo para enviar la información. Por favor, envía el correo.",
  });
  
  resetForm();
};
  