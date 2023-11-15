import { Dropdown } from "./Dropdown";
import { useEffect, useState } from "react";

export default function ListNavigation(props) {
  const [sort, setSort] = useState("hot");
  const [view, setView] = useState("card");

  const filterSort = [
    {
      label: "Hot",
      value: "hot",
    },
    {
      label: "New",
      value: "new",
    },
    {
      label: "Top",
      value: "top",
    },
    {
      label: "Rising",
      value: "rising",
    },
  ];

  const filterView = [
    { label: "Card", value: "card" },
    { label: "Classic", value: "classic" },
    { label: "Compact", value: "compact" },
  ];

  function getSelectedSortLabel(value) {
    return filterSort.find((item) => item.value === value);
  }

  function getSelectedViewLabel(value) {
    return filterView.find((item) => item.value === value);
  }

  useEffect(() => {
    props.onChangeView(view);
  }, [view]);

  return (
    <div className="flex justify-between items-center">
      <button className="bg-blue-700 rounded-3xl text-white font-bold px-3 py-2">
        Create a post
      </button>

      <div className="flex text-xs gap-x-2 items-center">
        <span>Sort by:</span>

        <Dropdown
          options={filterSort}
          selected={getSelectedSortLabel(sort)}
          onSelect={(value) => setSort(value)}
        />
        <Dropdown
          options={filterView}
          selected={getSelectedViewLabel(view)}
          onSelect={(value) => setView(value)}
        />
      </div>
    </div>
  );
}
