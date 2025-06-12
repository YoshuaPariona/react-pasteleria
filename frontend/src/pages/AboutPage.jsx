// src/pages/AboutPage.jsx
import React from 'react';

export const AboutPage = () => {
  // Datos de ejemplo para los miembros del equipo
  const teamMembers = [
    { name: 'Logan Yoshua Leonardo Pariona Inga', role: 'Desarrollador' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-orange-600 text-center">Sobre nosotros</h2>
      <p className="mb-8 text-lg text-center">Conoce a los integrantes del grupo de trabajo</p>

      <div className="flex flex-col gap-4 text-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-xl shadow-lg p-4 mx-32">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-500">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
