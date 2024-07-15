import { Button } from "@/components/ui/button";

import FeedHeaderComponent from "./FeedHeaderComponent";
import FeedListComponent from "./FeedListComponent";
import FeedRightComponent from "./FeedRightComponent";

export default async function FeedLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        {/* Header top */}
        <FeedHeaderComponent />

        {/* Content */}
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <FeedListComponent />
          <FeedRightComponent />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </div>
    </main>
  );
}
