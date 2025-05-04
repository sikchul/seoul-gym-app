import { Dumbbell, PocketIcon as Pool, Bike } from 'lucide-react';

export const facilityTypeCardData = [
  {
    title: '수영장 시설',
    description:
      '다양한 수영 프로그램과 함께 건강한 수중 운동을 즐길 수 있는 시설입니다. 레인 수영, 아쿠아로빅, 유아 수영 등 다양한 프로그램이 운영됩니다.',
    icon: Pool,
    backgroundComponent: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600 group-hover:scale-105 transition-transform duration-300"></div>
    ),
    gradientComponent: (
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
    )
  },
  {
    title: '체육관 시설',
    description:
      '실내 스포츠와 다양한 운동 기구를 갖춘 종합 체육 시설입니다. 농구, 배구, 배드민턴 등 다양한 실내 스포츠를 즐길 수 있습니다.',
    icon: Dumbbell,
    backgroundComponent: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 group-hover:scale-105 transition-transform duration-300"></div>
    ),
    gradientComponent: (
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-900/70 to-transparent"></div>
    )
  },
  {
    title: '운동장 시설',
    description:
      '축구, 야구, 육상 등 다양한 야외 스포츠를 즐길 수 있는 넓은 공간입니다. 자연 속에서 활기찬 스포츠 활동을 경험할 수 있습니다.',
    icon: Bike,
    backgroundComponent: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-lime-600 group-hover:scale-105 transition-transform duration-300"></div>
    ),
    gradientComponent: (
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-900/70 to-transparent"></div>
    )
  }
];
