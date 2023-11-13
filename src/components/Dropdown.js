import { useState } from "react";

export function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button>{props.label}</button>
      {isOpen &&
        props.options.map((option, index) => (
          <ul>
            <li>{option}</li>
          </ul>
        ))}
    </div>
  );
}
