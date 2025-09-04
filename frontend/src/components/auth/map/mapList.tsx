import { useState } from "react";

export type MapListProps = {
  lists: string[];
  selectedList: string;
  onChange: (list: string) => void;
  onAddList: (listName: string) => void;
};

function MapList({ lists, selectedList, onChange, onAddList }: MapListProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    if (!newListName.trim()) return;
    onAddList(newListName.trim());
    setNewListName("");
    setAdding(false);
    setShowDropdown(false);
  };

  return (
    <div className="kakaomap-maplist-wrapper">
      <button
        className="kakaomap-maplist-toggle"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedList || "맛집 리스트 선택"}
      </button>

      {showDropdown && (
        <div className="kakaomap-maplist-dropdown">
          {lists.map((list) => (
            <div
              key={list}
              className="kakaomap-maplist-dropdown-item"
              onClick={() => { onChange(list); setShowDropdown(false); }}
            >
              {list}
            </div>
          ))}

          <div className="kakaomap-maplist-dropdown-add">
            {!adding ? (
              <button onClick={() => setAdding(true)}>+</button>
            ) : (
              <div className="kakaomap-maplist-dropdown-add-input">
                <input
                  type="text"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  placeholder="새 리스트 이름"
                  onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                />
                <button onClick={handleAdd}>추가</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MapList;
