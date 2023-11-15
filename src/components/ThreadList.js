import { useRouter } from "next/router";
import { useState } from "react";
import Card from "./Card";
import ListNavigation from "./ListNavigation";

export default function ThreadList() {
  const [cardView, setCardView] = useState("classic");
  const router = useRouter();
  return (
    <div className="px-4">
      <ListNavigation onChangeView={(value) => setCardView(value)} />

      <div className="mt-4">
        <Card style={cardView} openThread={() => router.push("/thread/1")} />
      </div>
    </div>
  );
}
