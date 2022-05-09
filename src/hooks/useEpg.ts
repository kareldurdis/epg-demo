import { useQuery } from 'react-query';
import axios from 'axios';

type Schedule = {
  title: string;
  id: string;
  start: string;
  end: string;
};

type Channel = {
  id: string;
  title: string;
  images: {
    logo: string;
  };
  schedules: Schedule[];
};

type EPG = {
  channels: Channel[];
};

const useEpg = (epgUrl) => {
  return useQuery<EPG, Error>('channels', async () => {
    const { data } = await axios.get<EPG>(epgUrl);
    return data;
  });
};

export default useEpg;
