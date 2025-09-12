import React, { useState } from "react";
import {
  Map,
  MapTypeControl,
  ZoomControl,
  MapMarker,
  CustomOverlayMap, // CustomOverlay 컴포넌트 추가
} from "react-kakao-maps-sdk";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";
import MapSearch from "./map-search";
import MapList from "./mapList";
import MapListModal from "./mapListModal"; // 리스트 선택/추가 모달
import InfoWindow from "./infoWindow"; // 분리된 인포윈도우 컴포넌트
import { MapPin, LatLng, Place } from "../../../types/map";

declare global {
  interface Window {
    kakao: any;
  }
}

function KakaoMap() {
  // 현재 지도 중심 위치 상태 관리 (지도 중심 좌표)
  const [position, setPosition] = useState<LatLng | null>(null);
  // 카카오 맵 객체 상태 저장
  const [mapObj, setMapObj] = useState<any>(null);

  // 맛집 리스트(드롭다운) 상태 관리, 초기값 2개
  const [lists, setLists] = useState<string[]>(["맛집1", "맛집2"]);
  // 현재 선택된 리스트 이름 (초기값: "지도보기")
  const [selectedList, setSelectedList] = useState<string>("지도보기");

  // 즐겨찾기 맵핀 리스트 상태 (빈 배열 초기화)
  const [pins, setPins] = useState<MapPin[]>([]);

  // 클릭된 마커 정보, 인포윈도우 표시용 상태
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null);

  // 리스트 추가 모달 오픈 여부 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 현재 검색된 장소의 정보 상태를 별도로 관리 (마커 렌더링용)
  const [searchPin, setSearchPin] = useState<MapPin | null>(null);

  // 장소 선택 시 호출되는 함수: 지도 중심 이동 및 상태 업데이트
  const handleSelectPlace = (place: Place) => {
    const newPos = { lat: parseFloat(place.y), lng: parseFloat(place.x) };
    setPosition(newPos); // 지도 중심을 검색된 위치로 이동

    if (mapObj) {
      // 카카오맵 API를 사용해 지도 중심 이동
      mapObj.setCenter(new window.kakao.maps.LatLng(newPos.lat, newPos.lng));
    }
    
    // 검색된 장소의 핀 정보를 searchPin 상태에 저장
    const newSearchPin = {
      id: place.id,
      name: place.place_name,
      position: newPos,
      list: "",
      address: place.address_name,
      phone: place.phone,
    };
    setSearchPin(newSearchPin);
    
    // 인포윈도우를 띄울 핀은 검색된 핀으로 설정
    setSelectedPin(newSearchPin);
  };

  // 새 리스트 추가 함수
  const handleAddList = (name: string) => {
    if (lists.includes(name)) {
      alert("이미 존재하는 리스트 이름입니다.");
      return;
    }
    if (lists.length >= 7) {
      alert("맛집 리스트는 최대 7개까지 만들 수 있습니다.");
      return;
    }
    setLists([...lists, name]);
  };

  // 맵핀 삭제 함수
  const handleRemovePin = (id: string) => {
    setPins(pins.filter((p) => p.id !== id));
    // 삭제된 핀이 인포윈도우로 선택되어 있었다면 선택 해제
    if (selectedPin?.id === id) {
      setSelectedPin(null);
    }
  };

  // 맵핀 리스트 이동 함수
  const handleMovePin = (id: string, newList: string) => {
    // 1. `pins` 배열을 업데이트
    setPins(pins.map((p) => (p.id === id ? { ...p, list: newList } : p)));

    // 2. 인포윈도우에 표시된 `selectedPin` 상태도 함께 업데이트
    //    인포윈도우가 변경된 리스트 이름으로 다시 렌더링
    setSelectedPin((prevPin) => {
      if (prevPin && prevPin.id === id) {
        return { ...prevPin, list: newList };
      }
      return prevPin;
    });
  };

  // 마커 클릭 시 인포윈도우 띄우기 위해 선택된 핀 상태 저장 (토글 기능)
  const handleMarkerClick = (pin: MapPin) => {
    if (selectedPin && selectedPin.id === pin.id) {
      setSelectedPin(null);
    } else {
      setSelectedPin(pin);
    }
  };

  // 인포윈도우 닫기 함수
  const handleCloseInfoWindow = () => {
    setSelectedPin(null);
  };

  // 특정 핀이 즐겨찾기에 등록되어 있는지 여부 체크 함수
  const isPinFavorited = (pin: MapPin) => pin.list !== "";

  // 하트 버튼 클릭 시 호출되는 함수
  const handleToggleFavorite = (pin: MapPin) => {
    const existingPin = pins.find(p => p.id === pin.id);
    if (existingPin) {
      handleRemovePin(pin.id);
    } else {
      setSelectedPin(pin);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <main className="home">
        <HeaderOne />
        {/* 지도와 리스트 드롭다운 영역 */}
        <div className="kakaomap-map-wrapper">
          {/* 맛집 리스트 드롭다운 (지도 위 중앙) */}
          <MapList
            lists={lists}
            selectedList={selectedList}
            onChange={setSelectedList}
            onAddList={handleAddList}
            onOpenModal={() => setIsModalOpen(true)}
          />

          {/* 카카오 지도 컴포넌트 */}
          <Map
            center={{ lat: 37.4979, lng: 127.0276 }}
            style={{ width: "100%", height: "680px" }}
            level={4}
            onCreate={(map) => setMapObj(map)}
            onTileLoaded={(map) =>
              setPosition({
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              })
            }
            // 지도의 빈 공간 클릭 시 인포윈도우 닫기
            onClick={() => setSelectedPin(null)}
          >
            {/* 지도 타입 컨트롤, 줌 컨트롤 */}
            <MapTypeControl position={"TOPRIGHT"} />
            <ZoomControl position={"RIGHT"} />
            
            {/* 검색 결과 마커는 `searchPin` 상태에 따라 렌더링. 즐겨찾기 목록에 없어야 함. */}
            {searchPin && !pins.some(p => p.id === searchPin.id) && (
              <MapMarker
                position={searchPin.position}
                clickable={true}
                onClick={() => handleMarkerClick(searchPin)}
              />
            )}

            {/* 즐겨찾기 맵핀 리스트 렌더링 */}
            {pins
              .filter(
                (pin) =>
                  selectedList === "지도보기" || pin.list === selectedList
              )
              .map((pin) => {
                return (
                  // 각 핀에 대한 마커
                  <MapMarker
                    key={pin.id}
                    position={pin.position}
                    clickable={true}
                    onClick={() => handleMarkerClick(pin)}
                  />
                );
              })}
            
            {/* CustomOverlay를 사용하여 인포윈도우를 직접 렌더링 */}
            {selectedPin && (
              <CustomOverlayMap
                position={selectedPin.position}
                // 기존의 HTML 문자열 방식 대신, React 컴포넌트를 사용
              >
                <InfoWindow
                  pin={selectedPin}
                  onClose={handleCloseInfoWindow}
                  isFavorited={isPinFavorited(selectedPin)}
                  onToggleFavorite={() => handleToggleFavorite(selectedPin)}
                  availableLists={lists} // 사용 가능한 리스트 전달
                  onRemove={handleRemovePin} // 삭제 함수 전달
                  onMoveList={handleMovePin} // 리스트 변경 함수 전달
                />
              </CustomOverlayMap>
            )}
          </Map>
        </div>

        {/* 검색창 - 지도 아래 위치 */}
        <div>
          <MapSearch mapObj={mapObj} onSelectPlace={handleSelectPlace} />
        </div>

        {/* 리스트 선택 및 추가 모달 */}
        {isModalOpen && (
          <MapListModal
            lists={lists}
            onSelect={(list) => {
              // 모달에서 리스트 선택 시
              // 인포윈도우에 표시된 핀 정보를 pins 배열에 추가
              if (selectedPin) {
                // 이미 즐겨찾기에 추가된 핀인지 확인
                if (!pins.some((p) => p.id === selectedPin.id)) {
                  // 새로운 핀을 생성하여 pins 배열에 추가
                  const newPin = {
                    ...selectedPin,
                    list,
                  };
                  setPins([...pins, newPin]);
                } else {
                  // 이미 존재하는 핀이면 리스트 이름만 업데이트
                  handleMovePin(selectedPin.id, list);
                }
                // 선택된 핀 정보 초기화
                setSelectedPin(null);
              }
              // 모달 닫기
              setIsModalOpen(false);
            }}
            onAddList={(name) => {
              // 새 리스트 추가
              handleAddList(name);
            }}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedPin(null);
            }}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default KakaoMap;