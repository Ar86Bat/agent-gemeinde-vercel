"use client";
import React, { useState } from 'react';
import { Save, Shield, Settings } from 'lucide-react';

export default function ChurConfigUI() {
  const [dept, setDept] = useState('Bau');
  const [creativity, setCreativity] = useState(0.2); 
  const [model, setModel] = useState('fast');
  const [citations, setCitations] = useState(true);

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 min-h-screen font-sans text-gray-900">
      <div className="bg-red-700 text-white p-6 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Stadtverwaltung Chur</h1>
          <p className="text-red-100 text-sm">Interne KI-Assistenz • Konfiguration</p>
        </div>
        <Settings className="w-6 h-6" />
      </div>

      <div className="bg-white p-8 shadow-lg space-y-8 m-4 rounded-lg">
        <div className="border-b pb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-red-700" />
            Abteilung & Kontext
          </h2>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wählen Sie Ihr Departement (Organigramm-Ebene)
          </label>
          <select 
            value={dept} 
            onChange={(e) => setDept(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-black"
          >
            <option value="Finanzen">Dpt. Finanzen Wirtschaft Sicherheit</option>
            <option value="Bildung">Dpt. Bildung Gesellschaft Kultur</option>
            <option value="Bau">Dpt. Bau Planung Umwelt</option>
            <option value="Kanzlei">Stadtkanzlei / Allgemeine Verwaltung</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kreativitätsstufe (Temperature)
            </label>
            <input 
              type="range" 
              min="0" max="1" step="0.1" 
              value={creativity} 
              onChange={(e) => setCreativity(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              KI-Modell
            </label>
            <div className="flex bg-gray-100 rounded-md p-1">
              <button onClick={() => setModel('fast')} className={`flex-1 py-2 text-sm rounded ${model === 'fast' ? 'bg-white shadow text-black' : 'text-gray-500'}`}>Standard</button>
              <button onClick={() => setModel('smart')} className={`flex-1 py-2 text-sm rounded ${model === 'smart' ? 'bg-white shadow text-black' : 'text-gray-500'}`}>Analytisch</button>
            </div>
          </div>
        </div>

        <button className="w-full bg-gray-900 hover:bg-black text-white py-3 px-4 rounded-md flex justify-center items-center gap-2">
          <Save className="w-5 h-5" />
          Einstellungen übernehmen
        </button>
      </div>
    </div>
  );
}
