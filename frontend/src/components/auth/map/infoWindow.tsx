import React, { useState } from "react";
import { MapPin } from "../../../types/map";

// 인포윈도우 Props 타입 정의
type InfoWindowProps = {
  pin: MapPin;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: (pin: MapPin) => void;
  availableLists: string[];
  onRemove: (id: string) => void;
  onMoveList: (id: string, newList: string) => void;
};

function InfoWindow({
  pin,
  onClose,
  isFavorited,
  onToggleFavorite,
  availableLists,
  onRemove,
  onMoveList,
}: InfoWindowProps) {
  // 리스트 변경 드롭다운을 토글하는 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 하트 버튼 클릭 핸들러: 즐겨찾기 상태를 토글
  const handleToggleFavoriteClick = () => {
    // 이미 즐겨찾기된 상태에서 다시 클릭하면 삭제 로직 실행
    if (isFavorited) {
      if (window.confirm("즐겨찾기에서 삭제하시겠습니까?")) {
        onRemove(pin.id);
        onClose(); // 삭제 후 인포윈도우 닫기
      }
    } else {
      // 즐겨찾기 추가 로직: onToggleFavorite 함수를 통해 모달 열기
      onToggleFavorite(pin);
    }
  };

  // 리스트 변경 핸들러
  const handleMoveListChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onMoveList(pin.id, e.target.value);
    setIsDropdownOpen(false); // 변경 후 드롭다운 닫기
  };

  // 인포윈도우 내부 클릭 시 이벤트 전파를 막는 함수
  const handleInfoWindowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    // onMouseDown 이벤트를 추가하여 클릭 이벤트가 지도까지 전달되는 것을 원천적으로 차단
    <div className="kakaomap-infowindow" onClick={handleInfoWindowClick} onMouseDown={handleInfoWindowClick}>
      {/* 헤더 부분: 장소 이름과 닫기 버튼 */}
      <div className="kakaomap-infowindow-header">
        {/* 장소 이름 */}
        <div className="kakaomap-place-name">{pin.name}</div>
        {/* 닫기 버튼 */}
        <button className="kakaomap-infowindow-close" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* 나머지 콘텐츠 */}
      <div className="kakaomap-infowindow-content">
        {/* 주소 */}
        <div className="kakaomap-address">{pin.address}</div>
        {/* 전화번호 */}
        <div className="kakaomap-phone">{pin.phone}</div>

        <div className="kakaomap-infowindow-actions-wrapper">
          {/* 하트 아이콘 영역. 즐겨찾기 추가/삭제 기능을 모두 담당 */}
          <div className="kakaomap-heart-wrapper" onClick={handleToggleFavoriteClick}>
            <span className="kakaomap-heart">{isFavorited ? "❤️" : "🤍"}</span>
          </div>

          {/* 즐겨찾기 상태일 때만 리스트 이름 표시 및 드롭다운 기능 추가 */}
          {isFavorited && (
            <div className="kakaomap-infowindow-list-wrapper">
              <select
                value={pin.list}
                onChange={handleMoveListChange}
                className="kakaomap-dropdown-select"
              >
                {availableLists.map((list) => (
                  <option key={list} value={list}>
                    {list}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoWindow;