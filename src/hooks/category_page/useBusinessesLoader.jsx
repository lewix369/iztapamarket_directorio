import React from 'react';

const BusinessCard = ({ business }) => {
  if (!business) return null;

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {business.logoUrl && (
        <img
          src={business.logoUrl}
          alt={business.name}
          className="w-24 h-24 object-contain mb-2"
        />
      )}
      <h3 className="text-lg font-bold text-gray-800">{business.name}</h3>
      <p className="text-sm text-gray-600">{business.description}</p>
      {business.whatsapp && (
        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded"
        >
          Contactar por WhatsApp
        </a>
      )}
    </div>
  );
};

export default BusinessCard;
