const useTraverseTree = () => {
  const insertNode = (currTree, folderId, item, isFolder) => {
    if (currTree.id === folderId && currTree.isFolder) {
      currTree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return currTree;
    }

    let UpdatedItems = [];
    UpdatedItems = currTree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...currTree, items: UpdatedItems };
  };

  const deleteNode = (currTree, folderId) => {
    console.log(currTree, folderId);
    if (currTree.id === folderId) {
      return null;
    }

    if (currTree.isFolder) {
      // Filter out any children that are null (i.e., deleted)
      currTree.items = currTree.items
        .map((item) => deleteNode(item, folderId))
        .filter((item) => item !== null);
    }

    return currTree;
  };

  const renameNode = (currTree, folderId, newName) => {
    if (currTree.id == folderId) {
      currTree.name = newName;
      return currTree;
    }

    if (currTree.isFolder) {
      currTree.items = currTree.items.map((item) => {
        return renameNode(item, folderId, newName);
      });
    }

    return currTree;
  };

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
