import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProyectoDetalleClient from "./ProyectoDetalleClient";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) return { title: "Proyecto" };

  return {
    title: project.title,
    description: project.description_en,
    openGraph: {
      title: `${project.title} | Santiago Maspero`,
      description: project.description_en,
      images: project.mockups?.[0]
        ? [{ url: project.mockups[0], width: 1200, height: 700 }]
        : [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Santiago Maspero`,
      description: project.description_en,
      images: project.mockups?.[0] ? [project.mockups[0]] : ["/og-image.png"],
    },
  };
}

export default function ProyectoDetallePage({ params }: Props) {
  return <ProyectoDetalleClient params={params} />;
}
