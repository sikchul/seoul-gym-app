import { Users, Utensils, MessageSquare, Heart, MapPin, Search } from 'lucide-react';

export const mainFeatureCardData = [
  {
    title: '체육시설 검색',
    description: '지역, 시설 유형별로 원하는 체육시설을 쉽게 찾을 수 있습니다.',
    content:
      '다양한 필터 옵션을 통해 내 주변 또는 특정 지역의 체육시설을 빠르게 검색하고 찾을 수 있습니다. 시설명이나 주소로도 검색이 가능해 원하는 시설을 쉽게 찾을 수 있습니다.',
    IconElement: Search
  },
  {
    title: '상세 정보 제공',
    description: '각 시설의 위치, 이용 요금, 부대시설 등 상세 정보를 확인할 수 있습니다.',
    content:
      '체육시설의 주소, 이용 요금, 부대시설 정보 등을 한눈에 확인할 수 있어 방문 전 필요한 정보를 미리 파악할 수 있습니다. 이용 시간, 예약 방법 등 실용적인 정보를 제공합니다.',
    IconElement: MapPin
  },
  {
    title: '즐겨찾기 기능',
    description: '자주 이용하는 시설을 즐겨찾기에 추가하여 쉽게 접근할 수 있습니다.',
    content:
      '마음에 드는 체육시설을 즐겨찾기에 추가하여 나만의 시설 목록을 관리할 수 있습니다. 자주 방문하는 시설을 빠르게 찾아볼 수 있어 편리합니다.',
    IconElement: Heart
  },
  {
    title: '리뷰 및 댓글',
    description: '각 시설에 대한 리뷰와 댓글을 확인할 수 있습니다.',
    content:
      '다른 이용자들의 리뷰와 평가를 확인하고, 직접 경험을 공유할 수 있습니다. 시설의 실제 상태와 이용 경험을 미리 확인할 수 있습니다.',
    IconElement: MessageSquare
  },
  {
    title: '주변 식당 추천',
    description: '체육시설 주변의 식당 정보를 제공하여 운동 후 식사 계획에 도움을 줍니다.',
    content:
      '운동 후 방문할 수 있는 주변 식당 정보를 함께 제공하여 원스톱 서비스를 경험할 수 있습니다. 식당의 유용한 정보를 확인할 수 있습니다.',
    IconElement: Utensils
  },
  {
    title: '개인 프로필 관리',
    description: '개인 프로필을 통해 활동 내역과 관심 시설을 관리할 수 있습니다.',
    content:
      '개인 프로필을 통해 활동 내역과 관심 시설을 관리할 수 있습니다. 서비스를 통해 더 편리한 체육시설 이용이 가능합니다.',
    IconElement: Users
  }
];
