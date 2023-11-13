import { useRouter } from "next/router";
import Card from "./Card";
import ListNavigation from "./ListNavigation";

export default function ThreadList() {
  const router = useRouter();
  return (
    <div className="px-4">
      <ListNavigation />

      <div className="mt-4">
        <Card openThread={() => router.push("/thread/1")} />
      </div>
    </div>
  );
}
