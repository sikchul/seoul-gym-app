import { useQuery } from '@tanstack/react-query';

import { EducationQueryKey } from '../constant/queryKey';
import { getEducationTypes } from '../queries';

export const useFetchEducationTypes = () => {
  return useQuery({
    queryKey: EducationQueryKey.fetchEducationType,
    queryFn: getEducationTypes
  });
};
