"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Avvvatars from "avvvatars-react";
import Link from "next/link";

const POST = ["Javascript", "React", "Nextjs", "Supabase", "Tailwindcss"];

export default function RightSidebarComponent() {
  return (
    <div>
      {/* Most Popular Tags */}
      <h4 className="mb-4 text-xl font-bold">Top tags</h4>
      <section className="flex flex-col space-y-10">
        {["Javascript", "React", "Nextjs", "Supabase", "Tailwindcss"].map(
          (e) => (
            <div
              key={e}
              className="flex items-center gap-2"
              style={{ marginBottom: 10 }}
            >
              <Avvvatars value="best_user@gmail.com" style="shape" />

              <div className="grid gap-1">
                <Link href="#">
                  <p className="text-sm font-medium leading-none">{e}</p>
                </Link>
              </div>
            </div>
          )
        )}
      </section>

      {/* Trending posts */}
      <h4 className="mb-4 mt-4 text-xl font-bold">Trending Posts</h4>
      <section className="flex flex-col space-y-10">
        {POST.map((e, index) => (
          <div style={{ marginBottom: 15 }} key={e}>
            <div
              key={e}
              className="flex flex-col items-center gap-2"
              style={{ marginBottom: 7 }}
            >
              <div className="flex items-center gap-2 w-full">
                <Avvvatars
                  value="best_user@gmail.com"
                  style="shape"
                  size={20}
                />
                <Link href="#">
                  <p className="text-sm text-muted-foreground font-light leading-none">
                    user
                  </p>
                </Link>
                {/* <Badge>tag1</Badge> */}
              </div>

              <div className="grid gap-1">
                <Link href="#">
                  <p className="text-md font-medium leading-none">
                    {e} - name of the posts
                  </p>
                </Link>
              </div>
            </div>
            {index < POST.length - 1 && <Separator />}
          </div>
        ))}
      </section>
    </div>
  );
}
