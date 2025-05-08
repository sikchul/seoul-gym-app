import { useQuery } from '@tanstack/react-query';

import { EducationQueryKey } from '../constant/queryKey';
import { getEducations } from '../queries';

export const useFetchEducations = (type: string) => {
  return useQuery({
    queryKey: EducationQueryKey.fetchEducations(type),
    queryFn: () => getEducations({ type })
  });
};
