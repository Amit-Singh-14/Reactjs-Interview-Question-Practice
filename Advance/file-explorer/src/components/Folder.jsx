import React, { useState } from "react";

function Folder({ handleInsertItem, handleDeleteItem, explorer, handleRenameItem }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(explorer.name);

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddItem = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertItem(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const onDeleteItem = (e) => {
    e.stopPropagation();
    handleDeleteItem(explorer.id);
  };

  const onBlurItem = () => {
    if (newName.length > 0) {
      handleRenameItem(explorer.id, newName);
    }
    setIsEditing(false);
  };

  const onRenameItem = (e) => {
    if (e.keyCode === 13 && newName.length > 0) {
      setIsEditing(false);
      handleRenameItem(explorer.id, newName);
    }
  };

  if (explorer && explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onBlur={onBlurItem}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={onRenameItem}
              autoFocus
            />
          ) : (
            <span onDoubleClick={() => setIsEditing(true)}>📂{explorer.name}</span>
          )}
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button onClick={(e) => onDeleteItem(e)}>❌</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", marginLeft: "20px" }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📂" : "📄"}</span>
              <input
                className="inputContainer__input"
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                onKeyDown={onAddItem}
              />
            </div>
          )}

          {explorer.items.map((exp) => (
            <Folder
              explorer={exp}
              handleInsertItem={handleInsertItem}
              handleDeleteItem={handleDeleteItem}
              handleRenameItem={handleRenameItem}
              key={exp.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onBlur={onBlurItem}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={onRenameItem}
            autoFocus
          />
        ) : (
          <span className="file" onDoubleClick={() => setIsEditing(true)}>
            📄{explorer.name}
          </span>
        )}
        <button onClick={onDeleteItem}>❌</button>
      </div>
    );
  }
}

export default Folder;
