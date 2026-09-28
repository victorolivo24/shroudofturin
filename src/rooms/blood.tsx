"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Station } from "@/components/exhibit/station";
import { Chip } from "@/components/exhibit/chip";
import { DebateCard } from "@/components/exhibit/debate-card";
import { ZoomImage } from "@/components/shared/zoom-image";
import { Cite } from "@/components/shared/cite";
import { cn } from "@/lib/utils";

const stains = [
  {
    id: "face",
    label: "Forehead",
    image: "/images/shroud-blood-face-closeup.png",
    text: "Flows on the forehead and hair include a well-known stain shaped like a reversed “3”, which looks like blood trickling around the furrows of a strained brow.",
  },
  {
    id: "arms",
    label: "Forearms",
    image: "/images/shroud-blood-arm-closeup.png",
    text: "Blood runs down the forearms at an angle, consistent with arms held raised. The right-hand panel shows the same area as a negative, where the flows stand out.",
  },
  {
    id: "side",
    label: "Side",
    image: "/images/shroud-blood-side-closeup.png",
    text: "The large flow on the side mixes darker and lighter components, suggesting separation during bleeding rather than later application.",
  },
];

/** Linear blend of two hex colours; t = 0 gives a, t = 1 gives b. */
function mix(a: string, b: string, t: number) {
  const channel = (hex: string, i: number) => parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16);
  const rgb = [0, 1, 2].map((i) => Math.round(channel(a, i) + (channel(b, i) - channel(a, i)) * t));
  return `rgb(${rgb.join(",")})`;
}

export function BloodRoom() {
  const [stainId, setStainId] = useState(stains[0].id);
  const [uvOn, setUvOn] = useState(false);
  const [age, setAge] = useState(0);
  const stain = stains.find((item) => item.id === stainId)!;
  const t = age / 100;

  return (
    <>
      <Station
        number={1}
        title="Follow the flow"
        intro={
          <p>
            Chemists John Heller and Alan Adler reported that the stains are real blood.
            <Cite id="heller-adler" /> Microscopist Walter McCrone disagreed and identified iron oxide
            and vermilion paint instead.
            <Cite id="mccrone" /> Either way, the stains behave like blood flowing under gravity. Pick
            one to look closer.
          </p>
        }
      >
        <div className="flex flex-wrap gap-2">
          {stains.map((item) => (
            <Chip key={item.id} active={item.id === stainId} onClick={() => setStainId(item.id)}>
              {item.label}
            </Chip>
          ))}
        </div>
        <div
          key={stain.id}
          className="grid animate-[fade-in_.3s_ease-out] gap-6 rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
        >
          <ZoomImage src={stain.image} alt={`Bloodstain on the ${stain.label.toLowerCase()}`} className="max-h-96 object-contain" />
          <p className="text-lg text-sand-200/85">{stain.text}</p>
        </div>
      </Station>

      <Station
        number={2}
        title="Switch on the UV lamp"
        intro="Under ultraviolet light, the areas around several of the Shroud's bloodstains glow, although they are invisible in normal light. Try it on these test stains on linen."
      >
        <div className="grid gap-6 md:grid-cols-[320px_minmax(0,1fr)] md:items-start">
          <div
            className={cn(
              "rounded-3xl border p-4 transition-colors duration-500",
              uvOn ? "border-violet-400/50 bg-violet-950/60" : "border-sand-200/15 bg-sand-900/40",
            )}
          >
            <div className="relative">
              <img src="/images/blood-test-white-light.jpg" alt="Test bloodstains on linen under ordinary light" className="w-full rounded-2xl" />
              <img
                src="/images/blood-test-uv-light.jpg"
                alt="The same stains under ultraviolet light, with glowing borders"
                className={cn("absolute inset-0 h-full w-full rounded-2xl transition-opacity duration-500", uvOn ? "opacity-100" : "opacity-0")}
              />
            </div>
            <button
              type="button"
              aria-pressed={uvOn}
              onClick={() => setUvOn(!uvOn)}
              className={cn(
                "mt-4 w-full rounded-full py-2.5 font-semibold transition",
                uvOn ? "bg-violet-400 text-black" : "border border-violet-400/60 text-violet-300 hover:bg-violet-400/10",
              )}
            >
              {uvOn ? "Switch UV lamp off" : "Switch UV lamp on"}
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-sand-200/85">
              Researchers call these glowing borders <strong className="text-sand-50">serum halos</strong>.
              As blood dries on porous cloth, the clear serum spreads slightly beyond the denser red
              cells. The 1978 STURP team photographed halos like these around the Shroud&apos;s
              wounds.
              <Cite id="sturp" />
            </p>
            <DebateCard
              question="What do the halos tell us?"
              supporters={
                <p>
                  Their presence and spread fit natural blood transfer and drying on linen, and a
                  painter would have had no reason, or way, to add borders visible only under UV.
                </p>
              }
              skeptics={
                <p>
                  Fluorescence alone does not establish timing or cause. Chemical aging, the 1532 fire,
                  water, or centuries of handling could all change how materials respond under UV.
                </p>
              }
            />
          </div>
        </div>
      </Station>

      <Station
        number={3}
        title="Why is it still red?"
        intro={
          <p>
            Old blood usually turns dark brown or black, yet some Shroud stains look reddish. Chemical
            tests found unusually high levels of bilirubin, a breakdown product of haemoglobin that
            rises after severe trauma and can keep blood looking redder as it ages.
            <Cite id="heller-adler" /> Drag the slider to see the idea.
          </p>
        }
      >
        <div className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Typical blood", color: mix("#9b1c1c", "#2e1a12", t) },
              { label: "High bilirubin (proposed)", color: mix("#9b1c1c", "#8a3a22", t) },
            ].map((swatch) => (
              <div key={swatch.label} className="text-center">
                <div className="mx-auto h-28 w-28 rounded-full shadow-inner sm:h-36 sm:w-36" style={{ background: swatch.color }} />
                <p className="mt-3 text-sm text-sand-200/80">{swatch.label}</p>
              </div>
            ))}
          </div>
          <label className="mt-6 block">
            <span className="flex justify-between text-xs uppercase tracking-[0.25em] text-sand-200/60">
              <span>Fresh</span>
              <span>Centuries old</span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={age}
              onChange={(event) => setAge(Number(event.target.value))}
              aria-label="Age of the bloodstain"
              className="mt-2 w-full accent-amber-400"
            />
          </label>
          <p className="mt-3 text-xs text-sand-200/50">
            An illustration of the proposed effect, not measured colours.
          </p>
          <p className="mt-4 text-sand-200/80">
            Skeptics caution that bilirubin in ancient samples is hard to interpret and may be affected
            by environment, aging and the chemistry of the linen itself.
          </p>
        </div>
      </Station>

      <Station
        number={4}
        title="Blood first, image second?"
        intro="Under the microscope, the body image does not appear to continue beneath many of the bloodstains. That order of events is where interpretations split."
      >
        <DebateCard
          question="What does the blood-then-image order imply?"
          supporters={
            <p>
              Paint or dye applied by an artist would be expected to overlap or obscure existing
              bloodstains. The apparent order suggests the image formed later, through a process that
              did not disturb the dried blood.
              <Cite id="adler" />
            </p>
          }
          skeptics={
            <p>
              The layering does not require an extraordinary explanation. Ordinary chemical or physical
              processes, such as selective oxidation, dehydration or diffusion, could produce the same
              result. How the image relates to the blood remains unresolved.
            </p>
          }
        />
      </Station>
    </>
  );
}
