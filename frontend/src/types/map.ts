// 위도, 경도 좌표타입
export interface LatLng {
  lat: number;
  lng: number;
}

// 맵에 표시되는 핀 타입
export interface MapPin {
  id: string;
  position: LatLng;
  list: string;
  name: string;
  address?: string;
  phone?: string;
}

// 검색 결과 장소 타입
export interface Place {
  id: string;
  place_name: string;
  address_name: string;
  phone?: string;
  x: string;
  y: string;
}

// 맛집 리스트 타입
export type MapListProps = {
  lists: string[];                       // 맛집 리스트 이름 배열
  selectedList: string;                  // 현재 선택된 리스트 이름
  onChange: (list: string) => void;      // 리스트 선택 시 호출되는 콜백
  onAddList: (listName: string) => void; // 새 리스트 추가 시 호출되는 콜백
  onOpenModal: () => void;               // 리스트 추가 모달 열기 위한 콜백
};

// 전역 윈도우 객체에 kakao가 붙어있다는 선언 (타입스크립트 인지용)
export interface KakaoMapWindow extends Window {
  kakao: any;
}
