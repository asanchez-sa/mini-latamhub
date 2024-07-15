import FeedLayoutComponent from "@/modules/feed/components/FeedLayoutComponent";

export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FeedLayoutComponent>{children}</FeedLayoutComponent>;
}
