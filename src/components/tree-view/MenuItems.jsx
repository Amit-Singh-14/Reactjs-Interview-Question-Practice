import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItems({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentChildren) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentChildren]: !displayCurrentChildren[getCurrentChildren],
    });
  }

  return (
    <li className="ml-5 p-4">
      <div className="flex gap-2">
        <p>{item.label}</p>
        {item && item.children && item.children.length && (
          <span className="cursor-pointer" onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={20} />
            ) : (
              <FaPlus color="#fff" size={20} />
            )}
          </span>
        )}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
}

export default MenuItems;
