import { useState } from 'react';
import { useConfiguratorStore } from '@/src/store/configuratorStore';
import { vehicles } from '@/src/lib/models';
import { motion, AnimatePresence } from 'motion/react';

const PAINT_COLORS = [
  { id: 'obsidian', name: 'Midnight Obsidian', hex: '#111' },
  { id: 'silver', name: 'Void Silver', hex: '#C0C0C0' },
  { id: 'gold', name: 'Champagne Gold', hex: '#C9A84C' },
  { id: 'ember', name: 'Volcanic Ember', hex: '#E85C30' },
  { id: 'graphite', name: 'Arctic Graphite', hex: '#333333' },
];

const WHEELS = [
  { id: 'forged', name: 'Apex Forged' },
  { id: 'carbon', name: 'Hyperion Carbon' },
  { id: 'monobloc', name: 'Stasis Monobloc' },
];

export default function Configurator() {
  const [step, setStep] = useState(1);
  const { 
    model, setModel, 
    paint, setPaint, 
    wheels, setWheels, 
    accessories, toggleAccessory 
  } = useConfiguratorStore();

  const selectedVehicle = vehicles.find(v => v.id === model) || vehicles[0];

  const handleNext = () => setStep(s => Math.min(6, s + 1));
  const handlePrev = () => setStep(s => Math.max(1, s - 1));

  return (
    <div className="min-h-screen bg-velox-void flex flex-col md:flex-row pt-[80px]">
      
      {/* Left Panel: Configuration Options */}
      <div className="w-full md:w-[40%] bg-velox-void border-r border-velox-white/5 h-[calc(100vh-80px)] overflow-y-auto hidden-scrollbar flex flex-col">
        <div className="p-8 md:p-12 flex-1">
          <div className="mb-12">
            <h1 className="text-h2 font-heading text-velox-white mb-2 uppercase tracking-wide">Configure Yours</h1>
            <p className="text-velox-silver font-mono text-xs tracking-widest uppercase">Step 0{step} / 06</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <h3 className="text-h4 font-heading text-velox-gold mb-8 uppercase tracking-widest border-b border-velox-white/5 pb-4">Select Model</h3>
                <div className="space-y-4">
                  {vehicles.filter(v => v.available).map(v => (
                    <button
                      key={v.id}
                      onClick={() => setModel(v.id)}
                      className={`w-full text-left p-6 border transition-all duration-300 ${model === v.id ? 'border-velox-gold bg-velox-gold/5' : 'border-velox-white/10 hover:border-velox-white/30'}`}
                      data-cursor="configure"
                    >
                      <h4 className="text-velox-white font-heading text-xl mb-1">{v.name}</h4>
                      <p className="text-velox-silver text-sm">{v.price}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <h3 className="text-h4 font-heading text-velox-gold mb-8 uppercase tracking-widest border-b border-velox-white/5 pb-4">Exterior Paint</h3>
                <div className="grid grid-cols-5 gap-4">
                  {PAINT_COLORS.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setPaint(c.id)}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className={`w-12 h-12 rounded-full border-2 transition-all ${paint === c.id ? 'border-velox-gold p-1' : 'border-transparent'}`}>
                        <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: c.hex }} />
                      </div>
                    </button>
                  ))}
                </div>
                {paint && <p className="mt-8 text-center text-velox-silver text-sm">{PAINT_COLORS.find(c => c.id === paint)?.name}</p>}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <h3 className="text-h4 font-heading text-velox-gold mb-8 uppercase tracking-widest border-b border-velox-white/5 pb-4">Wheels</h3>
                <div className="space-y-4">
                  {WHEELS.map(w => (
                    <button
                      key={w.id}
                      onClick={() => setWheels(w.id)}
                      className={`w-full text-left p-6 border transition-all duration-300 ${wheels === w.id ? 'border-velox-gold bg-velox-gold/5' : 'border-velox-white/10 hover:border-velox-white/30'}`}
                    >
                      <h4 className="text-velox-white font-heading text-xl">{w.name}</h4>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step > 3 && (
              <motion.div key="step4+" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <h3 className="text-h4 font-heading text-velox-gold mb-8 uppercase tracking-widest border-b border-velox-white/5 pb-4">Additional Options</h3>
                  <p className="text-velox-silver">More configuration options coming soon...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        <div className="p-8 border-t border-velox-white/5 flex justify-between items-center bg-velox-void">
          <button 
            onClick={handlePrev} 
            disabled={step === 1}
            className="text-velox-silver hover:text-velox-white uppercase tracking-widest font-mono text-xs disabled:opacity-30 transition-colors"
          >
            &larr; Prev
          </button>
          {step < 6 ? (
            <button onClick={handleNext} className="btn-primary">Next Step</button>
          ) : (
            <button className="btn-primary">Request Build Sheet</button>
          )}
        </div>
      </div>

      {/* Right Panel: Live Preview */}
      <div className="w-full md:w-[60%] h-[50vh] md:h-[calc(100vh-80px)] sticky top-[80px] bg-velox-carbon relative overflow-hidden flex items-center justify-center p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        
        <AnimatePresence mode="wait">
          <motion.img
            key={model + paint} // Force re-render on change
            src={selectedVehicle.image}
            alt="Vehicle Preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full max-w-4xl object-contain drop-shadow-2xl transition-all duration-1000 ${paint === 'gold' ? 'sepia-[.3] hue-rotate-[10deg]' : paint === 'ember' ? 'sepia-[.4] saturate-200 hue-rotate-[-30deg]' : ''}`}
            style={{ filter: paint === 'obsidian' ? 'brightness(0.3) contrast(1.2)' : 'none' }}
          />
        </AnimatePresence>

        <div className="absolute bottom-8 right-8 text-right">
          <h2 className="text-3xl font-heading text-velox-white">{selectedVehicle.name}</h2>
          <p className="font-mono text-velox-gold text-sm tracking-widest mt-1">
             {selectedVehicle.price}
          </p>
        </div>
      </div>

    </div>
  );
}

