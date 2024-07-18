import FeedLayoutComponent from "@/modules/feed/components/FeedLayoutComponent";

export default async function Index({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FeedLayoutComponent>{children}</FeedLayoutComponent>;
}
