// src/pages/AboutPage.jsx
import React from 'react';

export const AboutPage = () => {
  const teamMembers = [
    { name: 'Chavez Apaza, Marcos Maidana', role: 'Desarrollador' },
    { name: 'Pariona Inga, Logan Yoshua Leonardo', role: 'Desarrollador' },
    { name: 'Villaverde Pacheco, Fabiola karina', role: 'Desarrollador' },
  ];

  return (
    <div className="w-300 mx-auto pt-40 pb-30">
      <h2 className="text-4xl font-bold mb-9 text-[#b4937c] text-center">Sobre nosotros</h2>
      <p className="mb-8 text-xl text-center">Conoce a los integrantes del grupo de trabajo</p>

      <div className="flex flex-col gap-12 text-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-xl shadow-lg p-4 mx-32 bg-amber-50">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
