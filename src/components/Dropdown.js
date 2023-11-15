import { useState } from "react";

export function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="py-1 px-2 rounded-3xl hover:bg-slate-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.selected.label}
      </button>

      {isOpen && (
        <ul className="absolute bg-slate-300 pl-0 py-2 mt-4">
          {props.options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                props.onSelect(option.value);
                setIsOpen(false);
              }}
              className="py-2 px-4 hover:bg-slate-200 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
