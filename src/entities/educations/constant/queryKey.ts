export const EducationQueryKey = {
  fetchEducationType: ['fetchEducationType'] as const,
  fetchEducations: (type: string) => ['fetchEducations', { type }] as const
};
