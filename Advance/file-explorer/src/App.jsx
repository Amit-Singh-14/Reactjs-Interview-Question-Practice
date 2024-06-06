import { useState } from "react";
import fileExplorer from "./data/FolderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorer, setExplorer] = useState(fileExplorer);
  const { insertNode, deleteNode, renameNode } = useTraverseTree();

  const handleInsertItem = (folderId, item, isFolder) => {
    const updatedTree = insertNode(explorer, folderId, item, isFolder);
    setExplorer({ ...updatedTree });
  };

  const handleDeleteItem = (folderId) => {
    const updatedTree = deleteNode(explorer, folderId);
    setExplorer({ ...updatedTree });
  };
  const handleRenameItem = (folderId, newName) => {
    const updatedTree = renameNode(explorer, folderId, newName);
    setExplorer({ ...updatedTree });
  };

  return (
    <>
      <div>
        <Folder
          handleInsertItem={handleInsertItem}
          handleDeleteItem={handleDeleteItem}
          handleRenameItem={handleRenameItem}
          explorer={explorer}
        />
      </div>
    </>
  );
}

export default App;
