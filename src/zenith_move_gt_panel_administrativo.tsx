import React, { useState } from 'react';
import { LayoutDashboard, ClipboardList, Car, DollarSign, Users, LogOut, Save, UploadCloud } from 'lucide-react';

const AdminApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 font-sans">
      <header className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-6">
        <h1 className="text-2xl font-bold text-[#d4af37]">ZENITH <span className="text-white">ADMIN</span></h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <nav className="bg-[#1a1a1a] p-4 rounded-2xl border border-zinc-700 h-fit space-y-2">
          {[{id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard}, {id: 'reservas', name: 'Reservas', icon: ClipboardList}, {id: 'finanzas', name: 'Finanzas', icon: DollarSign}, {id: 'flota', name: 'Flota', icon: Car}, {id: 'usuarios', name: 'Usuarios', icon: Users}].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center gap-3 p-3 rounded-xl ${activeTab === item.id ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'}`}>
              <item.icon size={20} /> {item.name}
            </button>
          ))}
        </nav>
        <main className="md:col-span-3 bg-[#1a1a1a] p-6 rounded-2xl border border-zinc-700">
           <h2 className="text-xl font-bold capitalize">{activeTab}</h2>
           <p className="text-zinc-400 mt-4">Panel de control de {activeTab} activo.</p>
        </main>
      </div>
    </div>
  );
};
export default AdminApp;