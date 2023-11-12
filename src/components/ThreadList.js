import Card from "./Card";
import ListNavigation from "./listNavigation";

export default function ThreadList() {
  return (
    <div className="px-4">
      <ListNavigation />

      <div className="mt-4">
        <Card />
      </div>
    </div>
  );
}
