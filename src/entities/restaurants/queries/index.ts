import type { ResponseRestaurants } from './types';

export const getCoordsFromAddress = async (address: string) => {
  const res = await fetch(
    `https://dapi.kakao.com/v2/local/search/address.json?analyze_type=similar&page=1&size=1&query=${encodeURIComponent(
      address
    )}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`
      }
    }
  );
  const data = await res.json();
  const result = data.documents[0];
  return {
    latitude: parseFloat(result.y),
    longitude: parseFloat(result.x)
  };
};

export const getNearbyRestaurants = async (latitude: number, longitude: number, radius = 500) => {
  const res = await fetch(
    `https://dapi.kakao.com/v2/local/search/category.json?category_group_code=FD6&x=${longitude}&y=${latitude}&radius=${radius}&sort=distance`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`
      }
    }
  );
  const data = await res.json();
  return {
    documents: data.documents,
    latitude,
    longitude,
    radius
  } as ResponseRestaurants;
};
