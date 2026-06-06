import React, { useState } from 'react';
import { 
  Car, MapPin, ShieldCheck, Clock, Navigation, 
  ChevronLeft, CheckCircle, Globe, Landmark, 
  TreePine, Mountain, Zap, ShoppingBag 
} from 'lucide-react';

const toursList = [
  { id: 1, name: 'Antigua Heritage', desc: 'Historia y arquitectura colonial.', icon: Landmark },
  { id: 2, name: 'Atitlán Serenity', desc: 'Paisajes naturales y cultura maya.', icon: TreePine },
  { id: 3, name: 'Tikal Majesty', desc: 'Exploración arqueológica mundial.', icon: Mountain },
  { id: 4, name: 'Volcanic Expedition', desc: 'Aventura y vistas panorámicas.', icon: Zap },
  { id: 5, name: 'Chichicastenango Tradition', desc: 'Inmersión en mercado y misticismo.', icon: ShoppingBag }
];

const App = () => {
  const [view, setView] = useState('home');
  const [selectedTour, setSelectedTour] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans p-4">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2071')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]" />
      </div>
      
      {showInstallPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1a1a1a] p-6 rounded-3xl border border-[#d4af37] max-w-sm">
            <h2 className="text-[#d4af37] text-xl font-bold mb-4">Cómo Instalar</h2>
            <ol className="text-zinc-300 text-sm space-y-2 mb-6">
              <li>1. Toca "Compartir" o "Tres puntos".</li>
              <li>2. Selecciona "Añadir a pantalla de inicio".</li>
              <li>3. ¡Listo! Ya tienes la App instalada.</li>
            </ol>
            <button onClick={() => setShowInstallPrompt(false)} className="w-full py-3 bg-[#d4af37] text-black font-bold rounded-xl">ENTENDIDO</button>
          </div>
        </div>
      )}

      <header className="flex justify-between items-center mb-8 relative z-20 px-2">
        <div className="flex items-center gap-2"><div className="w-10 h-10 bg-[#d4af37] rounded flex items-center justify-center text-black font-bold text-xl">Z</div><h1 className="font-bold text-lg">ZENITH <span className="text-[#d4af37]">MOVE GT</span></h1></div>
        <button className="text-white"><Globe size={24} /></button>
      </header>

      <main className="max-w-2xl mx-auto">
        {view === 'home' && (
          <div className="space-y-6 relative z-10 pt-20 pb-10 px-4">
            <div className="bg-[#1a1a1a]/40 backdrop-blur-md p-8 rounded-3xl border border-zinc-700/50 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">Bienvenido a Zenith</h2>
              <p className="text-zinc-300">Seleccione su experiencia premium.</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <button onClick={() => setView('transport')} className="flex flex-col items-center p-6 bg-[#d4af37] text-black rounded-2xl font-bold hover:bg-[#c5a030] transition"><Car size={32} className="mb-2"/> Transporte</button>
                <button onClick={() => setView('tours')} className="flex flex-col items-center p-6 bg-[#1a1a1a] border border-zinc-600 text-white rounded-2xl font-bold hover:border-[#d4af37] transition"><MapPin size={32} className="mb-2 text-[#d4af37]"/> Tours</button>
              </div>
            </div>
            <div className="flex justify-between gap-4 p-4 bg-[#1a1a1a]/40 backdrop-blur-md rounded-2xl border border-zinc-700/50 text-[10px] text-zinc-400">
              <div className="flex flex-col items-center"><ShieldCheck className="mb-1 text-[#d4af37]"/>Seguro</div>
              <div className="flex flex-col items-center"><Navigation className="mb-1 text-[#d4af37]"/>Monitoreo</div>
              <div className="flex flex-col items-center"><Clock className="mb-1 text-[#d4af37]"/>Puntualidad</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;