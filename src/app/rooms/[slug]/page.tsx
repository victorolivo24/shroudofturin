import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms } from "@/data/rooms";
import { RoomLayout } from "@/components/layout/room-layout";
import { ClothRoom } from "@/rooms/cloth";
import { WoundsRoom } from "@/rooms/wounds";
import { BloodRoom } from "@/rooms/blood";
import { ImageRoom } from "@/rooms/image";
import { DatingRoom } from "@/rooms/dating";
import { SudariumRoom } from "@/rooms/sudarium";
import { FaithRoom } from "@/rooms/faith";

const exhibits: Record<string, ComponentType> = {
  cloth: ClothRoom,
  wounds: WoundsRoom,
  blood: BloodRoom,
  image: ImageRoom,
  dating: DatingRoom,
  sudarium: SudariumRoom,
  faith: FaithRoom,
};

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  return room ? { title: `${room.title} · Shroud of Turin`, description: room.teaser } : {};
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  const Exhibit = exhibits[slug];
  if (!room || !Exhibit) notFound();
  return (
    <RoomLayout room={room}>
      <Exhibit />
    </RoomLayout>
  );
}
