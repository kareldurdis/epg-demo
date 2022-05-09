import React from 'react';
import useEpg from '../../hooks/useEpg';

type Props = {
  epgUrl: string;
};

const Guide = ({ epgUrl }: Props) => {
  const { data } = useEpg(epgUrl);
  if (data) {
    console.log(data);
  }

  return <p>Guide</p>;
};

export default Guide;
