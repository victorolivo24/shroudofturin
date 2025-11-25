"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { PLACEHOLDER_UV } from "@/data/placeholders";
import { bilirubinScenarios, bloodLabTabs } from "@/data/labs";

export function BloodSerumLab() {
  const [haloIntensity, setHaloIntensity] = useState(40);
  const [bloodBeforeImage, setBloodBeforeImage] = useState(true);
  const [tab, setTab] = useState(bloodLabTabs[0].id);

  return (
    <SectionShell id="blood-lab">
      <SectionHeader
        eyebrow="Blood & Serum Lab"
        title="UV halos, bilirubin, and sequencing the blood vs image debate."
        description="Use the controls to visualize UV fluorescence, tweak bilirubin estimates, and study chemistry notes."
        badgeVariant="emerald"
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <Card className="bg-black/40">
          <CardHeader>
            <Badge variant="amber">UV Halo Viewer</Badge>
            <CardDescription>
              Adjust the slider to see how trauma-induced bilirubin could shift hue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative h-64 overflow-hidden rounded-3xl border border-sand-200/15">
              <Image
                src={PLACEHOLDER_UV}
                alt="UV overlay placeholder"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, rgba(226,102,102,${
                    haloIntensity / 120
                  }), transparent 65%)`,
                }}
              />
            </div>
            <label className="flex flex-col text-xs uppercase tracking-[0.3em] text-sand-200/70">
              Bilirubin Slider
              <input
                type="range"
                min={0}
                max={100}
                value={haloIntensity}
                onChange={(event) => setHaloIntensity(Number(event.target.value))}
                className="mt-2 h-1.5 cursor-pointer appearance-none rounded-full bg-sand-900"
              />
            </label>
            <div className="grid gap-3 sm:grid-cols-3">
              {bilirubinScenarios.map((scenario) => (
                <div
                  key={scenario.id}
                  className={`rounded-2xl border p-4 text-sm ${
                    haloIntensity >= scenario.value
                      ? "border-accent-amber text-sand-50"
                      : "border-sand-200/10 text-sand-200/70"
                  }`}
                >
                  <p className="font-semibold">{scenario.label}</p>
                  <p>{scenario.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black/50">
          <CardHeader>
            <Badge variant="emerald">Blood Before Image?</Badge>
            <CardTitle>Sequencing Panel</CardTitle>
            <CardDescription>
              Toggle to explore the hypothesis that blood was deposited prior to the image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4">
              <div>
                <p className="text-sm font-semibold text-sand-50">
                  Blood precedes image
                </p>
                <p className="text-xs text-sand-200/70">
                  {"<TODO: copy>"} summary of both sides.
                </p>
              </div>
              <Switch
                checked={bloodBeforeImage}
                onCheckedChange={setBloodBeforeImage}
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                Sequence Confidence
              </p>
              <Progress
                value={bloodBeforeImage ? 72 : 48}
                accent={bloodBeforeImage ? "amber" : "rose"}
              />
            </div>
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="flex-wrap justify-start">
                {bloodLabTabs.map((item) => (
                  <TabsTrigger key={item.id} value={item.id}>
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {bloodLabTabs.map((item) => (
                <TabsContent key={item.id} value={item.id}>
                  <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-4 text-sm text-sand-200/80">
                    {item.body}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            <p className="text-xs text-sand-200/70">
              {/* TODO: embed UV lab walkthrough video */}
              Video Placeholder: Insert lab walkthrough showing fluorescence capture.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
