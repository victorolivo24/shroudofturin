"use client";

import Link from "next/link";
import { useState } from "react";
import { ShroudViewer } from "@/components/shared/shroud-viewer";
import { ZoomImage } from "@/components/shared/zoom-image";
import { Station } from "@/components/exhibit/station";
import { CompareSlider } from "@/components/exhibit/compare-slider";
import { DebateCard } from "@/components/exhibit/debate-card";
import { Chip } from "@/components/exhibit/chip";
import { FoldDemo } from "@/components/exhibit/fold-demo";
import { explorerModes, shroudHotspots, type ExplorerMode } from "@/data/hotspots";

export function ClothRoom() {
  const [modeId, setModeId] = useState<ExplorerMode["id"]>("normal");
  const [zoom, setZoom] = useState(1);
  const [hotspotId, setHotspotId] = useState(shroudHotspots[0].id);
  const mode = explorerModes.find((item) => item.id === modeId)!;
  const hotspot = shroudHotspots.find((item) => item.id === hotspotId)!;

  return (
    <>
      <Station
        number={1}
        title="Look closer"
        intro="This is the full cloth, front and back images side by side. Change the lighting, zoom in, and click the markers to find the wounds."
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <ShroudViewer
            key={mode.id}
            mode={mode}
            zoom={zoom}
            onZoomChange={setZoom}
            hotspots={shroudHotspots}
            activeHotspot={hotspotId}
            onHotspotSelect={setHotspotId}
          />
          <aside className="space-y-4">
            <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">Lighting</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {explorerModes.map((item) => (
                  <Chip key={item.id} active={item.id === modeId} onClick={() => setModeId(item.id)}>
                    {item.label}
                  </Chip>
                ))}
              </div>
              <p className="mt-4 text-sm text-sand-200/80">{mode.note}</p>
            </div>
            <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/50">Wound markers</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {shroudHotspots.map((item) => (
                  <Chip key={item.id} active={item.id === hotspotId} onClick={() => setHotspotId(item.id)}>
                    {item.label}
                  </Chip>
                ))}
              </div>
              <p className="mt-4 text-sm text-sand-200/80">{hotspot.note}</p>
              <Link
                href={`/rooms/wounds#${hotspot.id}`}
                className="mt-4 inline-block text-sm font-semibold text-accent-amber hover:underline"
              >
                Examine this wound in Room 2 →
              </Link>
            </div>
          </aside>
        </div>
      </Station>

      <Station
        number={2}
        title="The 1898 surprise"
        intro={
          <p>
            When Secondo Pia first photographed the Shroud in 1898, he found that his negative plate
            showed a far more lifelike face and body than the cloth itself. The Shroud behaves like a
            photographic negative, centuries before photography existed. Drag the slider to see it
            yourself.
          </p>
        }
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <CompareSlider
            alt="The full Shroud as a photographic negative"
            before={{
              src: "/images/shroud_full_body.jpg",
              label: "As the eye sees it",
              className: "invert sepia-[.55]",
            }}
            after={{ src: "/images/shroud_full_body.jpg", label: "Photographic negative" }}
          />
          <DebateCard
            question="Does the negative effect point to a forger?"
            supporters={
              <p>
                Deliberately producing a coherent negative image would require understanding
                photographic principles unknown before the 19th century, and a medieval artist would
                have had no reason to create an image that only makes sense when reversed.
              </p>
            }
            skeptics={
              <p>
                Negative-like images can arise without intent. Contact or chemical processes that
                darken the cloth where it touches raised features naturally produce reversed tones, so
                the effect does not by itself require knowledge of photography.
              </p>
            }
          />
        </div>
      </Station>

      <Station
        number={3}
        title="Scars of history"
        intro={
          <p>
            In 1532 a fire in the chapel at Chambéry nearly destroyed the cloth, and nuns sewed patches
            over the holes two years later. Those patches, the scorch lines and the water stains from
            dousing the fire are the bold geometric marks you saw in the viewer, sitting on top of the
            far fainter body image.
          </p>
        }
      >
        <FoldDemo />
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="space-y-2">
            <ZoomImage src="/images/shroud-fire-damage.jpg" alt="Burn holes and patches on the Shroud" />
            <figcaption className="text-sm text-sand-200/60">The real cloth: burn holes and the 1534 patches.</figcaption>
          </figure>
          <figure className="space-y-2">
            <ZoomImage src="/images/shroud-water-stains.jpg" alt="Water stains on the Shroud" />
            <figcaption className="text-sm text-sand-200/60">
              Water stains repeat in a pattern that follows how the cloth was folded.
            </figcaption>
          </figure>
        </div>
      </Station>
    </>
  );
}
