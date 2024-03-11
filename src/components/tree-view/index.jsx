import menus from "./data";
import MenuList from "./MenuList";

export function TreeView() {
  return (
    <div className="min-h-screen w-full text-white flex flex-col">
      <h1 className="text-black bg-[#67C6E3] text-4xl ">Tree View</h1>
      <div className="bg-blue-950 w-[300px] flex-grow">
        <MenuList list={menus} />
      </div>
    </div>
  );
}
