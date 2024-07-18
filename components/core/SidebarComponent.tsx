import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Radius,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "../ui/badge";

export default async function SidebarComponent() {
  return (
    <section className="hidden md:grid">
      <nav
        className="hidden md:grid gap-4 text-sm text-muted-foreground"
        x-chunk="dashboard-04-chunk-0"
      >
        <Link href="#" className="font-semibold text-primary">
          Inicio
        </Link>
        <Link href="#">Resumenes</Link>
        <Link href="#">Entrevistas</Link>
      </nav>
    </section>
  );
}
