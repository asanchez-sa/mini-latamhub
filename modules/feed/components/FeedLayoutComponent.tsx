import { Separator } from "@/components/ui/separator";
import FeedHeaderComponent from "./FeedHeaderComponent";
import FeedListComponent from "./FeedListComponent";

export default function FeedLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6">
      <FeedHeaderComponent />
      <Separator className="my-4" />
      <FeedListComponent />
    </div>
  );
}
