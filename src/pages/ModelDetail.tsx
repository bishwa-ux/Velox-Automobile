import { useParams, Link } from 'react-router-dom';
import { vehicles } from '@/src/lib/models';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';

function VehicleScene() {
  return (
    <Canvas camera={{ position: [4, 1.5, 4], fov: 35 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[-5, 5, 5]} angle={0.3} intensity={2} color="#C9A84C" />
      <Environment preset="studio" />
      
      {/* Box fallback for 3D car since loading a full GLTF here without assets is prone to failing without a real model URL, but using a sleek geometry */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 1, 1.8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.9} />
      </mesh>
      
      {/* Cockpit illusion */}
      <mesh position={[-0.5, 0.7, 0]}>
        <boxGeometry args={[1.5, 0.5, 1.4]} />
        <meshStandardMaterial color="#000" roughness={0.0} metalness={1.0} opacity={0.8} transparent />
      </mesh>

      <ContactShadows position={[0, -0.6, 0]} opacity={0.6} scale={10} blur={2.5} far={4} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

export default function ModelDetail() {
  const { slug } = useParams();
  const vehicle = vehicles.find(v => v.slug === slug);

  if (!vehicle) {
    return <div className="pt-32 min-h-screen container mx-auto px-6 text-center text-velox-gold">Model not found</div>;
  }

  return (
    <div className="bg-velox-void">
      {/* Hero */}
      <section className="relative h-[100svh] overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0">
          <img src={vehicle.heroImage} alt={vehicle.name} className="w-full h-full object-cover filter brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-velox-void via-velox-void/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 pb-24">
          <h1 className="text-hero font-display text-velox-white leading-[0.8] mb-4">{vehicle.name}</h1>
          <p className="text-2xl md:text-3xl font-heading text-velox-gold tracking-widest uppercase mb-8">{vehicle.tagline}</p>
          <div className="max-w-xl">
            <p className="text-velox-silver font-light leading-relaxed mb-8">{vehicle.description}</p>
          </div>
        </div>
      </section>

      {/* 360 Viewer */}
      <section className="py-24 border-t border-velox-white/5 relative bg-velox-carbon">
        <div className="absolute top-12 left-6 md:left-12 z-20">
          <span className="text-mono text-velox-gold uppercase tracking-widest text-xs">Rotate 360&deg;</span>
        </div>
        <div className="h-[60vh] w-full cursor-grab active:cursor-grabbing" data-cursor="drag">
          <VehicleScene />
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-velox-white/5">
        <h2 className="text-h2 font-heading text-velox-white mb-16 tracking-wider">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {Object.entries(vehicle.specs).map(([key, value]) => (
            <div key={key} className="border-t border-velox-gold/30 pt-6">
              <p className="text-velox-white text-xl md:text-2xl font-body font-light mb-2">{value}</p>
              <p className="text-mono text-velox-gold text-[10px] uppercase tracking-widest">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-velox-void border-t border-velox-white/5 text-center">
        <h2 className="text-h2 font-heading text-velox-white mb-6">Make it Yours</h2>
        <p className="text-velox-silver mb-12 max-w-lg mx-auto">Begin the bespoke journey and shape the {vehicle.name} to your exact specifications.</p>
        <Link to="/configurator" className="btn-primary">
          Configure the {vehicle.name}
        </Link>
      </section>
    </div>
  );
}

