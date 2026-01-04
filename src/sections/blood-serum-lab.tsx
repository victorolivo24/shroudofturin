"use client";
/* eslint-disable @next/next/no-img-element */

import type { JSX } from "react";
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

  const renderTabImages = (body: string) => {
    const normalized = body.toLowerCase();
    const nodes: JSX.Element[] = [];
    if (normalized.includes("uv halo") || normalized.includes("serum halo")) {
      nodes.push(
        <img
          key="tab-uv"
          src="/images/shroud-uv-halo-closeup.png"
          alt="UV halo inset"
          loading="lazy"
          className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
        />,
      );
    }
    if (normalized.includes("bilirubin")) {
      nodes.push(
        <img
          key="tab-bilirubin"
          src="/images/bilirubin-trauma-comparison.png"
          alt="Bilirubin visualization"
          loading="lazy"
          className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
        />,
      );
    }
    if (normalized.includes("1978 sturp") || normalized.includes("sturp investigation")) {
      nodes.push(
        <img
          key="tab-sturp"
          src="/images/sturp-team-researchers-4.jpg"
          alt="STURP team reference"
          loading="lazy"
          className="mt-3 w-full rounded-2xl border border-sand-200/15 object-cover"
        />,
      );
    }
    return nodes;
  };

  return (
    <SectionShell id="blood-lab">
      <SectionHeader
        eyebrow="Blood & Serum Lab"
        title="UV halos, bilirubin, and sequencing the blood vs image debate."
        description="Use the controls to visualize UV fluorescence, tweak bilirubin estimates, and study chemistry notes."
        badgeVariant="emerald"
      />
      <div className="mb-10 space-y-8 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 3 — BLOOD &amp; SERUM ANALYSIS
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">UV Serum Halos</h3>
          <p className="text-sand-200/80">
            Under ultraviolet light, bloodstains reveal clear serum halos — consistent with
            post-traumatic blood separation.
          </p>
          <img
            src="/images/shroud-uv-halo-closeup.png"
            alt="UV serum halo close-up"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Bilirubin and Trauma</h3>
          <p className="text-sand-200/80">
            Chemical analysis detected elevated bilirubin levels, a byproduct of severe
            trauma. This may explain why the blood appears reddish rather than dark brown
            despite age.
          </p>
          <img
            src="/images/bilirubin-trauma-comparison.png"
            alt="Bilirubin trauma comparison"
            loading="lazy"
            className="w-full rounded-2xl border border-sand-200/15 object-cover"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Blood Flow Patterns</h3>
          <p className="text-sand-200/80">
            Distinct blood flows appear on the face, arms, and side, consistent with
            gravity-driven movement in a crucified position.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <img
              src="/images/shroud-blood-face-closeup.png"
              alt="Blood flow on the face"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
            <img
              src="/images/shroud-blood-arm-closeup.png"
              alt="Blood flow on the arm"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
            <img
              src="/images/shroud-blood-side-closeup.png"
              alt="Blood flow on the side"
              loading="lazy"
              className="w-full rounded-2xl border border-sand-200/15 object-cover"
            />
          </div>
        </div>
      </div>
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
                  Microscopy suggests the body image does not appear beneath the
                  bloodstains, meaning the blood transferred to the cloth first,
                  with the image forming afterward by an unknown mechanism
                  [10][15]. summary of both sides.
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
                  {renderTabImages(item.body)}
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
