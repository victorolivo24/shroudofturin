"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";

const ExhibitPanel = ({
  position,
  label,
  caption,
}: {
  position: [number, number, number];
  label: string;
  caption: string;
}) => (
  <Float floatIntensity={0.5} speed={1.2} rotationIntensity={0.2}>
    <mesh position={position}>
      <boxGeometry args={[1.4, 0.9, 0.08]} />
      <meshStandardMaterial color="#564535" metalness={0.1} roughness={0.6} />
    </mesh>
    <Html center position={[position[0], position[1], position[2] + 0.1]}>
      <div className="rounded-2xl border border-sand-200/20 bg-black/70 px-3 py-2 text-center text-xs text-sand-100">
        <p className="font-semibold">{label}</p>
        <p className="text-[10px] text-sand-200/70">{caption}</p>
      </div>
    </Html>
  </Float>
);

export function MuseumScene() {
  const panels = useMemo(
    () => [
      {
        position: [-1.6, 0.5, 0],
        label: "Spectral Lab",
        caption:
          "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13].",
      },
      {
        position: [0, 0.7, -0.3],
        label: "Negative Discovery",
        caption:
          "In 1898, Secondo Pia photographed the Shroud and discovered that its negative plate revealed a lifelike positive image—implying the Shroud itself behaves like a photographic negative. This was confirmed by Giuseppe Enrie in 1931 [18].",
      },
      {
        position: [1.6, 0.4, 0],
        label: "3D Relief Map",
        caption:
          "When processed using a NASA VP-8 Image Analyzer in 1976, the Shroud image produced natural three-dimensional topography, something ordinary photographs or paintings do not generate [19].",
      },
    ],
    [],
  );

  return (
    <div className="h-[360px] w-full overflow-hidden rounded-[32px] border border-sand-200/15 bg-gradient-to-b from-sand-900/60 to-black shadow-2xl shadow-black/40">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#050404"]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 4, 2]} intensity={1.2} />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.25, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#20170f" />
          </mesh>
          {panels.map((panel) => (
            <ExhibitPanel key={panel.label} {...panel} />
          ))}
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[0.35, 1.2, 0.35]} />
            <meshStandardMaterial color="#282018" />
          </mesh>
          <mesh position={[0, 1.25, 0]}>
            <boxGeometry args={[2.4, 1.2, 0.1]} />
            <meshStandardMaterial color="#6a5746" />
          </mesh>
          <Html position={[0, 1.25, 0.1]} center>
            <div className="rounded-2xl border border-sand-200/10 bg-black/70 px-4 py-3 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/70">
                Museum Gallery Placeholder
              </p>
              <p className="text-sm text-sand-50">
                Replace with custom 3D assets or scans
              </p>
            </div>
          </Html>
          <OrbitControls enablePan={false} minPolarAngle={0.4} maxPolarAngle={1.4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
