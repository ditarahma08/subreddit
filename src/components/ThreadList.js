import { useRouter } from "next/router";
import { useState } from "react";
import Card from "./Card";
import ListNavigation from "./ListNavigation";

export default function ThreadList(props) {
  const [cardView, setCardView] = useState("classic");
  const router = useRouter();
  return (
    <div className="px-4">
      <ListNavigation onChangeView={(value) => setCardView(value)} />

      {props.data.map((thread, index) => (
        <div className="mt-4" key={index}>
          <Card
            data={thread}
            style={cardView}
            openThread={(id) => router.push(`/thread/${id}`)}
          />
        </div>
      ))}
    </div>
  );
}
