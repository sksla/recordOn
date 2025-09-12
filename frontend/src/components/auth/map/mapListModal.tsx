import { useState } from "react";

type MapListModalProps = {
  lists: string[];
  onSelect: (list: string) => void;
  onAddList: (list: string) => void;
  onClose: () => void;
};

function MapListModal({ lists, onSelect, onAddList, onClose }: MapListModalProps) {
  const [newListName, setNewListName] = useState("");

  // 새 리스트 추가 및 선택 함수
  const handleAdd = () => {
    if (!newListName.trim()) return;
    onAddList(newListName.trim());
    onSelect(newListName.trim()); // 새 리스트를 선택한 것으로 처리
    setNewListName("");
    onClose();
  };

  return (
    <div className="kakaomap-modal-overlay">
      <div className="kakaomap-modal">
        <h4 className="kakaomap-modal-title">나의 맵리스트</h4>
        <ul className="kakaomap-modal-list">
          {lists.map((list) => (
            <li
              key={list}
              className="kakaomap-modal-list-item"
              onClick={() => {
                onSelect(list); // 선택된 리스트를 부모 컴포넌트에 전달
                onClose();
              }}
            >
              {list}
            </li>
          ))}
        </ul>

        {/* 새 리스트 추가 영역 */}
        <div className="kakaomap-modal-add">
          <input
            type="text"
            placeholder="새 리스트 이름"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            className="kakaomap-modal-input"
          />
          <button onClick={handleAdd} className="kakaomap-modal-add-button">
            추가
          </button>
        </div>

        {/* 닫기 버튼 */}
        <button className="kakaomap-modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default MapListModal;