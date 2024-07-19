"use client";

import Link from "next/link";

import PublishFormComponent from "@/modules/feed/components/PublishFormComponent";

export default function SidebarComponent() {
  return (
    <section className="hidden md:grid">
      <nav
        className="hidden md:grid gap-4 text-sm text-muted-foreground mb-10"
        x-chunk="dashboard-04-chunk-0"
      >
        <Link href="#" className="font-semibold text-primary">
          Inicio
        </Link>
        <Link href="#">Resumenes</Link>
      </nav>

      <PublishFormComponent />
    </section>
  );
}
