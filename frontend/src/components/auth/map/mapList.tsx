import { useState } from "react";
import { MapListProps } from "../../../types/map";  // 타입 import

function MapList({ lists, selectedList, onChange, onAddList, onOpenModal }: MapListProps) {
  // 드롭다운 메뉴 표시 여부 상태 관리
  const [showDropdown, setShowDropdown] = useState(false);
  // 새 리스트 이름 입력 상태 관리
  const [newListName, setNewListName] = useState("");
  // 리스트 추가 입력창 표시 여부 상태 관리
  const [adding, setAdding] = useState(false);

  // 새 리스트 추가 처리 함수
  const handleAdd = () => {
    if (!newListName.trim()) return; // 빈 문자열 무시
    onAddList(newListName.trim());   // 부모 컴포넌트에 새 리스트 이름 전달
    setNewListName("");              // 입력창 초기화
    setAdding(false);                // 입력창 닫기
    setShowDropdown(false);          // 드롭다운 닫기
  };

  // 📌 드롭다운에 표시할 리스트 구성
  const dropdownLists = [
    // "지도보기"는 선택된 리스트가 아닐 때만 표시
    ...(selectedList !== "지도보기" ? ["지도보기"] : []),
    // 나머지 리스트 중, 현재 선택된 리스트는 제외
    ...lists.filter((list) => list !== selectedList),
  ];

  return (
    <div className="kakaomap-maplist-wrapper">
      {/* 현재 선택된 리스트 표시 및 드롭다운 토글 버튼 */}
      <button
        className="kakaomap-maplist-toggle"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedList || "맛집 리스트 선택"}
      </button>

      {/* 드롭다운 메뉴 표시 */}
      {showDropdown && (
        <div className="kakaomap-maplist-dropdown">
          {/* 필터링된 리스트 항목들 */}
          {dropdownLists.map((list) => (
            <div
              key={list}
              className="kakaomap-maplist-dropdown-item"
              onClick={() => {
                onChange(list);       // 리스트 선택 콜백 호출
                setShowDropdown(false); // 드롭다운 닫기
              }}
            >
              {list}
            </div>
          ))}

          {/* 리스트 추가 영역 */}
          <div className="kakaomap-maplist-dropdown-add">
            {/* 새 리스트 입력창이 안 보여질 때는 + 버튼만 표시 */}
            {!adding ? (
              <button
                onClick={() => {
                  setAdding(true);   // 입력창 열기
                  onOpenModal();     // 모달 열기 호출 (필요에 따라 조정 가능)
                }}
              >
                +
              </button>
            ) : (
              // 새 리스트 이름 입력창과 추가 버튼 표시
              <div className="kakaomap-maplist-dropdown-add-input">
                <input
                  type="text"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  placeholder="새 리스트 이름"
                  // Enter 키 눌러도 추가 가능
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
