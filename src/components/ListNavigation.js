import { Dropdown } from "./Dropdown";

export default function ListNavigation() {
  return (
    <div className="flex justify-between items-center">
      <button className="bg-blue-700 rounded-3xl text-white font-bold px-3 py-2">
        Create a post
      </button>

      <div className="flex text-xs gap-x-2 items-center">
        <p>Sort by:</p>
        {/* <p>Hot</p> */}
        <Dropdown />
        <p>View</p>
      </div>
    </div>
  );
}
