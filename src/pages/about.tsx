import Link from 'next/link';

import { facilityTypeCardData } from '@/features/about/facility-type-card/model';
import FacilityTypeCard from '@/features/about/facility-type-card/ui/iindex';
import { mainFeatureCardData } from '@/features/about/main-feature-card/model';
import MainFeatureCard from '@/features/about/main-feature-card/ui';
import { serviceBenefitCardData } from '@/features/about/service-benefit-card/model';
import ServiceBenefitCard from '@/features/about/service-benefit-card/ui';
import { RoutePath } from '@/shared/constant';
import { generatePath } from '@/shared/lib';
import { Button } from '@/shared/ui/button';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">서울 스포츠 소개</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          서울시 공공체육시설 정보를 한눈에 확인하고, 편리하게 이용할 수 있는 서비스입니다.
        </p>
      </div>
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="flex justify-center container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                건강한 삶을 위한 첫걸음, 서울 스포츠와 함께하세요
              </h2>
              <p className="text-blue-100 text-lg">
                서울시 공공체육시설을 쉽게 찾고, 편리하게 이용하여 더 건강한 라이프스타일을
                만들어보세요.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-32 h-32 rounded-full bg-white opacity-10"></div>
        <div className="absolute right-20 top-1/4 w-16 h-16 rounded-full bg-white opacity-10"></div>
        <div className="absolute right-40 bottom-10 w-24 h-24 rounded-full bg-white opacity-10"></div>
      </div>
      <div className="bg-blue-50 rounded-xl p-6 md:p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">서비스 목적</h2>
          <p className="text-gray-700 leading-relaxed">
            서울 스포츠는 서울시민들이 가까운 공공체육시설을 쉽게 찾고 이용할 수 있도록 돕기 위해
            만들어졌습니다. 건강한 생활습관 형성과 삶의 질 향상을 위해 누구나 쉽게 체육시설 정보에
            접근하고, 다양한 스포츠 활동을 즐길 수 있는 환경을 조성하는 것이 저희의 목표입니다.
            시민들의 건강 증진과 여가 활동 활성화를 통해 더 활기차고 건강한 서울을 만들어
            나가겠습니다.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">주요 기능</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainFeatureCardData.map((item) => (
            <MainFeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">서비스 이용의 이점</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceBenefitCardData.map((item) => (
            <ServiceBenefitCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">주요 체육시설 유형</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {facilityTypeCardData.map((item) => (
            <FacilityTypeCard
              key={item.title}
              title={item.title}
              description={item.description}
              IconElement={item.icon}
              backgroundComponent={item.backgroundComponent}
              gradientComponent={item.gradientComponent}
            />
          ))}
        </div>
      </div>
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">지금 바로 서울 스포츠와 함께하세요</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          건강한 삶을 위한 첫걸음, 서울 스포츠가 함께합니다. 지금 바로 내 주변의 체육시설을
          찾아보세요!
        </p>
        <Link href={generatePath(RoutePath.Home)}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            시설 찾아보기
          </Button>
        </Link>
      </div>
    </div>
  );
}
