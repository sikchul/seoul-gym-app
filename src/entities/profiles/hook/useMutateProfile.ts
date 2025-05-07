import { useMutation } from '@tanstack/react-query';

import { useAuth } from '@/apps/auth-provider';

import { updateProfile } from '../mutations';

export const useMutateProfile = () => {
  const { updateProfileInfo } = useAuth();

  return useMutation({
    mutationFn: updateProfile,
    onSettled: async (_, __, { profileId }) => {
      await updateProfileInfo(profileId);
    }
  });
};
