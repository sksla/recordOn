import React, { useState } from "react";
import { Map, MapTypeControl, ZoomControl, MapMarker } from "react-kakao-maps-sdk";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Footer from "../../../layouts/footers/Footer";
import MapSearch from "./map-search";
import MapList from "./mapList";
import MapListItem from "./mapListItem";
import MapListModal from "./mapListModal";  // 리스트 선택/추가 모달
import InfoWindow from "./infoWindow";      // 분리된 인포윈도우 컴포넌트
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

  // 장소 선택 시 호출되는 함수: 지도 중심 이동 및 상태 업데이트
  const handleSelectPlace = (place: Place) => {
    const newPos = { lat: parseFloat(place.y), lng: parseFloat(place.x) };
    setPosition(newPos);
    if (mapObj) {
      // 카카오맵 API를 사용해 지도 중심 이동
      mapObj.setCenter(new window.kakao.maps.LatLng(newPos.lat, newPos.lng));
    }

    // pins에 새 핀 추가 (중복 체크 추가)
    setPins((prevPins) => {
      // 이미 존재하면 추가 안 함
      if (prevPins.some(pin => pin.id === place.id)) return prevPins;

      const newPin: MapPin = {
        id: place.id,
        name: place.place_name,
        position: newPos,
        list: "지도보기", // 기본 리스트 이름
        address: place.address_name,
        phone: place.phone,
      };
      return [...prevPins, newPin];
    });
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
    setPins(pins.map((p) => (p.id === id ? { ...p, list: newList } : p)));
  };

  // 마커 클릭 시 인포윈도우 띄우기 위해 선택된 핀 상태 저장
  const handleMarkerClick = (pin: MapPin) => {
    setSelectedPin(pin);
  };

  // 인포윈도우 닫기 함수
  const handleCloseInfoWindow = () => {
    setSelectedPin(null);
  };

  // 특정 핀이 즐겨찾기에 등록되어 있는지 여부 체크 함수
  const isPinFavorited = (pin: MapPin) => pins.some(p => p.id === pin.id);

  // 하트 버튼 클릭 시 호출되는 함수
  const handleToggleFavorite = (pin: MapPin) => {
    if (isPinFavorited(pin)) {
      // 이미 추가된 경우 (꽉찬 하트) => 삭제 처리
      handleRemovePin(pin.id);
    } else {
      // 추가 안 된 경우 (빈 하트) => 모달 열고 선택된 핀 저장
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
            onOpenModal={() => setIsModalOpen(true)} // 모달 열기 함수 전달
          />

          {/* 카카오 지도 컴포넌트 */}
          <Map
            center={{ lat: 37.4979, lng: 127.0276 }}
            style={{ width: "100%", height: "680px" }}
            level={4}
            onCreate={(map) => setMapObj(map)} // 지도 생성 시 map 객체 저장
            onTileLoaded={(map) =>
              setPosition({
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
              })
            }
          >
            {/* 지도 타입 컨트롤, 줌 컨트롤 */}
            <MapTypeControl position={"TOPRIGHT"} />
            <ZoomControl position={"RIGHT"} />

            {/* 현재 선택 위치 마커 표시 (예: 검색 위치) */}
            {!!position && <MapMarker position={position} />}

            {/* 선택 리스트에 따른 즐겨찾기 맵핀 표시 (마커만) */}
            {pins
              .filter((pin) => selectedList === "지도보기" || pin.list === selectedList)
              .map((pin) => (
                <MapMarker
                  key={pin.id}
                  position={pin.position}
                  clickable={true}
                  onClick={() => {
                    handleMarkerClick(pin);
                  }} // 마커 클릭 시 선택된 핀 업데이트
                />
              ))}

            {/* 선택된 핀에 대한 인포윈도우는 별도로 MapMarker로 렌더링 */}
            {selectedPin && (
              <InfoWindow
                position={selectedPin.position}
                pin={selectedPin}
                onClose={handleCloseInfoWindow}
                isFavorited={isPinFavorited(selectedPin)} // 즐겨찾기 여부 전달
                onToggleFavorite={() => handleToggleFavorite(selectedPin)} // 하트 클릭 핸들러 전달
              />
            )}
          </Map>
        </div>

        {/* 검색창 - 지도 아래 위치 */}
        <div>
          <MapSearch mapObj={mapObj} onSelectPlace={handleSelectPlace} />
        </div>

        {/* 즐겨찾기 맵핀 리스트 (하단) */}
        {/* <div>
          {pins
            .filter((pin) => selectedList === "지도보기" || pin.list === selectedList)
            .map((pin) => (
              <MapListItem
                key={pin.id}
                pin={pin}
                onRemove={handleRemovePin}
                onMoveList={handleMovePin}
                availableLists={lists}
              />
            ))}
        </div> */}

        {/* 리스트 선택 및 추가 모달 */}
        {isModalOpen && (
          <MapListModal
            lists={lists}
            onSelect={(list) => {
              // 모달에서 리스트 선택 시
              setSelectedList(list);

              if (selectedPin) {
                // 선택된 핀을 해당 리스트에 추가
                setPins([...pins, { ...selectedPin, list }]);
                setSelectedPin(null);
              }
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
