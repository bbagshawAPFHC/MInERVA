import axios from 'axios';

export const getUserProfilePicture = async (accessToken: string): Promise<string> => {
  const response = await axios.get('/api/profile-picture', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    responseType: 'blob',
  });
  const pictureUrl = URL.createObjectURL(response.data);
  return pictureUrl;
};
