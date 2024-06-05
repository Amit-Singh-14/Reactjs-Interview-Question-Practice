import React from "react";
import MenuItems from "./MenuItems";

function MenuList({ list }) {
  return (
    <ul>{list && list.length && list.map((item) => <MenuItems item={item} key={item.label} />)}</ul>
  );
}

export default MenuList;
