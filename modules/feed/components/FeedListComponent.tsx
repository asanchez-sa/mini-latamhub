import FeedItemComponent from "./FeedItemComponent";

export default async function FeedListComponent() {
  return (
    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
      <FeedItemComponent />
    </div>
  );
}
